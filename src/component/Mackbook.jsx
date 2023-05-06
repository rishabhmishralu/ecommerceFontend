import React, { useContext } from 'react'
import Slider from "./Slider";
import "./Component.css";
import { store } from './API/Apifunction'
const Mackbook = ({addtoCart}) => {
 const [context]= useContext(store)
  return (
    <>
    <Slider/>
    <div className='mac'>
      {
        context.filter((data)=>data.catagory==="macbook"
        ).map((item,index)=>
        <>
        <div className='mac-card' key={index}>
           
           <img src={item.image} alt="" className='image-mac' />
           <h3 style={{textAlign:"center"}}>{item.name}</h3>
           <h4 style={{textAlign:"center"}}>{item.price}</h4>
           <div className='mac-button'><button onClick={()=>addtoCart(item)}> Add Cart</button></div>
        </div>
       
        </>)
      }
    </div>
    </>
  )
}

export default Mackbook