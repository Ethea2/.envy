import { connectMongoDB } from "@/libs/mongodb";
import Env from "@/models/envModel";
import { EnvType } from "@/types/envTypes";
import { FileType } from "@/types/fileTypes";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { CipherGCMTypes, CipherKey } from "node:crypto";

export const GET = async (
	req: Request,
	{ params }: { params: { projectId: string } },
) => {
	try {
        const session = await getServerSession();
        console.log(session)
		if (!session || !session.user) {
			return NextResponse.json(
				{ message: "Unauthorized!" },
				{ status: 400 },
			);
		}
		const projectId = params.projectId;
		const projects = await Env.findById(projectId);
		const decryptedData = projects.files.map((file: FileType) => {
			const decryptedEnvs = file.envs.map((env: EnvType) => {
				const ogValue = env.value;
				const ogData = Buffer.from(env.iv, "base64");
				const decipher = crypto.createDecipheriv(
					process.env.ALGORITHM as CipherGCMTypes,
					process.env.SERVER_KEY as CipherKey,
					ogData,
				);
				let decryptedData = decipher.update(ogValue, "hex", "utf-8");
				decryptedData += decipher.final("utf8");
				return {
					name: env.name,
					value: decryptedData,
				};
			});
			return {
				fileName: file.fileName,
				envs: decryptedEnvs,
			};
		});
		return NextResponse.json(decryptedData);
	} catch (e) {
		console.log(e);
		return NextResponse.json({ message: "Server error!" }, { status: 500 });
	}
};
