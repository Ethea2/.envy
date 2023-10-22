import { FileType } from "@/types/fileTypes";

const FileContainer = ({ files }: { files: Array<FileType> }) => {
	return (
		<div className="min-h-full justify-center justify-items-center items-start m-4 p-4 rounded border-2 border-dashed border-slate-600 bg-slate-800">
			<div>{JSON.stringify(files)}</div>
		</div>
	);
};

export default FileContainer;
