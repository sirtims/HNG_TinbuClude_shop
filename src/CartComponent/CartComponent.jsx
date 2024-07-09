import Style from "./AddToCartComponent.module.css"
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
const CartComponent = ({ url }) => {
   const [increaseItem, setIncreasItem] = useState(0)
   function handleDecrement() {
      setIncreasItem(incre => incre > 0 ? incre - 1 : 0)
   }
   function handleIncrement() {
      setIncreasItem(increaseItem + 1)
   }
   function handleDelete() {
      setIncreasItem(0)
      localStorage.clear
   }
   return (

      <div className={Style.container}>
         <h3>Your Cart</h3>
         <div className={Style.item_container}>
            <span>1 </span>
            <span>item</span>
         </div>
         <div className={Style.details}>
            <div className={Style.image_div}>
               <img src={url} alt="" />
            </div>
            <div className={Style.info}>
               <h4>
                  Ordinary Daily Care
               </h4>
               <p className={Style.p_one}>color/size</p>
               <p className={Style.p_two}>N30,000</p>
            </div>
            <div className={Style.count}>
               <div className={Style.add_minus}>
                  <span><button onClick={handleDecrement}>-</button></span>
                  <span className={Style.Integer}>{increaseItem}</span>
                  <span><button onClick={handleIncrement}>+</button></span>
               </div>
               <img onClick={handleDelete} src="header_img\trash.svg" alt="" />
            </div>
         </div>
         <div className={Style.addToCartContainer}>
            <div className={Style.addToCartDetails}>
               <p className={Style.addToCartDetails_one}>Subtotal</p>
               <p className={Style.addToCartDetails_two}>N30,000</p>
            </div>
            <Link to="/addreCheckOut">
               <button className={Style.addToCartDetails_button}>Continue to Cart</button>
            </Link>
         </div>
      </div>
   )
}
CartComponent.propTypes = {
   url: PropTypes.string
}
export default CartComponent
