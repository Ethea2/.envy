"use client";

import { useEffect } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { toast } from "react-toastify";
export const SubmitButton = ({
	handleShow,
	state,
}: {
	handleShow: React.Dispatch<React.SetStateAction<boolean>>;
	state: any;
}) => {
	const { pending } = useFormStatus();
    useEffect(() => {
        if(state.type === "success") {
            toast(state.message, {
                type: "success"
            })
            state.type = null
            state.message = null
            handleShow(false)
        } else {
            toast(state.message, {
                type: "error"
            })
            state.type = null
            state.message = null
        }
    }, [state])
	return (
		<>
			{pending ? (
				<button
					className="btn btn-primary w-1/2 text-xs md:text-base md:w-1/3 h-full"
					aria-disabled={pending}
				>
					<span className="loading loading-infinity loading-lg font-bold text-accent"></span>
				</button>
			) : (
				<button
					className="btn btn-primary w-1/2 text-xs md:text-base md:w-1/3 h-full"
					type="submit"
				>
					Create Project!
				</button>
			)}
		</>
	);
};
