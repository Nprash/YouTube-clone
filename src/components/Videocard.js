import React from "react";
// import videoimage from "../Assets/1img.jpg"
import channelimage from "../Assets/2img.jpg"

const Videocard = ({info}) =>{
    const { snippet, statistics} = info;
    const { channelTitle, title, thumbnails, publishedAt} = snippet;
    console.log(info);
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
        <div className="w-[17rem] p-2 cursor-pointer">
            <div className="rounded-lg w-70">
                <img src={thumbnails?.medium?.url} className="w-full rounded-lg" alt="video-img" />
            </div>
            <div className="w-full h-[6.5rem] grid grid-flow-col pt-2">
                {/* <div className="w-10 pt-2 pr-2"> */}
                    <img src={channelimage} className="w-9 h-9 rounded-full" alt="channel logo" />
                {/* </div> */}
                <div className="w-full h-24 pl-2">
                    <p className="m-0 h-11 text-base"><span className="line-clamp-2 leading-5">{title}</span></p>
                    <p className="text-sm w-fit">{channelTitle}</p>
                    <p className="text-sm w-fit"><span>{FormateCountview(statistics?.viewCount)} views</span> <span>{FormatdaysAgo(publishedAt)}</span></p>
                    
                </div>
            </div>
        </div>
    )
}

export default Videocard;