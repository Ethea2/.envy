import {ReactNode} from "react"
import { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";
import Loading from "@/app/loading";

const DashboardLayout = ({children}: {children: ReactNode}) => {
    return(
        <main className="flex min-w-full min-h-screen text-primary">
			<Suspense fallback={<Loading />}>
				<Navbar />
				{children}
			</Suspense>
		</main>
    )
}

export default DashboardLayout