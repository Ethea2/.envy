"use client";
const SignupCard = () => {
	return (
		<div className="w-full h-full md:h-1/2 md:w-1/2 border-2 flex flex-col gap-5 justify-center p-20 items-start bg-gradient-to-b from-base-100 to-secondary-focus">
			<div className="text-2xl md:text-5xl w-full">Create an Account!</div>
			<div className="flex flex-col md:flex-row justify-between w-full items-center">
				<label>Username</label>
				<input
					type="text"
					placeholder="Username"
					className="input input-bordered w-full max-w-xs"
				/>
			</div>
			<div className="flex flex-col md:flex-row justify-between w-full items-center">
				<label>Email</label>
				<input
					type="text"
					placeholder="Email"
					className="input input-bordered w-full max-w-xs"
				/>
			</div>
			<div className="flex flex-col md:flex-row justify-between w-full items-center">
				<label>Password</label>
				<input
					type="text"
					placeholder="Password"
					className="input input-bordered w-full max-w-xs"
				/>
			</div>
			<div className="flex flex-col md:flex-row justify-between w-full items-center">
				<label>Confirm Password</label>
				<input
					type="text"
					placeholder="Confirm Password"
					className="input input-bordered w-full max-w-xs"
				/>
			</div>
			<div className="w-full flex flex-col gap-2 md:flex-row justify-end">
				<button className="btn btn-primary">
					Create your Account!
				</button>
			</div>
		</div>
	);
};

export default SignupCard;
