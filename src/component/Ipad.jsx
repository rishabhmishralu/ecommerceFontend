import React, { useContext } from 'react'
import { store } from './API/Apifunction'
import Slider from './Slider'
export const Ipad = ({addtoCart}) => {
    const [context]=useContext(store)
    console.log(context)
  return (
    <><Slider/>
    
    <div className="main-card">


{context
          .filter((data) => data.catagory === "Ipad")
          .map((item, index) => (
          <div className="cardIpad" key={index}>
            

    
      <img src={item.image} alt="" srcset=""  className='imageipad'/>
 
           
           <h4>{item.name}</h4>
           <button  onClick={()=>addtoCart(item)}>add to cart</button>
           <div className="price-iphone" >
                
                <div className="price"><h5>{item.price}</h5></div>
                 <div className="oPrice"><h5>{item.oPrice}</h5></div>
      </div>

            </div>
          
           
 ))}


    </div>
    </>
  )
}

