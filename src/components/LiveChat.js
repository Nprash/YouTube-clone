import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilis/chatSlice";
// import store from "../utilis/store";
import {generateRandomName, RandomMessages} from "../utilis/helper"


const LiveChat = () => {
    const [livemessage, setLivemessage] = useState("")

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(()=>{
        const i = setInterval(()=>{
            //API polling
            // console.log("api polling")
            dispatch(addMessage({
                name: generateRandomName(),
                message: RandomMessages(10) +"🚀",
            })
            );
        }, 2000);

        return ()=> clearInterval(i);

    },[]);


    
    return(
        <div className="w-full relative h-[550px] bg-grey-200 rounded-lg ml-2  border border-gray-300 shadow-md  overflow-hidden box-border">
            <div className="absolute w-full  bg-gray-300 p-1  text-sm  box-border">Live Chat</div>
        <div className="h-[90%] overflow-y-scroll bg-slate-50 rounded-lg ml-2 pr-2 py-2  flex flex-col-reverse ">
            {chatMessages.map((c, i) => <ChatMessage key={i} name={c.name} message={c.message}/>)}
            {/* these name and message coming from the dispatch, this dispatch invokes a function that will generate random name&message */}
        </div>
        <form  onSubmit={(e)=>{e.preventDefault(); console.log("form submitted"+  livemessage); dispatch(addMessage({name:"N-prasanth", message:livemessage })); setLivemessage(""); }} className="w-full m-1 flex justify-center items-center ">
            <input placeholder="type.." value={livemessage} onChange={(e)=> setLivemessage(e.target.value)} className="focus:outline-1 border  rounded-lg p-1"/>
            <button className="bg-green-200 p-1 ml-1 rounded-lg">send</button>
        </form>
        </div>
    )
}



export default LiveChat;