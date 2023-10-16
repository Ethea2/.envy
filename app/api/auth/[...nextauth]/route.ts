import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import { connectMongoDB } from "@/libs/mongodb";

const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(credentials, req) {
				connectMongoDB();
				const { username, password } = credentials as {
					username: string;
					password: string;
				};
				const user = await User.findOne({ username });
				if (!user) {
					throw new Error("Account does not exist!");
				}
				const match = await bcrypt.compare(password, user.password);
				if (!match) {
					throw new Error("Wrong password");
				}
				return {
					name: user.username,
					email: user.email,
					id: user._id,
				};
			},
		}),
	],
	callbacks: {
		session({ session, user }) {
			return session;
		},
	},
	pages: {
		signIn: "/login",
		error: "/login",
	},
};

const authHandler = NextAuth(authOptions);
export { authHandler as GET, authHandler as POST };
