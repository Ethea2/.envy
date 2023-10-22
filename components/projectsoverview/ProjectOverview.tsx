import { ProjectType } from "@/types/projectTypes";
import InsertProject from "../insertproject/InsertProject";
import Link from "next/link";

const ProjectOverview = ({
	projects,
	username,
}: {
	projects: Array<ProjectType>;
	username: string;
}) => {
	return (
		<div className="min-h-full grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center items-start m-4 p-4 rounded border-2 border-dashed border-slate-600 bg-slate-800">
			{projects?.map((project: ProjectType, key: number) => (
				<Link
					href={`/${username}/${project._id}`}
					key={key}
					className="card w-full md:w-[70%] bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary"
				>
					<div className="card-body">
						<h2 className="card-title">{project.title}</h2>
						<p>{project.description}</p>
					</div>
				</Link>
			))}
			<InsertProject username={username} />
		</div>
	);
};

export default ProjectOverview;
