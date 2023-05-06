import React, { useEffect, useState } from 'react'

import  img1 from '../Image/1.jpg'
import  img2 from '../Image/2.png'
import  img3 from '../Image/3.jpg'
import  img4 from '../Image/4.png'
import  img5 from '../Image/5.jpg'

function Slider() {
  const[img,setimg]=useState(0)
  const[allImg]=useState([img1,img2,img3,img4,img5]);

  useEffect(()=>{
    setInterval(() => {
      setimg(img=>img<5?img+1:0)
}, 3000);
  },[])

  return (
    <div>
      <img src={allImg[img]} alt="404" className='sliderimg' />
    </div>
  )
}

export default Slider