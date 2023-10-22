const ProjectHeader = ({ projectName }: { projectName: string }) => {
	return (
		<div className="flex h-fit p-4 m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800 justify-center items-end">
            <p className="text-2xl font-bold">${projectName}.envy</p>
        </div>
	);
};

export default ProjectHeader;
