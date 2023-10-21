"use client";

import { useEffect } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
export const SubmitButton = ({
	handleShow,
}: {
	handleShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { pending, data } = useFormStatus();

    useEffect(() => {
        if(data !== null) {
            handleShow(false)
        }
    }, [data])
	return (
		<>
			{pending ? (
				<button className="btn btn-primary w-1/2 text-xs md:text-base md:w-1/3 h-full" aria-disabled={pending}>
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
