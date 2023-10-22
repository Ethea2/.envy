import { connectMongoDB } from "@/libs/mongodb";
import Env from "@/models/envModel";
import User from "@/models/userModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import crypto from "node:crypto"

export const POST = async (req: Request) => {
	const session = await getServerSession();
	if (!session || !session.user) {
		return NextResponse.json(
			{ message: "Unauthorized!" },
			{ status: 400 },
		);
	}
    const { fileName, name, value } = req.json()


    

};
