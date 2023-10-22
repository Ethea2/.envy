import React from "react";
import ProfileContainer from "@/components/profile/ProfileContainer";
import ProjectOverview from "@/components/projectsoverview/ProjectOverview";

const getProfile = async(username: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${username}`, {next: {tags: ['profile'], revalidate: 100}})
    return res.json()
}

const getProjects = async(username: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project/${username}`, {next: {tags: ['projects'], revalidate: 100}})
    return res.json()
}

const HomePage = async ({ username }: { username: string }) => {
	const profileData = getProfile(username)
    const projectsData = getProjects(username)
    
    const [profile, projects] = await Promise.all([profileData, projectsData])

    return (
		<div className="w-full min-h-screen flex flex-col">
			<ProfileContainer profile={profile} />
			<ProjectOverview projects={projects} username={username} />
		</div>
	);
};

export default HomePage;
