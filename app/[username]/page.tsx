import Navbar from "@/components/navbar/Navbar";
import ProfileContainer from "@/components/profile/ProfileContainer";
import ProjectOverview from "@/components/projectsoverview/ProjectOverview";

export default function Home({ params }: { params: { username: string } }) {

	return (
		<main className="flex min-w-full min-h-screen text-primary">
			<Navbar />
			<div className="w-full min-h-screen flex flex-col">
				<ProfileContainer />
				<ProjectOverview username={params.username}/>
			</div>
		</main>
	);
}
