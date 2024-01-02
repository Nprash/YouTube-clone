import React from 'react'
import Videocard from './Videocard'
import {Link} from "react-router-dom";
import useVideosList from './useVideosList';



const VideoContainer = () => {

  const videos = useVideosList();
// const discoverVideos = discoverVideos()
if(!videos) return null;
  return (
    <div className={` sm:w-fit flex flex-wrap box-border justify-center items-center lg:justify-around md:justify-around sm:justify-center ` }>
      {videos.map(video =>(<Link to={"/watch?v="+video.id} key={video.id} ><Videocard info={video}/></Link>))}
    </div>
  )
}

// export {discoverVideos}
export default VideoContainer;
