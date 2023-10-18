import axios from "axios";
const getProjects = async (username: string) => {
	// const res = await axios({
	// 	method: "GET",
	// 	url: `/api/project/${username}`,
	// });

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project/`)
	if (!res.ok){
		throw new Error('failed to fetch')
	}

	return res.json();
};

export default getProjects