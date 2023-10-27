import React from 'react'
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col relative'>
      <div className='col-span-2 '>
        <Sidebar/>
      </div>
      <div className='col-span-10 relative'>
        <Outlet />
      </div> 
    </div>
  )
}

export default Body
