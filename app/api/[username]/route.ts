import { connectMongoDB } from "@/libs/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async (
	req: Request,
	{ params }: { params: { username: string } },
) => {
	try {
		connectMongoDB();
		const username = params.username;
		const user = await User.findOne({ username }, '_id username img');
		if (!user)
			return NextResponse.json(
				{ message: "This user does not exist!" },
				{ status: 404 },
			);
		return NextResponse.json(user);
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "Something went wrong!" },
			{ status: 500 },
		);
	}
};
