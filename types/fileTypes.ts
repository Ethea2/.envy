import { EnvType } from "./envTypes";

export interface FileType {
	fileName: string;
	envs: Array<EnvType>;
}
