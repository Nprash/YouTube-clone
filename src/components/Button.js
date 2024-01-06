import React from "react"


const Button = ({name}) =>{
    return (
        <>
            <button className={`md:px-2 md:m-2 text-[12px] md:text-sm lg:text-md xl:text-lg bg-gray-200 rounded-lg whitespace-nowrap `}>{name}</button>
        </>
    )
}
export default Button; 