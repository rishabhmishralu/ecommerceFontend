import React from 'react'
import Slider from './Slider'

const ProductSlide = () => {



  

  return (
    <div className='Product-main'>
        <div className='container'>
        <img className='controlPrev' src="https://cdn.icon-icons.com/icons2/1863/PNG/96/arrow-back-ios_119432.png"  />
           <div className='sliderProduct'>

               <img src="https://m.media-amazon.com/images/I/81b3zG8j2bL._SX679_.jpg" alt="" />
               <img src="https://m.media-amazon.com/images/I/81b3zG8j2bL._SX679_.jpg" alt="" />
               <img src="https://m.media-amazon.com/images/I/81b3zG8j2bL._SX679_.jpg" alt="" />
               <img src="https://m.media-amazon.com/images/I/81b3zG8j2bL._SX679_.jpg" alt="" />


           </div>
        <img className='controlNext' src="  https://cdn.icon-icons.com/icons2/1863/PNG/96/arrow-forward-ios_119426.png" alt="" />
        </div>
    </div>
  )
}

export default ProductSlide