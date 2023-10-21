"use server";
import User from "@/models/userModel";
import Env from "@/models/envModel";
import { connectMongoDB } from "./mongodb";
import { revalidatePath } from "next/cache";

export const addProject = async (username: string, formData: FormData) => {
	try {
		const title = formData.get("title") as string;
		const description = formData.get("description") as string;
		connectMongoDB();
		const user = await User.findOne({ username });
		if (!user) return { message: "This user does not exist!" };

		const env = await Env.create({
			title,
			description,
		});
        console.log("triggered")
		user.projects.push(env._id);
		revalidatePath(`/${username}`);
		user.save();
        return {
            message: "Project added!"
        }
	} catch (e) {
		console.log(e);
		return {
			message: "Something went wrong!",
		};
	}
};
