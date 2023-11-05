import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import {useSelector } from "react-redux";


const MainContainer = () => {
const isMenuOpen = useSelector((store) => store.app.isMenuOpen );

  return (
    <div className={`${isMenuOpen? "absolute": ""} mt-12 `}>
      <div className={`w-full overflow-x-hidden bg-gray-50 fixed z-0`}>
        <ButtonList />
      </div>
      <div className={` mt-12   w-fit`}>
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer
