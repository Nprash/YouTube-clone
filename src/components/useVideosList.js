import {useState, useEffect} from "react";
import { Youtube_API } from '../utilis/Constants';


const useVideosList = () => {
// const [fixedvideos, setFixedvideos] = useState();
const [videos, setVideos] = useState([]);

useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async () =>{
    const data = await fetch(Youtube_API);
    const json = await data.json(); 
    setVideos(json.items);
    // console.log(videos)
    // setFixedvideos(json.items);
  }
  // const  discoverVideos =(input, list)=>{
  
  //   let filteredvideos = list.filter((vdo)=>{
  //     return vdo.title.toLowercase().include(input.toLowercase())
  //   })
  //   setVideos(filteredvideos)
  // }
   
  return videos;
}

// export default discoverVideos 
export default useVideosList;