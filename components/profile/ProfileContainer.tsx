"use client";
import useFetch from "@/hooks/useFetch";
import { ProfileType } from "@/types/profileTypes";
import { useSession } from "next-auth/react";
import Image from "next/image";
const ProfileContainer = ({ profile }: { profile: ProfileType }) => {
	return (
		<div className="flex h-fit p-4 m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800 justify-center items-end">
			<div className="rounded-full w-24 h-24 overflow-hidden">
				<Image
					src={profile.img as string}
					width={200}
					height={200}
					alt="Profile picture"
					className="object-center object-fill h-full w-full"
				/>
			</div>
			<p className="text-2xl font-bold">@{profile.username}</p>
		</div>
	);
};

export default ProfileContainer;
