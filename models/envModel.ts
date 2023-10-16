import mongoose from "mongoose";

const Schema = mongoose.Schema;

const envSchema = new Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	envs: [
		{
			name: {
				type: String,
			},
			value: {
				type: String,
			},
		},
	],
});

const Env = mongoose.models.Env || mongoose.model("Env", envSchema);
export default Env;
