"use client";
import useAddEnv from "@/hooks/useAddEnv";
import { FileType } from "@/types/fileTypes";
import React, { useEffect, useState, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Router from "next/router";
const AddEnv = ({
	show,
	handleShow,
	fileName,
	projectId,
}: {
	show: boolean;
	handleShow: React.Dispatch<React.SetStateAction<boolean>>;
	fileName: string;
	projectId: string;
}) => {
	const [name, setName] = useState("");
	const [value, setValue] = useState("");
	const { pushEnv, state } = useAddEnv(fileName, name, value, projectId);
	const router = useRouter();
	const handleSubmit = async () => {
		const pushState = await pushEnv();
		if (pushState === "success") {
			router.refresh();
			handleShow(false);
		}
	};

	return (
		<>
			{show && (
				<div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/70">
					<div
						onClick={() => handleShow(false)}
						className="fixed top-0 flex justify-center items-center w-screen h-screen -z-10"
					></div>
					<div className="flex flex-col p-8 justify-start items-start w-[90%] md:w-[40%] rounded-2xl bg-base-100 border-dashed border-4 border-primary">
						<div className="text-5xl">Add Env to {fileName}!</div>
						<div className="divider w-full before:bg-primary after:bg-primary"></div>
						<div className="flex flex-col w-full mt-5">
							<label>Env Name</label>
							<input
								type="text"
								className="input input-bordered input-secondary w-full text-white"
								required
								name="title"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="flex flex-col w-full mt-5">
							<label>Env Value</label>
							<input
								type="text"
								className="input input-bordered input-secondary w-full text-white"
								required
								name="description"
								onChange={(e) => setValue(e.target.value)}
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
							<button
								className="btn btn-primary w-1/2 text-xs md:text-base md:w-1/3 h-full"
								onClick={handleSubmit}
							>
								Add Env!
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AddEnv;
