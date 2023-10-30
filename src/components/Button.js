import React from "react"


const Button = (props) =>{
    return (
        <div>
            <button className="px-2 m-3  bg-gray-200 rounded-lg whitespace-nowrap ">{props.name}</button>
        </div>
    )
}


export default Button; 