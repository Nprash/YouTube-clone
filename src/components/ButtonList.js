import React from 'react';
import Button from '../components/Button';


const list = ["All", "Mixes","Music","Arjitsingh","Live","News","Filmi","Mantras","Flute","Movie Musicals","Healing Prayers"]
const ButtonList = () => {
  return (
    <div className='flex w-full'>
      {
        list.map((btnlist)=>{
          return (
            <Button key={btnlist} name={btnlist}/>
          )
          
        })
      }
      <Button />
    </div>
  )
}

export default ButtonList
