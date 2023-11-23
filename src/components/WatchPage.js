import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utilis/appSlice";
import {  useSearchParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import CommentsContainer from "../components/CommentsContainer"; 
import LiveChat from "./LiveChat";
// import Iconsidebar from "./Iconsidebar";


const WatchPage = () => {
    // const isLocation = useLocation()
    // const tinyMenu = useSelector((store)=> store.app.istinyMenuOpen);

    // const params = useParams()
    // console.log(params);
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[dispatch])
    //at the begning i used 
    // if(!tinyMenu)
//     const isMenuOpen = useSelector((store) => store.app.isMenuOpen );
//   if(!isMenuOpen ) 
//   return null;
    return(
        <div className="w-fit flex flex-col box-border ">
            {/* {isLocation.pathname.includes('/Watch') && <Iconsidebar />} */}
            <div className=" mt-14 px-5 flex rounded-lg">
                <div>
                    <iframe className="rounded-lg" width="750" height="550" src={"https://www.youtube-nocookie.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    
                </div>
                <div className="w-full">
                    <LiveChat/>
                </div>
            </div>
            <CommentsContainer/>
        </div>
    )
}

export default WatchPage;