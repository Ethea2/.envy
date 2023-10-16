"use client";
const LoginCard = () => {
	return (
		<div className="w-full h-full md:h-1/2 md:w-1/2 border-2 flex flex-col gap-5 justify-center items-center bg-gradient-to-b from-base-100 to-secondary-focus">
			<div className="text-2xl md:text-5xl">Welcome back!</div>
            <input
				type="text"
				placeholder="Username"
				className="input input-bordered w-full max-w-xs"
			/>
			<input
				type="password"
				placeholder="Password"
				className="input input-bordered w-full max-w-xs"
			/>
			<button className="btn btn-primary">Login</button>
            <div className="divider before:bg-primary after:bg-primary text-lg">or</div>
            <div className="w-full text-center">New here? <span className="underline text-primary">Create an Account</span></div>
		</div>
	);
};

export default LoginCard;
