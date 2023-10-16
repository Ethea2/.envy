"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
	const router = useRouter();
	const { data: session, status } = useSession();
	if (status !== "authenticated") router.push("/login");
	useEffect(() => console.log(session), [session]);
	return (
		<main className="flex justify-center items-center min-h-screen min-w-full text-primary">
			signed in as {session?.user?.name}
			with email as {session?.user?.email}
		</main>
	);
}
