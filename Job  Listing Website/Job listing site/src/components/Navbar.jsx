import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  // isActive here is property that shows if link is active or not and we are destructring it to get its boolean value
  const liveclass = ({isActive}) => isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:text-white rounded-md px-3 py-2"
  
  return (
    <div>
      {/** Navbar */}
      <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span>
            </NavLink>

          {/** Navbar buttons */}
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={liveclass}>
                    Home
                </NavLink>

                <NavLink
                  to="/jobs"
                  className={liveclass}
                  >
                    Jobs
                </NavLink>

                <NavLink
                  to="/add-job"
                  className={liveclass}
                  >Add Job
                  </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar
