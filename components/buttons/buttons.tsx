"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BsFillClipboardFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { EnvType } from "@/types/envTypes";
import { toast } from "react-toastify";

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
	setShow,
}: {
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const buttonVariants = {
		initial: { scale: 1 },
		pressed: { scale: 0.95 },
	};

	return (
		<motion.button
			className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
			whileTap="pressed"
			variants={buttonVariants}
			onClick={() => setShow(true)}
		>
			<AiFillPlusCircle />
		</motion.button>
	);
};
