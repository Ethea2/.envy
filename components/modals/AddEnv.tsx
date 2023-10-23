const AddEnv = ({
	show,
	handleShow,
}: {
	show: boolean;
	handleShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<>
			{show && (
				<div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/70">
					<div
						onClick={() => handleShow(false)}
						className="fixed top-0 flex justify-center items-center w-screen h-screen -z-10"
					></div>
					<div className="flex flex-col p-8 justify-start items-start w-[90%] md:w-[40%] rounded-2xl bg-base-100 border-dashed border-4 border-primary">
						<div className="text-5xl">Add Env!</div>
						<div className="divider w-full before:bg-primary after:bg-primary"></div>
						<div className="flex flex-col w-full mt-5">
							<label>Project Title</label>
							<input
								type="text"
								className="input input-bordered input-secondary w-full text-white"
								required
								name="title"
							/>
						</div>
						<div className="flex flex-col w-full mt-5">
							<label>Project Description</label>
							<input
								type="text"
								className="input input-bordered input-secondary w-full text-white"
								required
								name="description"
							/>
						</div>
						<div className="flex w-full mt-5 justify-between lg:justify-end lg:gap-5">
							<button
								className="btn btn-secondary w-1/4 text-xs md:text-base md:w-1/3 h-full"
								onClick={() => handleShow(false)}
								type="button"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AddEnv;
