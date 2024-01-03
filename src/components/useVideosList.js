import {useState, useEffect} from "react";
import { Youtube_API } from '../utilis/Constants';
// import axios from 'axios';



const useVideosList = () => {
// const [fixedvideos, setFixedvideos] = useState();
const [videos, setVideos] = useState([]);
// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_MYAPI_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };
// const getVideos = async (url) => {
//   const json = await axios.get(`${BASE_URL}/${url}`, options);
//   // const json = await data.json(); 
//   console.log(json)
//     setVideos(json.data.items)
// };

useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async () =>{
    const data = await fetch(Youtube_API);
    const json = await data.json(); 
    setVideos(json.items);
    console.log(videos)
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





