import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

// here this layout is show on every page, so we use the Navbar component to display it in all pages.
const MainLayout = () => {
  return (
    <>
    <Navbar/>
      <Outlet />
    </>
  )
}

export default MainLayout
