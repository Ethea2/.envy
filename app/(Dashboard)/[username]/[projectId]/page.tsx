import FileContainer from "@/components/filecontainer/FileContainer";
import ProjectHeader from "@/components/projectheader/ProjectHeader";
import { FileType } from "@/types/fileTypes";
import { ProjectPage } from "@/types/projectTypes";
import { headers } from "next/headers";
const getFiles = async (projectId: string) => {
	const files = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/env/${projectId}`,
		{ next: { tags: ["files"], revalidate: 100 }, headers: headers() },
	);
	return files.json();
};

const ProjectPage = async ({ params }: { params: { projectId: string }}) => {
	const filesData = getFiles(params.projectId);
	const files = await Promise.resolve<ProjectPage>(filesData);
	return (
		<div className="w-full h-full">
			<ProjectHeader projectName={files.projectName}/>
			<FileContainer files={files.files} />
		</div>
	);
};

export default ProjectPage;
