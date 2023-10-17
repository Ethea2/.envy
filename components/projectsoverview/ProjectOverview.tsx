import React from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { getProjects } from "@/libs/getProjects";

interface Project {
	_id: string;
	title: string;
	description: string;
}

const ProjectOverview = async ({ username }: { username: string }) => {
	const projects = await getProjects(username);
	return (
		<div className="min-h-full grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center items-start m-4 p-4 rounded border-2 border-dashed border-slate-600 bg-slate-800">
			<div className="card w-full md:w-96 bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary">
				<div className="card-body">
					<h2 className="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>
			<div className="card w-full md:w-96 bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary">
				<div className="card-body">
					<h2 className="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary">
				<div className="card-body">
					<h2 className="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary">
				<div className="card-body">
					<h2 className="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary">
				<div className="card-body">
					<h2 className="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary">
				<div className="card-body">
					<h2 className="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary">
				<div className="card-body">
					<h2 className="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary">
				<div className="card-body">
					<h2 className="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary">
				<div className="card-body">
					<h2 className="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectOverview;
