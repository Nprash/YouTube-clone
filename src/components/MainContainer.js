import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className=' absolute mt-12'>
      <div className='w-full bg-gray-50 fixed z-0'>
        <ButtonList />
      </div>
      <div className='mt-6'>
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer
