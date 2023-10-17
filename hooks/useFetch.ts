import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url: string, username: string) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<any>();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await axios({
				method: "GET",
				data: { username },
				url: url,
			})
				.then((res) => {
					setLoading(false);
					setData(res);
				})
				.catch((e) => {
					setLoading(false);
					setError(e);
					console.log(e);
				});
		};
		fetchData();
	}, [url]);
};

export default useFetch;
