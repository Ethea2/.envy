"use client";

import { EnvType } from "@/types/envTypes";
import { CopyButton } from "../buttons/buttons";

const EnvContainer = ({ env }: { env: EnvType }) => {
	return (
		<div className="flex w-full h-fit justify-between border-2 border-dashed border-accent p-2">
			<div className="flex gap-2 justify-center items-center">
				<div className="font-bold">{env.name}</div>
				<input
					type="text"
					className="input cursor-pointer"
					value={env.value}
					disabled
				/>
			</div>
			<CopyButton env={env} />
		</div>
	);
};

export default EnvContainer;
