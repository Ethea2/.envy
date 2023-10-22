import Loading from "@/app/loading";
import HomePage from "@/components/homepage/HomePage";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";

export default function Home({ params }: { params: { username: string } }) {
	return <HomePage username={params.username} />;
}
