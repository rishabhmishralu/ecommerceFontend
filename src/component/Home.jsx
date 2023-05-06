import React, { useContext, useEffect, useState } from "react";
import { store } from "./API/Apifunction";
import axios from "axios";
import Slider from "./Slider";

const Home = () => {
  const [context] = useContext(store);
  console.log(context);

  // addtodb
  const haddeleaddtocart = (productId) => {
    const _productId = productId;
    const userId = localStorage.getItem("userId");

    console.log({ productId: _productId, userId });

    const _data = { productId: _productId, userId };

    axios
      .post("http://localhost:5001/addtodb", _data)
      .then((res) => {
        console.log(res.data, "22");
      })
      .catch((err) => {
        console.log(err, "24");
      });
  };
  //  addto db

  return (
    <>
   
      <Slider />
<div className="span"> <span className="home-span">Every reason to turn your house into a smart home.</span></div>
     
      {/* <iframe src="https://youtu.be/tRPqGf8nc4g" frameborder="0"></iframe> */}
      <div className="home-home">
        <div className="tv"> 
          <h3>Apple TV 4K</h3>
          <h1>The Apple experience. Cinematic in every sense.</h1>
          <h3>Starting from ₹14900.00*</h3>
          <img src="https://www.apple.com/v/tv-home/j/images/overview/apple_tv_4k__b30wcqp0pdle_small_2x.jpg" alt=""  width="100%"/>
        </div>
        <div className="pod">
          <h3>HomePod mini</h3>
          <h1>Surprising sound for its size.</h1>
        <h3>10,9000 rs.</h3>
        <img src="https://www.apple.com/v/tv-home/j/images/overview/room_filling_sound__zagu3551kwyi_small_2x.jpg" alt="" width="100%" />
        </div>
      </div>
      <iframe width="100%" height="360" src="https://www.youtube.com/embed/tRPqGf8nc4g" title="iPhone 14 | Action mode | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div>
      < div className="main-card">
      {context
        .filter((data) => data.catagory === "home")
        .map((item,index) => (

          <div className="card" key={index} >
               
              
              <img src={item.image} alt="" className="image" />
              <h4>{item.name}</h4>
              <button  className="addbutton">
                Add To Card</button>
               <div className="price-iphone" >

                
              <div className="price"><h5>{item.price}</h5></div>
               <div className="oPrice"><h5>{item.oPrice}</h5></div>
    </div>
            
          </div>
        ))}
    </div>
      </div>
    </>
  );
};

export default Home;
