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
        <div className="w-[200px] sm:w-[220px] lg:w-[17rem] p-2 cursor-pointer box-border shadow-md m-1">
            <div className="rounded-lg ">
                <img src={thumbnails?.medium?.url} className="w-full rounded-lg" alt="video-img" />
                {/* <iframe className="rounded-lg" width="320" height="180" src={"https://www.youtube-nocookie.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>  */}
            </div>
            <div className="w-full h-[6.5rem] flex pt-2 box-border">
                {/* <div className="w-10 pt-2 pr-2"> */}
                    <img src={channelimage} className="w-9 h-9 rounded-full" alt="channel logo" />
                {/* </div> */}
                <div className="w-full md:h-24 pl-2">
                    <p className="m-0 pb-3  overflow-hidden box-border break-words"><span className=" line-clamp-2 leading-5 text-[15px] sm:text-sm">{title}</span></p>
                    <p className="font-semibold  text-[14px] md:text-[15px] sm:text-xs w-fit">{channelTitle}</p>
                    <p className="text-[14px] md:text-[15px] sm:text-xs w-fit "><span>{FormateCountview(statistics?.viewCount)} views</span> <span>{FormatdaysAgo(publishedAt)}</span></p>
                    
                </div>
            </div>
        </div>
    )
}

export default Videocard;