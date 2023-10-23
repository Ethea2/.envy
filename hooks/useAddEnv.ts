import { toast, Id } from "react-toastify";
import { useRef, useState } from "react";
import axios from "axios";
import { headers } from "next/headers";

const useAddEnv = (
	fileName: string,
	name: string,
	value: string,
	projectId: string,
) => {
	const [state, setState] = useState("");
	const toastID = useRef<Id>();
	const pushEnv = async () => {
		toastID.current = toast.loading("Adding env now...");
		const data = { fileName, name, value, projectId };
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/env/`, {
			method: "POST",
			body: JSON.stringify(data),
		});

		if (res.ok) {
			toast.update(toastID.current, {
				render: "Added successfully!",
				autoClose: 3000,
				hideProgressBar: false,
				closeButton: true,
				type: "success",
				isLoading: false,
			});
			setState("success");
			return "success";
		} else {
			toast.update(toastID.current ?? "", {
				render: "There was an error...",
				autoClose: 3000,
				hideProgressBar: false,
				closeButton: true,
				type: "error",
				isLoading: false,
			});
			setState("error");
			return "error";
		}
	};
	return { pushEnv, state };
};

export default useAddEnv;
