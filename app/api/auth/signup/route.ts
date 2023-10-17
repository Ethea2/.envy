import { connectMongoDB } from "@/libs/mongodb";
import bcrypt from "bcrypt";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const BCRYPT_SALT_ROUNDS = 12;

const resend = new Resend(process.env.RESEND_KEY);
const DEFAULT_IMAGE = "https://res.cloudinary.com/dtocowzq2/image/upload/v1697515297/CYBERZ/tr1qkg2qog7yrxggifvu.jpg"

export const POST = async (req: Request) => {
	const { username, password, email } = await req.json();
	connectMongoDB();
	try {
		if (!username || !password || !email)
			return NextResponse.json(
				{ message: "Missing parameters" },
				{ status: 400 },
			);

		const user = await User.findOne({
			$or: [{ username }, { email }],
		});
		if (user !== null)
			return NextResponse.json(
				{
					message: "The username or email has already been taken",
				},
				{ status: 400 },
			);

		const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
		const hashedPass = await bcrypt.hash(password as string, salt);

		const newUser = await User.create({
			username,
			password: hashedPass,
			email,
			img: DEFAULT_IMAGE
		});

		return NextResponse.json({ message: "Successfully registered!" });
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: e }, { status: 400 });
	}
};
