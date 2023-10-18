import { EnvType } from "./envTypes";

export interface ProjectType {
	_id: string;
	title: string;
	description: string;
	envs?: Array<EnvType>;
}