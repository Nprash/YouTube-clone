import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utilis/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";


const WatchPage = () => {
    const tinyMenu = useSelector((store)=> store.app.istinyMenuOpen);

    const params = useParams()
    // console.log(params);
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
         
    },[dispatch])
    if(tinyMenu) return null;
//     const isMenuOpen = useSelector((store) => store.app.isMenuOpen );
//   if(!isMenuOpen ) 
//   return null;
    return(
        <div className="absolute mt-14">
            <iframe width="560" height="315" 
            src={"https://www.youtube-nocookie.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>    
            
        </div>
    )
}

export default WatchPage;