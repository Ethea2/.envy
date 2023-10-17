import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState, SetStateAction } from "react";
import {
	SiFramer,
	SiTailwindcss,
	SiReact,
	SiJavascript,
	SiCss3,
} from "react-icons/si";
import { RiLogoutBoxRFill } from "react-icons/ri";
import {AiFillCloseSquare} from "react-icons/ai"
import { FiMenu } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const navVariants = {
	open: {
		x: "0%",
		borderTopLeftRadius: "0vw",
		borderBottomLeftRadius: "0vw",
		opacity: 1,
	},
	closed: {
		x: "-100%",
		borderTopLeftRadius: "50vw",
		borderBottomLeftRadius: "50vw",
		opacity: 0,
	},
};

const buttonVariants = {
	open: {
		x: "0%",
		opacity: 1,
	},
	closed: {
		x: "-100%",
		opacity: 0,
	},
}

const Navbar = () => {
	const [selected, setSelected] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<motion.button
				whileHover={{ rotate: "180deg" }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsOpen(true)}
                animate={isOpen ? "closed" : "open"}
				variants={buttonVariants}
				className="text-3xl fixed bg-base-300 m-9 text-white hover:text-primary transition-colors p-4 rounded-full"
			>
				<FiMenu />
			</motion.button>

			<motion.nav
				className="fixed h-screen w-fit bg-slate-950 p-4 left-0 flex flex-col items-center justify-between"
				animate={isOpen ? "open" : "closed"}
				variants={navVariants}
				initial="closed"
			>
				{/* Temp logo from https://logoipsum.com/ */}

				<div className="flex flex-col items-center gap-2">
					<svg
						width="40"
						height="28"
						viewBox="0 0 40 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="mb-4"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.98578 4.11462L0 14C1.99734 15.9773 4.27899 17.6437 6.76664 18.9474C7.45424 20.753 8.53203 22.4463 10 23.8995C15.5229 29.3668 24.4772 29.3668 30 23.8995C31.468 22.4463 32.5458 20.753 33.2334 18.9473C35.721 17.6437 38.0027 15.9773 40 14L30.0223 4.12266C30.0149 4.11527 30.0075 4.10788 30 4.1005C24.4772 -1.36683 15.5229 -1.36683 10 4.1005C9.99527 4.10521 9.99052 4.10991 9.98578 4.11462ZM29.0445 20.7309C26.1345 21.7031 23.0797 22.201 20 22.201C16.9203 22.201 13.8656 21.7031 10.9556 20.7309C11.2709 21.145 11.619 21.5424 12 21.9196C16.4183 26.2935 23.5817 26.2935 28 21.9196C28.381 21.5424 28.7292 21.145 29.0445 20.7309ZM12.2051 5.8824C12.9554 6.37311 13.7532 6.79302 14.588 7.13536C16.3038 7.83892 18.1428 8.20104 20 8.20104C21.8572 8.20104 23.6962 7.83892 25.412 7.13536C26.2468 6.79302 27.0446 6.3731 27.795 5.88238C23.4318 1.77253 16.5682 1.77254 12.2051 5.8824Z"
							fill="#FFFFFF"
						></path>
					</svg>
					<NavItem
						selected={selected === 0}
						id={0}
						setSelected={setSelected}
					>
						<SiTailwindcss />
					</NavItem>
					<NavItem
						selected={selected === 1}
						id={1}
						setSelected={setSelected}
					>
						<SiReact />
					</NavItem>
					<NavItem
						selected={selected === 2}
						id={2}
						setSelected={setSelected}
					>
						<SiJavascript />
					</NavItem>
					<NavItem
						selected={selected === 3}
						id={3}
						setSelected={setSelected}
					>
						<SiFramer />
					</NavItem>
					<NavItem
						selected={selected === 4}
						id={4}
						setSelected={setSelected}
					>
						<SiCss3 />
					</NavItem>
                    <Close setIsOpen={setIsOpen}>
                        <AiFillCloseSquare />
                    </Close>
				</div>
				<Logout>
					<RiLogoutBoxRFill />
				</Logout>
			</motion.nav>
		</>
	);
};

interface Props {
	children: ReactNode;
	selected: boolean;
	id: number;
	setSelected: React.Dispatch<SetStateAction<number>>;
}

const NavItem = ({ children, selected, id, setSelected }: Props) => {
	return (
		<motion.button
			className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
			onClick={() => setSelected(id)}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<span className="block relative z-10">{children}</span>
			<AnimatePresence>
				{selected && (
					<motion.span
						className="absolute inset-0 rounded-md bg-indigo-600 z-0"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
					></motion.span>
				)}
			</AnimatePresence>
		</motion.button>
	);
};

const Logout = ({ children }: { children: ReactNode }) => {
	const [click, setClick] = useState<boolean | null>(false);
	const handleLogout = (e: React.MouseEvent) => {
		e.preventDefault();
		setClick(true);
		signOut({ callbackUrl: "/" });
		toast("Successfully logged out!", {
			type: "success",
			autoClose: 3000,
			closeButton: true,
		});
	};

	return (
		<motion.button
			className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
			onClick={(e) => handleLogout(e)}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<span className="block relative z-10">{children}</span>
			<AnimatePresence>
				{click && (
					<motion.span
						className="absolute inset-0 rounded-md bg-indigo-600 z-0"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
					></motion.span>
				)}
			</AnimatePresence>
		</motion.button>
	);
};

const Close = ({
	children,
	setIsOpen,
}: {
	children: ReactNode;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<motion.button
			className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
			onClick={() => {
				setIsOpen(false);
			}}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<span className="block relative z-10">{children}</span>
		</motion.button>
	);
};

export default Navbar;
