import React, { useContext, useState } from "react";
import { store } from "./API/Apifunction";
import "./Component.css";
import Slider from "./Slider";


const Iphone = ({addtoCart}) => {

  const [context]= useContext(store);
  console.log(context);



  return (
    <><br />
    <Slider/>
    < div className="main-card">
      {context
        .filter((data) => data.catagory === "Accessories")
        .map((item,index) => (

          <div className="card" key={index}>
               
              
              <img src={item.image} alt="" className="image" />
              <h4>{item.name}</h4>
              <button onClick={()=>addtoCart(item)}>
                Add To Card</button>
               <div className="price-iphone" >
                
              <div className="price"><h5>{item.price}</h5></div>
               <div className="oPrice"><h5>{item.oPrice}</h5></div>
    </div>
            
          </div>
        ))}
    </div>
    </>
  );
};

export default Iphone;