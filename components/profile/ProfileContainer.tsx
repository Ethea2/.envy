"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
const ProfileContainer = () => {
    
	const { data: session, status } = useSession();
	return (
		<div className="flex h-fit p-4 m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800 justify-center items-end">
			<div className="rounded-full w-24 h-24 overflow-hidden">
				<Image
					src={session?.user?.image as string}
					width={200}
					height={200}
					alt="Profile picture"
					className="object-center object-fill h-full w-full"
				/>
			</div>
			<p className="text-2xl font-bold">@{session?.user?.name}</p>
		</div>
	);
};

export default ProfileContainer;
