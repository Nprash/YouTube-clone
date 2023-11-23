import React , { useRef} from 'react';
import Button from '../components/Button';
import {LiaAngleLeftSolid} from "react-icons/lia"
import {LiaAngleRightSolid} from "react-icons/lia"


const list = ["All","Computers","Gaming","Computer Applications","Wuxia","Manga","Music","Arjitsingh","Live","News","Filmi","Mantras","Flute","Movie Musicals","Healing Prayers"]
const ButtonList = () => {

  const containerRef = useRef(null);



  return (
    <div className='p-0  m-0'>
      
      <div className=' w-screen  flex m-1 overflow-x-hidden hover:overflow-x-scroll ' ref={containerRef} >
        <button className=' left-0 p-2'><LiaAngleLeftSolid /></button>
        {
          list.map((btnlist)=>{
            return (
              <Button key={btnlist} name={btnlist}/>
              )
              
            })
          }
          <button className='right-0  p-2 '><LiaAngleRightSolid /></button>
      </div>
      

     
      
      
    </div>
  )
}

export default ButtonList
