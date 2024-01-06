import React ,  {useRef } from 'react';
// import {LiaAngleLeftSolid, LiaAngleRightSolid} from "react-icons/lia"
import Button from '../components/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ButtonList = () => {
  const list = ["All","Computers","Gaming","Computer Applications","Wuxia","Manga","Music","Arjitsingh","Jubin natiala","Sonu Nigam","Shreya Ghosal","Live","News","Filmi","Movies","Scientific","Adventures","Horror","Drama","Comedy","Thrilling","Mantras","Flute","Movie Musicals","Healing Prayers","Science",]
  const containerRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0',
    rtl: false,
    responsive: [
      {
        breakpoint: 1919,  // Larger than or equal to XL
        settings: {
          slidesToShow: 12,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1439,  // Larger than or equal to LG
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1279,  // Larger than or equal to MD
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,  // Larger than or equal to SM
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 479,  // Too small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ],
  };
  
  const buttonChiphandler = () => {
    console.log(containerRef)
  }

  return (
    <div className='w-full overflow-hidden m-auto p-2'>
      <div className='mx-4  flex justify-center items-center'>
      <Slider {...settings}>
        {
          list.map((btnlist, index)=>(
            
            <Button key={index} onClick={buttonChiphandler} name={btnlist} />
            
          ))
        }
        </Slider>
      </div>
        
    </div>
  )
}
export default ButtonList