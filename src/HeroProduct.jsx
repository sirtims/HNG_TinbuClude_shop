import PropTypes from 'prop-types'

import Style from "./FaceProduct/FaceProduct.module.css"

const HeroProduct = ({ bests, explore, handleOrder }) => {


   return (
      <>
         <div className={Style.hero_wrapper}>
            <div className={Style.hero_images}>
               <div className={Style.image1}>
                  < img src="public\header_img\header-img1.png" alt="product 1" />

               </div>
               <div className={Style.big}>
                  < img src="public\header_img\header_img_big.png" alt="product 1" />

               </div>
               <div className={Style.image3}>
                  < img src="public\header_img\header-img2.png" alt="product 1" />

               </div>
            </div>
            <main className={Style.hero_wrapper_main}>
               <h3 className="arrival">New Arrivals</h3>
               <section className="newArival">
                  <article>
                     <img src="public\header_img\new-arrival-imgs\imag1.png" alt="olive nature" />
                     <div className="content">
                        <h4>OLIVE NATURE</h4>
                        <p> tempus vel Morbi sapien venenatis</p>
                        <h6>120 Ml</h6>
                     </div>
                  </article>
                  <article>
                     <img src="public\header_img\new-arrival-imgs\image2.png" alt="olive nature" />
                     <div className="content">
                        <h4>OlAY HAND CREAM</h4>
                        <p> tempus vel Morbi sapien venenatis </p>
                        <h6>120 Ml</h6>
                     </div>
                  </article>
                  <article>
                     <img src="public\header_img\new-arrival-imgs\image3.png" alt="olive nature" />
                     <div className="content">
                        <h4>OLIVE NATURE</h4>
                        <p>  tempus vel Morbi sapien venenatis</p>
                        <h6>120 Ml</h6>
                     </div>
                  </article>

               </section>


               <section className="best-sellers">
                  <h3>BEST SELERS</h3>
                  <div className="best-seller-wrapper">
                     {bests.map(best => (
                        <article onClick={() => handleOrder(best.id)} className="article" key={best.id}>
                           <img src={best.product_urle} alt="olive nature" />
                           <div className="content">
                              <h4>{best.product_name}</h4>
                              <p>  tempus vel Morbi sapien venenatis</p>
                              <h6>120 Ml</h6>
                           </div>

                        </article>
                     ))}
                  </div>



               </section>
               <section className="express-more">
                  <div className="express-more-wrapper">

                     {explore.map(ex => (
                        <article onClick={() => handleOrder(ex.id)} key={ex.id}>
                           <img src={ex.product_urle} alt="olive nature" />
                           <div className="content">
                              <h4>{ex.product_name}</h4>
                              <p>  tempus vel Morbi sapien venenatis</p>
                              <h6>120 ML</h6>
                           </div>
                        </article>

                     ))}

                  </div>
                  <p className="explore-p">Express More</p>
               </section>

            </main>
         </div>
      </>
   )
}
HeroProduct.propTypes = {
   bests: PropTypes.string.isRequired,
   explore: PropTypes.string.isRequired,
   handleOrder: PropTypes.string.isRequired
}
export default HeroProduct

