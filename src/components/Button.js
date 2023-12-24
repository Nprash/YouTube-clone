import React from "react"


const Button = ({name, active}) =>{
    return (
        <div className="w-fit">
            <button className={`px-2 m-2  bg-gray-200 rounded-lg whitespace-nowrap ${active? 'active':""}`}>{name}</button>
        </div>
    )
}


export default Button; 