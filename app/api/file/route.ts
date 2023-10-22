import { connectMongoDB } from "@/libs/mongodb";
import Env from "@/models/envModel";
import User from "@/models/userModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	try {
		// const session = await getServerSession();
		// if (!session || !session.user) {
		// 	return NextResponse.json(
		// 		{ message: "Unauthorized!" },
		// 		{ status: 400 },
		// 	);
		// }
		connectMongoDB();
		const { projectId, fileName } = await req.json();

		const project = await Env.findById(projectId);
		if (!project) {
			return NextResponse.json(
				{ message: "This project does not exist" },
				{ status: 404 },
			);
		}
		project.files.push({
			fileName,
			envs: [],
		});
		project.save();
		return NextResponse.json({ message: "Successfully" }, { status: 200 });
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "Server error" }, { status: 500 });
	}
};
