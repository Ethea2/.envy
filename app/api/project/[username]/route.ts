import { connectMongoDB } from "@/libs/mongodb";
import Env from "@/models/envModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async (
	req: Request,
	{ params }: { params: { username: string } },
) => {
	try {
		connectMongoDB();
		const username = params.username;
		const user = await User.findOne({ username });
		if (!user)
			return NextResponse.json(
				{ message: "This user does not exist!" },
				{ status: 404 },
			);
		const projects = await Env.find(
			{
				_id: {
					$in: user.projects,
				},
			},
			"_id title description",
		);
		return NextResponse.json(projects);
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{ message: "Something went wrong!" },
			{ status: 500 },
		);
	}
};
