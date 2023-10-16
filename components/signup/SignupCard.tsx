"use client";
import useRegister from "@/hooks/useRegister";
import { useState } from "react";
import { toast } from "react-toastify";

const SignupCard = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [confirm, setConfirm] = useState<string>("");
	const { signup } = useRegister();

	const handleSubmit = async (
		e: React.MouseEvent,
		username: string,
		password: string,
		email: string,
		confirm: string,
	) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (password !== confirm)
			return toast("Ensure your password and confirmation match!", {
				type: "error",
			});

		if (!emailRegex.test(email))
			return toast("Invalid email", { type: "error" });

		await signup(username, password, email);
	};

	return (
		<div className="w-full h-full md:h-1/2 md:w-1/2 border-2 flex flex-col gap-5 justify-center p-20 items-start bg-gradient-to-b from-base-100 to-secondary-focus">
			<div className="text-2xl md:text-5xl w-full">
				Create an Account!
			</div>
			<div className="flex flex-col md:flex-row justify-between w-full items-center">
				<label>Username</label>
				<input
					type="text"
					placeholder="Username"
					className="input input-bordered w-full max-w-xs"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div className="flex flex-col md:flex-row justify-between w-full items-center">
				<label>Email</label>
				<input
					type="text"
					placeholder="Email"
					className="input input-bordered w-full max-w-xs"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex flex-col md:flex-row justify-between w-full items-center">
				<label>Password</label>
				<input
					type="password"
					placeholder="Password"
					className="input input-bordered w-full max-w-xs"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className="flex flex-col md:flex-row justify-between w-full items-center">
				<label>Confirm Password</label>
				<input
					type="password"
					placeholder="Confirm Password"
					className="input input-bordered w-full max-w-xs"
					value={confirm}
					onChange={(e) => setConfirm(e.target.value)}
				/>
			</div>
			<div className="w-full flex flex-col gap-2 md:flex-row justify-end">
				<button
					className="btn btn-primary"
					onClick={(e) =>
						handleSubmit(e, username, password, email, confirm)
					}
				>
					Create your Account!
				</button>
			</div>
		</div>
	);
};

export default SignupCard;
