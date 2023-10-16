import mongoose from "mongoose";

const Schema = mongoose.Schema;

const emailVerificationSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	verificationCode: {
		type: String,
		required: true,
	},
    createdAt: {
        type: Date,
        default: Date.now,
        expires: "10m"
    }
});

const EmailVerification = mongoose.models.EmailVerification || mongoose.model("EmailVerification", emailVerificationSchema)

export default EmailVerification