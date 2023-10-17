import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast, Id } from "react-toastify";
import axios from "axios";
const useRegister = () => {
	const [status, setStatus] = useState<string | null>();
	const toastID = useRef<Id>();
	const router = useRouter();

	const signup = async (
		username: string,
		password: string,
		email: string,
	) => {
		toastID.current = toast.loading("Registering you now...");

		await axios({
			method: "POST",
			data: { username, password, email },
			url: "/api/auth/signup",
		})
			.then((res) => {
				setStatus("success");
				toast.update(toastID.current ?? "", {
					render: res.data.message,
					autoClose: 3000,
					hideProgressBar: false,
					closeButton: true,
					type: "success",
					isLoading: false,
				});
				router.push("/login");
			})
			.catch((e) => {
				setStatus("error");
				toast.update(toastID.current ?? "", {
					render: e.response.data.message,
					autoClose: 3000,
					hideProgressBar: false,
					closeButton: true,
					type: "error",
					isLoading: false,
				});
			});
	};

	return { signup, status };
};

export default useRegister;
