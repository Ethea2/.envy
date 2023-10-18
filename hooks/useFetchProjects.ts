
import { useState, useEffect } from "react";
import axios from "axios";
const useFetchProjects = (url: string, username: string) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<any>();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await axios({
				method: "GET",
				url: `${url}${username}`,
			})
				.then((res) => {
					setLoading(false);
					setData(res.data);
				})
				.catch((e) => {
					setLoading(false);
					setError(e);
					console.log(e);
				});
		};
		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useFetchProjects;
