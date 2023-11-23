import React from 'react'
import usericon from "../Assets/user-icon.png"



const ChatMessage = ( {name, message}) => {
  return (
    <div className=" flex items-center flex-wrap p-1 px-2 rounded-lg">
      {/* <input type="text" placeholder="type.."/>
      <button>submit</button> */}
      <img className='w-6 cursor-pointer h-6' src={usericon} alt="user-icon" />
      <span className='font-semibold p-2' >{name}</span>
      <span className='px-2'>{message}</span>
    </div>
  )
}

export default ChatMessage
