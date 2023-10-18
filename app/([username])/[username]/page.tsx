import Loading from "@/app/loading";
import HomePage from "@/components/homepage/HomePage";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";

export default function Home({ params }: { params: { username: string } }) {
	return (
		<main className="flex min-w-full min-h-screen text-primary">
			<Suspense fallback={<Loading />}>
				<Navbar />
				<HomePage username={params.username}/>
			</Suspense>
		</main>
	);
}
