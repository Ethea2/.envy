import mongoose from "mongoose";

const Schema = mongoose.Schema;

const envSchema = new Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	files: [
		{
			fileName: {
				type: String,
				required: true,
			},
			envs: [
				{
					name: {
						type: String,
					},
					value: {
						type: String,
					},
					iv: {
						type: String,
					},
				},
			],
		},
	],
});

const Env = mongoose.models.Env || mongoose.model("Env", envSchema);
export default Env;
