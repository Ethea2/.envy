"use client";
import { FileType } from "@/types/fileTypes";
import { AddButton, CopyAll, CopyButton } from "../buttons/buttons";
import EnvContainer from "../envcontainer/EnvContainer";
import { useState } from "react";

const FileContainer = ({
	files,
	projectId,
}: {
	files: Array<FileType>;
	projectId: string;
}) => {
	return (
		<div className="min-h-full justify-center justify-items-center items-start m-4 p-4 rounded border-2 border-dashed border-slate-600 bg-slate-800">
			{files.map((file, index) => (
				<div
					className="w-full h-1/3 bg-base-100 border-dashed border-2 border-secondary my-5 p-4"
					key={index}
				>
					<div className="flex w-full justify-between">
						<p className="text-2xl font-bold w-full flex items-center justify-start">
							{file.fileName}
						</p>
						<div className="flex gap-2">
							<AddButton
								projectId={projectId}
								fileName={file.fileName}
							/>
							<CopyAll envs={file.envs} />
						</div>
					</div>
					<div className="divider m-0" />
					{file.envs.map((env, index) => (
						<EnvContainer env={env} key={index} />
					))}
				</div>
			))}
		</div>
	);
};

export default FileContainer;
