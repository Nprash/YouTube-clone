import React from 'react'
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
// import appSlice from '../utilis/appSlice'

const Body = () => {
  return (
    <div className='grid grid-flow-col relative w-screen'>
      <div className="col-span-1 sm:col-span-3 md:col-span-4  lg:col-span-3 xl:col-span-2">
        <Sidebar/>
      </div>
      <div className='relative col-span-11  sm:col-span-9 md:col-span-8 md:mx-2 md:px-3 lg:col-span-9 xl:col-span-10 '>
        <Outlet />
      </div> 
    </div>
  )
}

export default Body
