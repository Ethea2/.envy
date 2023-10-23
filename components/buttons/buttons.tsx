"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, SetStateAction } from "react";
import { BsFillClipboardFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { EnvType } from "@/types/envTypes";
import { toast } from "react-toastify";
import AddEnv from "../modals/AddEnv";
import { FileType } from "@/types/fileTypes";

export const CopyButton = ({ env }: { env: EnvType }) => {
	const buttonVariants = {
		initial: { scale: 1 },
		pressed: { scale: 0.95 },
	};

	const copy = () => {
		const envString = `${env.name}=${env.value}`;
		navigator.clipboard.writeText(envString);
		toast("📋 Successfully copied to clipboard");
	};

	return (
		<motion.button
			className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
			whileTap="pressed"
			variants={buttonVariants}
			onClick={copy}
		>
			<BsFillClipboardFill />
		</motion.button>
	);
};

export const CopyAll = ({ envs }: { envs: Array<EnvType> }) => {
	const buttonVariants = {
		initial: { scale: 1 },
		pressed: { scale: 0.95 },
	};
	const copyAll = () => {
		let copyEnv = "";
		envs.forEach((env) => {
			copyEnv += `${env.name}=${env.value}\n`;
		});

		navigator.clipboard.writeText(copyEnv);
		toast("📋 Successfully copied to clipboard");
	};
	return (
		<motion.button
			className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
			whileTap="pressed"
			variants={buttonVariants}
			onClick={copyAll}
		>
			<BsFillClipboardFill />
		</motion.button>
	);
};

export const AddButton = ({
	fileName,
	projectId,
}: {
	fileName: string;
	projectId: string;
}) => {
	const [show, setShow] = useState<boolean>(false);
	const buttonVariants = {
		initial: { scale: 1 },
		pressed: { scale: 0.95 },
	};

	return (
		<>
			<AddEnv
				show={show}
				handleShow={setShow}
				projectId={projectId}
				fileName={fileName}
			/>
			<motion.button
				className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
				whileTap="pressed"
				variants={buttonVariants}
				onClick={() => setShow(true)}
			>
				<AiFillPlusCircle />
			</motion.button>
		</>
	);
};
