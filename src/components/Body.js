import React from 'react'
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col '>
      <div className='col-span-2 relative '>
        <Sidebar/>
      </div>
      <div className='col-span-10 relative w-full'>
        <Outlet />
      </div> 
    </div>
  )
}

export default Body
