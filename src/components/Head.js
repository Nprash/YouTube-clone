import React, {useState, useEffect} from 'react'
import {GoSearch} from "react-icons/go"
import {IoMdMic} from "react-icons/io"
import { toggleMenu } from '../utilis/appSlice'
import {Youtube_Suggestion_API} from "../utilis/Constants"
import menuicon  from "../Assets/Hamburger-icon.png";
import Youtubelogo from "../Assets/Youtube-logo-icon.png";
import { useDispatch ,useSelector } from 'react-redux'
import { cacheResults } from '../utilis/searchSlice'

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("")
    // console.log(searchQuery);
    const [catchsuggestions, setCatchsuggestions] = useState([]);
    const [showSuggestions, setShowsuggestions] = useState(false)
   
    const searchCache = useSelector((store)=> store.search)
    const dispatch = useDispatch()
    // to make an API call for every key press, means when searchQuery is changd that time API call
    // will happen, so here i will use useEffect hook with searchQuery dependency
// when diff between 2 keypress is morethan 200ms then API call will work,, achieve with debouncing
//if lessthan 200ms decline API call

/*
 searchCache = {
            "iphone":["iphone11","iphone12","iphone13","iphone14"]
        }
  searchQuery = iphone

  searchCache[searchQuery] we are finding below, not found then make an api call

*/


    useEffect(()=>{
     const timer =    setTimeout( () => {
        if(searchCache[searchQuery]){ //if searchquer is present in cache then setsuggestions is same or dont make api call
            setCatchsuggestions(searchCache[searchQuery])
        }
        else{
            getSearchSuggestions()
        }
     },200); //after 2ms use effect , api called
        return () =>{
            // catchsuggestions;
            clearTimeout(timer);
        }
    },[searchQuery])

    const getSearchSuggestions = async() =>{ 
        const data = await fetch(Youtube_Suggestion_API+searchQuery)
        const json = await data.json();
        // console.log(json[1])
        setCatchsuggestions(json[1]);
        console.log("API call with searcy query ->" + searchQuery)
    //above console refers that how many API calls are happening accroding to search query
        // this function called inside the timer in useeffect ot make an API call with the search query
        dispatch(cacheResults({
            [searchQuery]:json[1], 
        }))
    };

// when I clicked
// render the component
// - useEffect();
// - start timer make api call after 200 ms
// when typed - IPHONE
// - re-render the component
// - useEffec()
// start timer make api call after 200 ms(new time) need to clear the timer

    // const dispatch = useDispatch();
    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    };

     

  return (
    <>
    <div className='grid grid-flow-col bg-gray-50 p-2 fixed w-full z-10'>
        <div className='col-span-1 flex items-center'>
            <img onClick={()=>{toggleMenuHandler()}} className='h-7 px-2 cursor-pointer' src={menuicon} alt="menu-icon" />
            <img className='h-5 pl-2' src= {Youtubelogo} alt="youtube logo" />
        </div>
        <div className='col-span-10 relative flex justify-center'>
            
            <div className='w-3/5 flex justify-center relative'>
                <div className='w-full flex justify-start relative'>
                <input type="text" placeholder="Search" valsue={searchQuery}  onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowsuggestions(true)} onBlur={()=>setShowsuggestions(false)} className='w-full text-base border border-gray-300 px-4 rounded-l-full'/>
                </div>
                
            <button className="px-6 mr-4 py-2 flex justify-center items-center bg-gray-100 text-xl border border-gray-300 rounded-r-full"><GoSearch /> </button>
            <span className='text-xl border border-gray-100 bg-gray-100 rounded-full w-12 flex justify-center items-center cursor-pointer'><IoMdMic/></span>
            </div>
            
            {showSuggestions && (<div className='w-3/5 absolute z-50 mt-8  '>
                <ul >
                {catchsuggestions.map(e => <li className="w-4/5 bg-white py-2 pl-3 ml-2 hover:bg-gray-100  border-gray-300">{e}</li>
                )}      
                </ul>
            </div>)}
            
        </div>
 
        
        <div className='col-span-1 flex justify-around items-center pr-3'>
            <div className='w-8 cursor-pointer flex justify-center items-center '><svg height="8" style={{pointerEvents: "none", display: "block", width: "24px" , height: "24px"}} viewBox="0 0 24 24" width="24" focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg></div>
            <div className='w-8 cursor-pointer text-xl flex justify-center items-center'><svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: "none", display: "block", width: "25px", height:"25px"}}><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg></div>
            <img className='w-8 cursor-pointer h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66Z_VbQdf8hb5Hr7gAwBpY_B2T7mBFH5qwg&usqp=CAU" alt="user-icon" />
        </div>
    </div>
    

</>
  )
}

export default Head;
