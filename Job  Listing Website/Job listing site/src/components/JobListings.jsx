import jobs from '../jobs.json'
import {useState, useEffect} from 'react'
import JobCard from './JobCard'
import Spinner from './Spinner';


const JobListings = ({isHome}) => {
    
    // states for job data from JSON server and loading function
    let [jobs,setJobs] = useState([]);
    const [loading,setLoading] = useState(true);

    // To retrive data from  the JSON Server 
    useEffect(()=>{
    
      const fetchAPI = async ()=>{
        try{
          const apiURL = isHome?"http://localhost:8000/jobs":"http://localhost:8000/jobs?_limit=3"
          const resp = await fetch(apiURL)
          const data = await resp.json()
          setJobs(data)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }
      fetchAPI()
    },[])

    if(isHome){
      jobs = jobs
    }else{
      jobs = jobs.slice(0,3)
    }
  return (
    <div>
      {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        
          {/* <!-- Job Cards  --> */}
          {loading ?<Spinner loading = {loading}/>:(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job)=>(
            <JobCard key={job.id} job={job} />
          ))}
          </div>)}
          
      </div>
    </section>

    
    </div>
  )
}

export default JobListings
