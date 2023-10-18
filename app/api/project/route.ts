import { connectMongoDB } from "@/libs/mongodb";
import Env from "@/models/envModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		connectMongoDB();
		const envs = await Env.find({});
		return NextResponse.json(envs);
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "Something went wrong!" },
			{ status: 500 },
		);
	}
};

export const POST = async (req: Request) => {
	const { username, title, description } = await req.json();
	try {
		connectMongoDB();
		const user = await User.findOne({ username });
		if (!user)
			return NextResponse.json(
				{ message: "This user does not exist!" },
				{ status: 404 },
			);

		const env = await Env.create({
			title,
			description,
		});

		user.projects.push(env._id);

		user.save();
		return NextResponse.json(
			{ message: "Successfully created a new project!" },
			{ status: 200 },
		);
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "Something went wrong!" },
			{ status: 500 },
		);
	}
};
