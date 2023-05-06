import React, { useEffect, useState } from "react";

  import axios from "axios";

const CartList = ({ cart }) => {
   console.log(cart,"6")
  const [CART, setCART] = useState([]);
  console.log(CART,"8")

  useEffect(() => {
    setCART(cart);
  }, [cart]);


  const totalAmount= CART.map((item) => item.price * item.quantity).reduce(
    (a, b) => a + b,
    0
  )
  

  const handleOpenRazorpay=(data)=>{
    const options={
         key:"rzp_test_dOWrhW1NQHYBzk",
         amount:Number(data.amount),
         currency:data.currency,
         name:'iShop',
         description:"xyz",
         order_id:data.id,
        handler:function(response){
          console.log(response,"22")
          axios.post("http://localhost:5001/verify",{response:response})
          .then(res=>{
            console.log(res,"25")
          })
          .catch(err=>{
            console.log(err)
          })
        }
    }
    const rzp=new window.Razorpay(options)
    rzp.open()
  }


const handlepayment=(amount)=>{
  const _data={ amount:amount}
  axios.post("http://localhost:5001/order",_data)
  .then(res=>{
    console.log(res.data,"29")
    handleOpenRazorpay(res.data.data)
  })
 .catch(err=>{
  console.log(err)
 })
}


// const removedata=(e)=>{
//   const data=e.target.value
//  CART.pop(data)
//   console.log(CART)
// }

  return (
    <div className="cart-main">
      {CART?.map((cartItem, cartindex) => {
        return (
          <div className="cartCard">


            <div className="cartimage">
              <img src={cartItem.image} alt="404" className="cartImage" />
            </div>

            <div className="cartimage">
              <h3>{cartItem.name}</h3>
            </div>
      <div className="increment">      
            <div className="cartButton">
              <button
                className="cartbutton"
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? {
                          ...item,
                          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                        }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                -
              </button>
            </div>
            <div className="cartqua">
              <h5>{cartItem.quantity}</h5>
            </div>

            <div className="cartButton">
              <button
                className="cartbutton"
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
            </div>
        </div>    
            <div className="cartprice">
              <h4 className="price">Rs.{cartItem.price}</h4>
            </div>
            <div className="cartprice">
              <h3> Rs. {cartItem.quantity * cartItem.price}</h3>
            </div>
          </div>
        );
      })}
      <div>
        <div className="total">
          <div className="cartimage">
<button onClick={(item)=>handlepayment(totalAmount)} className="paybutton"> Pay </button>
          </div>
          <div className="cartimage"></div>
          <h3>Total Amount</h3>
          <h3 style={{ color: "red" }}>
            Rs.
    
            {
              totalAmount
}
          </h3> 
        </div>


      </div>
    </div>
  );
};

export default CartList;
