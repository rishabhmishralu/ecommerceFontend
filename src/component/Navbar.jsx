import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Component.css";
import { useState } from "react";
import img6 from "../Image/6.jpg";
import img7 from "../Image/7.jpg";
import img8 from "../Image/8.jpg";
import {FaBars} from "react-icons/fa"

const Navbar = ({cart}) => {

  console.log(cart.length,"6")

const [icon,seticon]=useState(false)
const iconhandlle=()=>{
  seticon(!icon)

}


  const auth = localStorage.getItem("token");
  const navigate = useNavigate();
  const logout = () => {
    console.log("apple");
    localStorage.clear();
    navigate("/Signup");
  };
  const [menu, setmenu] = useState(false);

  const change = (e) => {
    e.preventDefault(setmenu(!menu));
    console.log(menu);
  };

  return (
    <div>
      <div className="bar">
        <div className="lang-bar">
          <form action="">
            <select name="" id="">
              <option value="EN">EN</option>
              <option value="HINDI">HINDI</option>
            </select>

            <select name="" id="">
              <option value="$">$</option>
            </select>
          </form>
        </div>

        <div className="card-bar">
          {auth ? (
            <div>
              {" "}
              <img src={img7} alt="" srcset="" />
              <span>
                <NavLink onClick={logout} to="./Singup" className="navlink">
                  logout
                </NavLink>
              </span>
            </div>
          ) : (
             <>
           
             
              <div>
                <img src={img6} alt="" srcset="" />
                <span>
                  {" "}
                  <NavLink to="/Signup" className="navlink">
                    My profile
                  </NavLink>
                </span>
              </div>
              <div>
                <img src={img6} alt="" srcset="" />
                <span>
                  {" "}
                  <NavLink to="/Login" className="navlink">
                    Log in
                  </NavLink>
                </span>
              </div>
             </>
          )}


          <div>
            {" "}
            <img src={img7} alt="" srcset="" />
            <span>
              {" "}
              <NavLink to="/cart" className="navlink">
                {" "}
                Items{" "}
              
              {cart.length}
              </NavLink>{" "}
            </span>
          </div>
       



          <div>
            <img src={img8} alt="" srcset="" className="search" />
          </div>
        </div>
      </div>
      <h1 className="header">iSHOP</h1>

      <ul type="none" className={icon?".bars":"ul"}>
        <li>
          <h3>
            <NavLink className="navlink" to="/">
              HOME
            </NavLink>
          </h3>
        </li>
        <li>
          <h3 onMouseOver={change}>
            <NavLink className="navlink" to="store">
              STORE{" "}
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink className="navlink" to="/iphone">
              IPHONE
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink className="navlink" to="/ipad">
              IPAD
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink className="navlink" to="/mackbook">
              MACBOOK
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink className="navlink" to="/accesories">
              ACCESORIES
            </NavLink>
          </h3>
        </li>
        
      </ul>
      <button className="bars" onClick={iconhandlle}>
        <FaBars/>
      </button>
      <div className={menu ? "hover" : "storemenu"}>
        <table width={"100%"}>
          <tr>
            <th colSpan={2}>Accessories</th>
            <th colSpan={2}>Category</th>
            <th>Category</th>
          </tr>

          <tr>
            <td>AirPort & Wireless </td>
            <td>Cameras & Video </td>
            <td>Charging Devices </td>
            <td>Headphones</td>
            <td>Mice & Keyboards </td>
            <td></td>
          </tr>

          <tr>
            <td>AppleCare Bag</td>
            <td> Car & Travel </td>
            <td>Connected Home </td>
            <td>HealhKit</td>
            <td>Music Creation</td>
          </tr>

          <tr>
            <td> Bags, Shells & Sleeve</td>
            <td> Cases & Films</td>

            <td> Device Care </td>
            <td> Networking & Server</td>
            <td></td>
          </tr>

          <tr>
            <td>Business & Security</td>
            <td></td>
            <td>Display & Graphic </td>
          </tr>

          <tr>
            <td>Cables & Docks</td>
            <td></td>
            <td> Fitness & Sport</td>
          </tr>
        </table>
       
      </div>
    </div>
  );
};

export default Navbar;
