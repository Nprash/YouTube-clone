import React , {useState, useRef} from 'react';
import {LiaAngleLeftSolid, LiaAngleRightSolid} from "react-icons/lia"
import Button from '../components/Button';


const ButtonList = () => {
  const list = ["All","Computers","Gaming","Computer Applications","Wuxia","Manga","Music","Arjitsingh","Jubin natiala","Sonu Nigam","Shreya Ghosal","Live","News","Filmi","Movies","Scientific","Adventures","Horror","Drama","Comedy","Thrilling","Mantras","Flute","Movie Musicals","Healing Prayers","Science",]
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);

  const moveLeft = ()=>{
    setPosition(prevPosition => (prevPosition - 1));
    console.log("left btn clicked")
  };

  const moveRight = () => {
    setPosition(prevPosition => (prevPosition  + 1));
    console.log("right btn clicked")
  };

  return (
    <div className='box-border flex justify-center items-center my-2 max-w-[1500px]'>
      
      <div className=' relative flex mx-4 overflow-hidden' ref={containerRef} >
        {
          list.map((btnlist, index)=>{
            return (
              <Button key={index} name={btnlist} active={index===position}/>
              )
            })
          }
      </div>

      <div className='w-full absolute flex justify-between z-30'>
        <button onClick={moveLeft} className='  hover:bg-gray-200 rounded-full p-2 '><LiaAngleLeftSolid /></button>
        <button onClick={moveRight} className=' hover:bg-gray-200 rounded-full p-2 mr-4'><LiaAngleRightSolid /></button>
      </div>
    </div>
  )
}
export default ButtonList
