import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, iconMenu } from "../utilis/appSlice";
import { useSearchParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import CommentsContainer from "../components/CommentsContainer"; 


const WatchPage = () => {
    // const tinyMenu = useSelector((store)=> store.app.istinyMenuOpen);

    // const params = useParams()
    // console.log(params);
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu(), iconMenu())
        
        
    },[dispatch])
    // if(!tinyMenu)
//     const isMenuOpen = useSelector((store) => store.app.isMenuOpen );
//   if(!isMenuOpen ) 
//   return null;
    return(
        <div>
        <div className=" mt-14">
            <iframe width="1300" height="750" src={"https://www.youtube-nocookie.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>    
        </div>
        <CommentsContainer/>
        </div>
    )
}

export default WatchPage;