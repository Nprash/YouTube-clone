import React from 'react'
import Videocard from './Videocard'
import {Link} from "react-router-dom";
import useVideosList from './useVideosList';



const VideoContainer = () => {

  const videos = useVideosList();
// const discoverVideos = discoverVideos()
  return (
    <div className={`w-full flex flex-wrap box-border lg:justify-center md:justify-around sm:w-fit ` }>
      {videos.map(video =><Link to={"/watch?v="+video.id} key={video.id} ><Videocard info={video}/></Link>)}
    </div>
  )
}

// export {discoverVideos}
export default VideoContainer;
