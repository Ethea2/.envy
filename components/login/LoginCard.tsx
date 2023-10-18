"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { signIn, SignInResponse } from "next-auth/react";
import { useRef } from "react";
import { toast, Id } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const LoginCard = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const toastID = useRef<Id>();
	const router = useRouter();
	const { data: session, status } = useSession();

	useEffect(() => {
		if (status !== "loading") {
			if (status === "authenticated") router.push("/" + session?.user?.name);
		}
	}, [status]);

	const login = async () => {
		toastID.current = toast.loading("Logging in...");
		if (username === "" || password === "")
			return toast.update(toastID.current ?? "", {
				render: "Please fill out the fields!",
				autoClose: 3000,
				hideProgressBar: false,
				closeButton: true,
				type: "error",
				isLoading: false,
			});

		try {
			const res = await signIn("credentials", {
				username: username,
				password: password,
				redirect: false,
			});

			if (res?.status === 200) {
				toast.update(toastID.current ?? "", {
					render: "Successfully logged in!",
					autoClose: 3000,
					hideProgressBar: false,
					closeButton: true,
					type: "success",
					isLoading: false,
				});
				router.push("/");
			} else {
				toast.update(toastID.current ?? "", {
					render: res?.error,
					autoClose: 3000,
					hideProgressBar: false,
					closeButton: true,
					type: "error",
					isLoading: false,
				});
			}
		} catch (e) {
			toast.update(toastID.current ?? "", {
				render: "Something went wrong!",
				autoClose: 3000,
				hideProgressBar: false,
				closeButton: true,
				type: "error",
				isLoading: false,
			});
		}
	};
	const handleSubmit = async (e: React.MouseEvent) => {
		e.preventDefault();
		login()
	};

	const handleEnter = (e: React.KeyboardEvent) => {
		if(e.key === 'Enter') {
			login()
		}
	}
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
				onKeyDown={(e) => handleEnter(e)}
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
