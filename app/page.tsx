"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import Navbar from "@/components/navbar/Navbar";
export default function Home() {
	const router = useRouter();
	const { data: session, status } = useSession();
	useEffect(() => {
		if (status !== "loading") {
			if (status !== "authenticated") router.push("/login");
		}
	}, [status]);
	useEffect(() => console.log(session), [session]);

	return (
		<main className="flex min-h-screen min-w-full text-primary">
			<Navbar />
			<div className="w-full flex flex-col justify-center">
				<div className="flex h-fit p-4 m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800 justify-start items-end">
					<div className="rounded-full overflow-hidden">
						<Image
							src={session?.user?.image as string}
							width={200}
							height={200}
							alt="Profile picture"
						/>
					</div>
					<p className="text-2xl font-bold">@{session?.user?.name}</p>
				</div>
				<div className="flex flex-col justify-center items-center m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800">
					<p>signed in as {session?.user?.name}</p>

					<p>with email as {session?.user?.email}</p>
					<Image
						src={session?.user?.image as string}
						width={500}
						height={500}
						alt="Profile picture"
					/>
					<p>signed in as {session?.user?.name}</p>

					<p>with email as {session?.user?.email}</p>
					<Image
						src={session?.user?.image as string}
						width={500}
						height={500}
						alt="Profile picture"
					/>
					<p>signed in as {session?.user?.name}</p>

					<p>with email as {session?.user?.email}</p>
					<Image
						src={session?.user?.image as string}
						width={500}
						height={500}
						alt="Profile picture"
					/>
					<p>signed in as {session?.user?.name}</p>

					<p>with email as {session?.user?.email}</p>
					<Image
						src={session?.user?.image as string}
						width={500}
						height={500}
						alt="Profile picture"
					/>
					<p>signed in as {session?.user?.name}</p>

					<p>with email as {session?.user?.email}</p>
					<Image
						src={session?.user?.image as string}
						width={500}
						height={500}
						alt="Profile picture"
					/>
					<p>signed in as {session?.user?.name}</p>

					<p>with email as {session?.user?.email}</p>
					<Image
						src={session?.user?.image as string}
						width={500}
						height={500}
						alt="Profile picture"
					/>
					<p>signed in as {session?.user?.name}</p>

					<p>with email as {session?.user?.email}</p>
					<Image
						src={session?.user?.image as string}
						width={500}
						height={500}
						alt="Profile picture"
					/>
					<p>signed in as {session?.user?.name}</p>

					<p>with email as {session?.user?.email}</p>
					<Image
						src={session?.user?.image as string}
						width={500}
						height={500}
						alt="Profile picture"
					/>
				</div>
			</div>
		</main>
	);
}
