import React , { useRef} from 'react';
import Button from '../components/Button';
import {LiaAngleLeftSolid} from "react-icons/lia"
import {LiaAngleRightSolid} from "react-icons/lia"


const list = ["All","Computers","Gaming","Computer Applications","Wuxia","Manga","Music","Arjitsingh","Live","News","Filmi","Mantras","Flute","Movie Musicals","Healing Prayers"]
const ButtonList = () => {

  const containerRef = useRef(null);



  return (
    <div className='  mb-0'>
      
      <div className='   flex m-2' ref={containerRef} >
        <button className=' left-0 p-2'><LiaAngleLeftSolid /></button>
        {
          list.map((btnlist)=>{
            return (
              <Button key={btnlist} name={btnlist}/>
              )
              
            })
          }
          <button className='absolute right-0 p-2'><LiaAngleRightSolid /></button>
      </div>
      

     
      
      
    </div>
  )
}

export default ButtonList
