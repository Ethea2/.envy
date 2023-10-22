import { headers } from "next/headers";
const getFiles = async (projectId: string) => {
	const files = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/env/${projectId}`,
		{ next: { tags: ["files"], revalidate: 100 }, headers: headers() },
	);
	return files.json();
};

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
	const filesData = getFiles(params.projectId);
	const files = await Promise.resolve(filesData);
	return <div>{JSON.stringify(files)}</div>;
};

export default ProjectPage;
