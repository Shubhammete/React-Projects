import Hero from "../components/Hero"
import JobListings from "../components/JobListings"
import HomeCards from "../components/HomeCards"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings/>
      <ViewAllJobs />
    </div>
  )
}

export default HomePage
