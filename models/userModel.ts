import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	projects: [
		{
			type: mongoose.Types.ObjectId,
			ref: "Env",
		},
	],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
