import React,{useState} from "react"
import {AiOutlineLike, AiOutlineDislike} from "react-icons/ai"

const CommentsAction = () => {
const [likecount, setLikecount] = useState(null);
const [dislikecount, setDislikecount] = useState(null);
    const likeclickhandler = ()=>{
        setLikecount(likecount+1);
        // document.getElementById("likeselected").style.backgroundColor = "#94a3b8"
    }

    const dislikeclickhandler = () =>{
        setDislikecount(dislikecount+1);
    }

    return(
        <div className="flex justify-start items-center pt-2">
            <p className="  w-fit h-fit flex justify-around items-center cursor-pointer" title="Like"><span className="text-xl p-1 hover:bg-slate-400 hover:rounded-full" onClick={likeclickhandler} id="likeselected"><AiOutlineLike  /></span><sup className="w-[25px]">{likecount}</sup></p>
            <p className=" w-fit h-fit flex justify-around items-center cursor-pointer" title="dislike"><span className="text-xl p-1 hover:bg-slate-400 hover:rounded-full" onClick={dislikeclickhandler}><AiOutlineDislike /></span><sup className="w-[25px]">{dislikecount}</sup></p>
            <span className=" cursor-pointer">reply</span>
        </div>
    )
}

export default CommentsAction;