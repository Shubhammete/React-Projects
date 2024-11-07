import {RouterProvider,Route,createBrowserRouter,createRoutesFromElements,Link} from 'react-router-dom'
import './App.css'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HomeCards from  './components/HomeCards'
// import JobListings from './components/JobListings'
// import ViewAllJobs  from './components/ViewAllJobs'

import HomePage  from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './layouts/JobsPage'
import NotFoundPage from './pages/NotFoundPage'


// router variable to create router
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
)

function App() {
  
  return (
    <>
      {/* <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs /> */}
      <RouterProvider router={router}/>

    </>
  )
}

export default App
