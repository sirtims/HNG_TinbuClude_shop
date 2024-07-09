import HeroProduct from "./HeroProduct"
import Style from "./FaceProduct.module.css"
import PropTypes from 'prop-types'

const FaceProduct = ({ bests, explore, handleOrder }) => {
   return (
      <section className="face">
         <section className={Style.product_wrapper}>
            <section className={Style.product_section}>
               <div className={Style.detail}>
                  <p className={Style.p1}>Face</p>
                  <div className={Style.product}>
                     <p>Lip Care</p>
                     <p>Oil</p>
                     <p className={Style.cleanser}>Cleanser</p>
                     <p className={Style.accesories}>Accesories</p>

                  </div>
                  <div className={Style.hot}>
                     <p>New Arrival</p>
                     <p>Best Sellers</p>

                  </div>

               </div>
               <div className={Style.image}>
                  <img className={Style.img} src="public\header_img\best-sellas\img3.png" alt="" />
                  <div>
                     <div className={Style.select_wrapper}>
                        <select className={Style.section} name="" id="">
                           <option value="">Shop New Arrival</option>
                        </select>
                        <img src="public\header_img\down-arrow.png" alt="" />
                     </div>
                  </div>
               </div>
            </section>
         </section>
         <HeroProduct bests={bests} explore={explore} handleOrder={handleOrder} />
      </section>

   )
}

FaceProduct.propTypes = {
   bests: PropTypes.array.isRequired,
   explore: PropTypes.array.isRequired,
   handleOrder: PropTypes.func.isRequired
}
export default FaceProduct
