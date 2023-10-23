import { connectMongoDB } from "@/libs/mongodb";
import Env from "@/models/envModel";
import { FileType } from "@/types/fileTypes";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { CipherGCMTypes, CipherKey } from "node:crypto";

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
		const { fileName, name, value, projectId } = await req.json();
		const iv = crypto.randomBytes(16);

		const project = await Env.findById(projectId);
		if (!project) {
			return NextResponse.json(
				{ message: "This project does not exist" },
				{ status: 404 },
			);
		}

		const fileIndex = project.files?.findIndex(
			(file: FileType) => file.fileName === fileName,
		);
		if (fileIndex === -1) {
			return NextResponse.json(
				{ message: "No such file exists!" },
				{ status: 404 },
			);
		}
		const cipher = crypto.createCipheriv(
			process.env.ALGORITHM as CipherGCMTypes,
			process.env.SERVER_KEY as CipherKey,
			iv,
		);

		let encryptedValue = cipher.update(value, "utf-8", "hex");
		encryptedValue += cipher.final("hex");

		const base64Value = iv.toString("base64");
		const newEnv = {
			name: name as string,
			iv: base64Value,
			value: encryptedValue,
		};
		project.files[fileIndex as number].envs.push(newEnv);

		project.save();
		return NextResponse.json({ message: "ENV saved" });
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "server error" }, { status: 500 });
	}
};


