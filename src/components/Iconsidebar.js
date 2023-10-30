import React from "react"
import {MdOutlineSubscriptions} from "react-icons/md"
import {GoVideo, GoHomeFill} from "react-icons/go"
// import { useSelector } from "react-redux"


const Iconsidebar = () =>{
// const tinyMenu = useSelector((store)=> store.app.istinyMenuOpen)
// if(!tinyMenu)
    return (
        <><div className=" w-[5.5rem] mt-14 relative list-none h-screen ">
    <li className="w-14 flex items-center justify-center h-12  p-5 ml-2 mt-3"><div className="fixed w-14 p-3  flex flex-col items-center align-middle hover:bg-gray-100 rounded-lg cursor-pointer"><span className="text-xl"><GoHomeFill/></span><span className="text-[9px]">Home</span></div> </li>
    <li className="w-14 flex items-center justify-center h-12  p-5 ml-2 mt-3"><div className="fixed w-14 p-3  flex flex-col items-center  align-middle hover:bg-gray-100 rounded-lg cursor-pointer"><span className="w-9"><svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: "none",paddingLeft:"6px" ,marginRight:"22px", display: "block", width: "28px", height: "28px"}}><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg></span><span className="text-[9px]">Shorts</span></div> </li>
    <li className="w-16 flex items-center justify-center h-12  p-5 ml-2 mt-3"><div className="fixed w-14 p-3  flex flex-col items-center align-middle hover:bg-gray-100 rounded-lg cursor-pointer"><span className="text-xl"><MdOutlineSubscriptions/></span><span className="text-[9px]">Subscriptions</span></div> </li>
    <li className="w-14 flex items-center justify-center h-12  p-5 ml-2 mt-3"><div className="fixed w-14 p-3  flex flex-col items-center align-middle hover:bg-gray-100 rounded-lg cursor-pointer"><span className="text-xl"><GoVideo/></span><span className="text-[9px]">You</span></div> </li>
  </div> </>
    )
}

export default Iconsidebar;