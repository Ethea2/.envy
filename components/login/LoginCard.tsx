"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import { toast, Id } from "react-toastify";
import { useRouter } from "next/navigation";
const LoginCard = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const toastID = useRef<Id>();
	const router = useRouter()

	const handleSubmit = async (e: React.MouseEvent) => {
		e.preventDefault();
		toastID.current = toast.loading("Logging in...");
		const res = await signIn("credentials", {
			username: username,
			password: password,
			redirect: false,
		})
			.then((res) => {
				toast.update(toastID.current ?? "", {
					render: "Successfully logged in!",
					autoClose: 3000,
					hideProgressBar: false,
					closeButton: true,
					type: "success",
					isLoading: false,
				});
				router.push('/')
			})
			.catch((e) => {
				toast.update(toastID.current ?? "", {
					render: "Something went wrong!",
					autoClose: 3000,
					hideProgressBar: false,
					closeButton: true,
					type: "error",
					isLoading: false,
				});
			});
		console.log(res);
	};

	return (
		<div className="w-full h-full md:h-1/2 md:w-1/2 border-2 flex flex-col gap-5 justify-center items-center bg-gradient-to-b from-base-100 to-secondary-focus">
			<div className="text-2xl md:text-5xl">Welcome back!</div>
			<input
				type="text"
				placeholder="Username"
				className="input input-bordered w-full max-w-xs"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				className="input input-bordered w-full max-w-xs"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button
				className="btn btn-primary"
				onClick={(e) => handleSubmit(e)}
			>
				Login
			</button>
			<div className="divider before:bg-primary after:bg-primary text-lg">
				or
			</div>
			<div className="w-full text-center">
				New here?{" "}
				<Link href="/signup">
					<span className="underline text-primary">
						Create an Account
					</span>
				</Link>
			</div>
		</div>
	);
};

export default LoginCard;
