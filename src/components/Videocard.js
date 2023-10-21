import React from "react";
// import videoimage from "../Assets/1img.jpg"
import channelimage from "../Assets/2img.jpg"

const Videocard = ({info}) =>{
    const { snippet, statistics} = info;
    const { channelTitle, title, thumbnails, publishedAt} = snippet;
    // console.log(info);
    function FormatdaysAgo(publishedAt) {
        const presentdate = new Date();
        const postedDate = new Date(publishedAt)
        const timdiff = presentdate - postedDate;
        const daysago = Math.floor(timdiff/(1000 * 60 *60 * 24));
        return `${daysago} days ago`
    }
    function FormateCountview(viewCount) {
        const viewcountnumber = parseInt(viewCount)
        if(viewcountnumber >= 100000){
            const lakhs = (viewcountnumber/100000).toFixed(2);
            return `${lakhs} lak`
        }else{

        }
        return viewCount;
    }

    return(
        <div className="w-72 p-2 cursor-pointer shadow-lg">
            <div className="rounded-lg ">
                <img src={thumbnails?.medium?.url} className="rounded-lg" alt="video-img" />
            </div>
            <div className="mt-1 flex justify-between p-2">
                <div className="pr-3">
                    <img src={channelimage} className="w-10 h-8 rounded-full" alt="channel logo" />
                </div>
                <div className="w-full ">
                    <p>{title}</p>
                    <p className="text-sm">{channelTitle}</p>
                    <p className="text-sm"><span>{FormateCountview(statistics?.viewCount)} views</span> <span>{FormatdaysAgo(publishedAt)}</span></p>
                    
                </div>
            </div>
        </div>
    )
}

export default Videocard;