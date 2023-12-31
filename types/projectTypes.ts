import { FileType } from "./fileTypes";

export interface ProjectType {
	_id: string;
	title: string;
	description: string;
	files: Array<FileType>;
}

export interface ProjectPage {
	projectName: string;
	files: Array<FileType>;
}
