import CartComponet from './CartComponent.jsx'
import Nav2 from './Nav2.jsx'
import Style1 from './CartPage.module.css'
import Style from "./Product.module.css"
import Style2 from "./FaceCleanser.module.css"
import BestSellers from './BestSellers.jsx'
import React, { useState } from "react"



function CartPage() {
   const [storage] = useState(JSON.parse(localStorage.getItem("product")))
   const [{ productName, product_urle }] = storage
   const [increaseItem, setIncreasItem] = useState(0)

   function handleDecrement() {
      setIncreasItem(incre => incre > 0 ? incre - 1 : 0)
   }
   function handleIncrement() {
      setIncreasItem(increaseItem + 1)
   }

   return (

      <section className={Style.artPageWraper}>

         <Nav2 />
         <div className={Style1.product_wrapper}>
            <div className={Style.product}>
               <div className={Style.nav}>
                  <img src={456} alt="" />
                  <p>Back to List</p>
               </div>
               <div className={Style.content}>
                  <div className={Style.content_img}>
                     <img src={product_urle} alt="" />
                  </div>
                  <section className={Style.details}>
                     <h1>The Original {productName}</h1>
                     <div className={Style.rating}>
                        <div className={Style.stars}>
                           <img src="header_img\Star.svg" alt="" />
                           <img src="header_img\Star.svg" alt="" />
                           <img src="header_img\Star.svg" alt="" />
                           <img src="header_img\Star.svg" alt="" />
                           <img className={Style.NoBg_star} src="header_img\Star.svg" alt="" />
                        </div>
                        <p>56 reviews</p>
                     </div>
                     <p className={Style.paragraph}>
                        Dui aliquam blandit scelerisque nec diam pharetra odio hendrerit.
                        Ac amet purus egestas tortor ullamcorper tempus vel. Morbi sapien
                        venenatis parturient mattis tincidunt cursus ut non donec. Cursus
                        ugue egestas elementum venenatis suscipit id facilisis mi id.
                        Gravida platea in at mauris egestas sed nullam.
                     </p>

                     <div className={Style.pricing}>
                        <p><sup>#</sup>30,000</p> <span className={Style.delivery_fee}>+Delivery fee</span>
                     </div>
                     <div className={Style.quality}>
                        <p>Quality</p>
                        <div className={Style.count_details}>
                           <div className={Style.count}>
                              <img onClick={handleDecrement} src="header_img\Vector.svg" alt="" />
                              <p>{increaseItem}</p>
                              <img onClick={handleIncrement} src="header_img\Vector-right.svg" alt="" />
                           </div>
                           <p className={Style.count_details_p}>5 items in stock</p>
                        </div>
                     </div>
                  </section>
               </div>

            </div>
            <section className={Style1.addToCart}>
               <CartComponet url={product_urle} />
            </section>
         </div>
         <div className={Style.bestsellers}>
            <h2 className={Style2.h2}>Similar product</h2>
            <BestSellers />
         </div>

      </section>
   )
}

export default CartPage
