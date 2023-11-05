import React, {useEffect, useState} from 'react'
import Videocard from './Videocard'
import { Youtube_API } from '../utilis/Constants';
import {Link} from "react-router-dom";


const VideoContainer = () => {

const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async () =>{
    const data = await fetch(Youtube_API);
    const json = await data.json(); 
    setVideos(json.items);
  }
  // console.log(videos[0]);

  return (
    <div className={` w-full flex flex-wrap mt-12 pt-10 ` }>
      {
        videos.map(video =><Link to={"/watch?v="+video.id} key={video.id} ><Videocard info={video}/></Link>)
        }
    </div>
  )
}

export default VideoContainer
