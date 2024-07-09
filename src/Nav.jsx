
// import KayGlow from "./assets/kayGlo.png"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
   const [toggle, setToggle] = useState(false)
   function handleToggle() {
      setToggle(tog => !tog)
   }
   return (
      <>
         <header className="navibation">
            <div className="wrapper">
               <div className="logo_section">
                  <div className="logo">
                     <img src="public/header_img/KAYLOGO.png" alt="" />
                  </div>
                  <ul>

                     <Link to="/faceproduct">
                        <li>
                           <p className="logo-p">Face</p>
                           <img src="public/header_img/down-arrow.png" alt="" />
                        </li>
                     </Link>
                     <Link to="faceproduct">
                        <li>
                           <p className="logo-p">Body</p>
                           <img src="public/header_img/down-arrow.png" alt="" />
                        </li>
                     </Link>
                     <Link to="faceproduct">
                        <li>
                           <p className="logo-p">Product</p>
                           <img src="public/header_img/down-arrow.png" alt="" />
                        </li>
                     </Link>
                  </ul>
               </div>
               <div className="search_section">
                  <div className="search">
                     <img src="public/header_img/search-normal.png" alt="" />
                     <input type="text" />
                  </div>
                  <Link to="/cartpage">
                     <div className="profile-cart">
                        <img src="public\header_img\inactive.png" alt="" />
                        <img src="public\header_img\shopping-cart.png" alt="" />
                     </div>
                  </Link>
               </div>
               <div onClick={handleToggle} className="menu_section">
                  {toggle ? <div className='menu-X'>X</div> : <img src="public\header_img\menu.png" alt="" />}
               </div>
               <div className={`drop_down ${toggle ? "active" : ""}`}>
                  <ul>
                     <li>
                        <p className="logo-p">Face</p>
                        <img src="public/header_img/down-arrow.png" alt="" />
                     </li>
                     <li>
                        <p className="logo-p">Body</p>
                        <img src="public/header_img/down-arrow.png" alt="" />
                     </li>
                     <li>
                        <p className="logo-p">Product</p>
                        <img src="public/header_img/down-arrow.png" alt="" />
                     </li>
                  </ul>
               </div>
            </div>
         </header>
      </>
   )
}