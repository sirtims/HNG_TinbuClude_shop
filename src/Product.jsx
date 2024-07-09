import BestSellers from "./BestSellers.jsx"
import Style from "./Product.module.css"
import Style2 from "./FaceCleanser.module.css"
import Nav2 from "./Nav2.jsx"
const Product = () => {
   return (
      <div>
         <Nav2 />
         <div className={Style.product_wrapper}>
            <div className={Style.product}>
               <div className={Style.nav}>
                  <img src="public\header_img\Vector.svg" alt="" />
                  <p>Back to List</p>
               </div>
               <div className={Style.content}>
                  <div className={Style.content_img}>
                     <img src="header_img\explore-more\upscaled-2x-product.png" alt="" />
                  </div>
                  <section className={Style.details}>
                     <h1>The Original Daily Care</h1>
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
                              <img src="header_img\Vector.svg" alt="" />
                              <p>1</p>
                              <img src="header_img\Vector-right.svg" alt="" />
                           </div>
                           <p className={Style.count_details_p}>5 items in stock</p>
                        </div>
                     </div>
                     <div className={Style.callToAction}>
                        <a className={Style.action1} href=""><img src="header_img\shopping-cart2.svg" alt="" /></a>
                        <a className={Style.action2} href="">
                           <div className={Style.action2_details}>
                              <h3>ADD TO CART</h3>
                              <p>#30,000</p>
                           </div>
                        </a>
                     </div>
                  </section>
               </div>

            </div>
         </div>
         <div className={Style.bestsellers}>
            <h2 className={Style2.h2}>Similar product</h2>
            <BestSellers />
         </div>
      </div>
   )
}

export default Product
