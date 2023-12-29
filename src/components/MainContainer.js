import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
// import {useSelector } from "react-redux";


const MainContainer = () => {
// const isMenuOpen = useSelector((store) => store.app.isMenuOpen );

  return (
    <div className={` absolute mt-12 box-border`}>
      <div className={`w-[85%] box-border bg-gray-50 fixed z-1`}>
        <ButtonList />
      </div>
      <div className={` sm:w-fit mx-auto mt-14 box-border -z-10`}>
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer
