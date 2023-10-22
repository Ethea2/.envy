"use server";
import User from "@/models/userModel";
import Env from "@/models/envModel";
import { connectMongoDB } from "./mongodb";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";

export const addProject = async (prevState: any, formData: FormData) => {
	try {
		const title = formData.get("title") as string;
		const description = formData.get("description") as string;
		const session = await getServerSession();
		if (!session || !session.user) {
			return { message: "Unauthorized!", type: "error" };
		}
		connectMongoDB();
		const user = await User.findOne({ username: session.user.name });
		if (!user)
			return { message: "This user does not exist!", type: "error" };

		const env = await Env.create({
			title,
			description,
		});
		console.log("triggered");
		user.projects.push(env._id);
		revalidatePath(`/${session.user.name}`);
		user.save();
		return {
			message: "Project successfuly added!",
			type: "success",
		};
	} catch (e) {
		console.log(e);
		return {
			message: "Something went wrong!",
			type: "error",
		};
	}
};
