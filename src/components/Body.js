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
// const dispatch = useDispatch();
// const closeMenu = useSelector((store)=>store.app.closeMenu)
// const [searchQuery, setSearchQuery] = useState('');
// const handleSearchQueryChange = (query) => {
//   setSearchQuery(query);
// };
  return (
    <div className='grid grid-flow-col relative  box-border'>

      {/* Conditionally render the Sidebar based on isSidebarVisible */}
      {
        isMenuOpen ? (
          <>
          <div className={`col-span-1 w-fit box-border z-50  md:col-span-4  lg:col-span-3 xl:col-span-2 lg:w-1/2 md:w-3/4 sm:w-fit`}>
            <Sidebar/>
          </div>
          </>
          
        
        ):  
        (
          // Render the Iconsidebar component when Sidebar is not present
          <div className={`w-fit box-border ${isLocation.pathname.includes('/watch') && 'hidden'}`}>
            <Iconsidebar />
            {/* {!isLocation.pathname.includes('/Watch') && <Iconsidebar /> } */}
          </div>
        )

      }

      {/* in this outlet maincontainer,videocontainer,watchpage will render */}
      {/* i will render watchpage ui as col-span-8 for watch, col-span-4 for live chat when there is no sidebar,iconsidebar */}
      <div className={`relative w-full  mx-auto px-auto ${!isMenuOpen? "col-span-11 sm:-left-36 md:-left-28 w-full items-center": "col-span-11 -left-6 w-full "} ${isLocation.pathname.includes('/watch')? "col-span-8 overflow-x-hidden w-fit items-center xl:left-32 sm:left-48 md:-left-[50px]  box-border ":" border-box"}  sm:col-span-9 md:col-span-8 md:mx-auto md:px-auto lg:col-span-9 xl:col-span-10  box-border `}>
        <Outlet />
      </div> 

    </div>
  )
}

export default Body
