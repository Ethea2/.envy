import axios from "axios";
export const getProjects = async (username: string) => {
	const res = await axios({
		method: "GET",
		url: `/api/project/${username}`,
	});

	return res;
};
