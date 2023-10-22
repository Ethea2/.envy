"use client"
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react";
import AddProject from "../modals/AddProject";
const InsertProject = ({username}: {username: string}) => {
	const [show, setShow] = useState<boolean>(false);

	const handleShow = () => {
		setShow(true);
	};

	return (
		<>
			<div
				className="card w-full md:w-[70%] bg-base-100 shadow-xl h-[400px] hover:scale-105 transition ease-in cursor-pointer border-dashed border-2 border-secondary flex justify-center items-center text-6xl"
				onClick={handleShow}
			>
				<AiOutlinePlusSquare />
			</div>
			<AddProject show={show} handleShow={setShow} />
		</>
	);
};

export default InsertProject;
