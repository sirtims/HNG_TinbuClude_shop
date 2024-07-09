import checkout from './checkout.module.css'
import Style from './AddressCheckOut.module.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
const Sipping = () => {
   const [increaseItem, setIncreasItem] = useState(0)
   function handleDecrement() {
      setIncreasItem(incre => incre > 0 ? incre - 1 : 0)
   }
   function handleIncrement() {
      setIncreasItem(increaseItem + 1)
   }
   function handleDelete() {
      setIncreasItem(0)
   }
   return (
      <section className={Style.container}>
         <ul className={Style.ul}>
            <li className={Style.li}>
               <div className={Style.int}>
                  1
               </div>
               <p>Address</p>
               <div className={Style.dash}>--</div>
            </li>
            <li className={Style.li}>
               <div className={Style.int}>
                  2
               </div>
               <p>Shipping</p>
               <div className={Style.dash}>--</div>
            </li>
            <li className={Style.li}>
               <div className={Style.int}>
                  3
               </div>
               <p>Payment</p>
               <div className={Style.dash}>--</div>
            </li>
            <li className={Style.li}>
               <div className={Style.int}>
                  4
               </div>
               <p>Review</p>
            </li>
         </ul>
         <div className={Style.contentContainer}>
            <div className={Style.shipping}>
               <h1>Shipping</h1>
               <div className={Style.standard}>
                  <div className={Style.standard_express}>
                     <h3 >Standard</h3>
                     <p>10-20 Bussines Days</p>
                  </div>
                  <p>Free</p>
               </div>
               <div className={Style.standard}>
                  <div className={Style.standard_express}>
                     <h3>Express</h3>
                     <p>10-20 Bussines Days</p>
                  </div>
                  <p>$16</p>
               </div>
            </div>
            <div className={Style.cart}>
               <div className={checkout.container}>
                  <h3>Order Summary</h3>
                  <div className={checkout.item_container}>
                     <span>1 </span>
                     <span>item</span>
                  </div>
                  <div className={checkout.details}>
                     <div className={Style.image_div}>
                        <img src="header_img\product.png" alt="" />
                     </div>
                     <div className={checkout.info}>
                        <h4>
                           Ordinary Daily Care
                        </h4>
                        <p className={checkout.p_one}>color/size</p>
                        <p className={checkout.p_two}>N30,000</p>
                     </div>
                     <div className={checkout.count}>
                        <div className={checkout.add_minus}>
                           <span><button onClick={handleDecrement}>-</button></span>
                           <span className={checkout.Integer}>{increaseItem}</span>
                           <span><button onClick={handleIncrement}>+</button></span>
                        </div>
                        <img onClick={handleDelete} src="header_img\trash.svg" alt="" />
                     </div>
                  </div>
                  <div className={checkout.addToCartContainer}>
                     <div className={checkout.addToCartDetails}>
                        <div className={checkout.addToCartDetails_one}>
                           <p className={checkout.transparent}>Subtotal</p>
                           <p className={checkout.transparent}>Shipping</p>
                           <p>Order Total</p>
                        </div>
                        <div className={checkout.addToCartDetails_two}>
                           <p className={checkout.transparent}>$45.00</p>
                           <p className={checkout.transparent}>$4.00</p>
                           <p>$45.00</p>
                        </div>
                     </div>
                     <Link to="/payment">
                        <button className={checkout.addToCartDetails_button}>Continue to Cart</button>
                     </Link>
                  </div>
                  <div className={Style.help}>
                     <p>Return Policy</p>
                     <p>Help</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

   )
}

export default Sipping
