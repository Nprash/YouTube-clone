import React from 'react'
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'
import { Outlet, useLocation } from 'react-router-dom'
// import appSlice from '../utilis/appSlice'
import {useSelector } from "react-redux";
import Iconsidebar from "./Iconsidebar"

const Body = () => {
const isMenuOpen = useSelector((store) => store.app.isMenuOpen );
const isLocation = useLocation();

  return (
    <div className='grid grid-flow-col relative w-screen box-border'>

      {/* Conditionally render the Sidebar based on isSidebarVisible */}
      {
        isMenuOpen ? (
          <div className="col-span-1 sm:col-span-3 md:col-span-4  lg:col-span-3 xl:col-span-2">
            <Sidebar/>
          </div>
        ):  isLocation.pathname !== '/Watch' ?
        (
          // Render the Iconsidebar component when Sidebar is not visible
          <div className="col-span-1 w-fit sm:col-span-3 md:col-span-4 lg:col-span-3 xl:col-span-2">
            <Iconsidebar />
            {/* {!isLocation.pathname.includes('/Watch') && <Iconsidebar /> } */}
          </div>
        ): null

      }

      {/* in this outlet maincontainer,videocontainer,watchpage will render */}
      {/* i will render watchpage ui as col-span-8 for watch, col-span-4 for live chat when there is no sidebar,iconsidebar */}
      <div className={`relative col-span-11  sm:col-span-9 md:col-span-8 md:mx-2 md:px-3 lg:col-span-9 xl:col-span-10`}>
        <Outlet />
      </div> 

    </div>
  )
}

export default Body
