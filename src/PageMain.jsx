
import PropTypes from 'prop-types'
import Style from "./FaceProduct.module.css"
import BestSellers from "./BestSellers.jsx"

function PageMain({ arrivalProduct, best, explore, handleOrder }) {

   return (<>
      <section className="hero">
         <p>Your ultimate s<span className="skin-care">kincare <br /> home where your</span>
            natural <br />radiance is  reignited
         </p>
         <div className={Style.hero_images}>
            <div className={Style.image1}>
               < img src="/images/header-img1.png" alt="product 1" />

            </div>
            <div className={Style.big}>
               < img src="/images/header_img_big.png" alt="product 1" />

            </div>
            <div className={Style.image3}>
               < img src="/images/header-img2.png" alt="product 1" />

            </div>
         </div>
      </section>
      <main>
         <h3 className="arrival">New Arrivals</h3>
         <section className="newArival">
            {arrivalProduct.map(arrival => (
               <article key={arrival.id} >
                  <img className="arrival_article_img" src={arrival.url} alt="olive nature" />
                  <div className="content">
                     <h4>{arrival.name}</h4>
                     <div className="action">
                        <div className="price">
                           <p className="type">cream</p>
                           <p className="old_price">{arrival.old_price}</p>
                           <p className="new_price">{arrival.new_price}</p>
                        </div>
                        <div onClick={() => handleOrder(arrival.id)} className="action_img"> <img src={arrival.cartUrl} alt="" /></div>                  </div>
                     <h6>120 Ml</h6>
                  </div>
               </article>
            ))}

         </section>
         <BestSellers best={best} handleOrder={handleOrder} />
         <section className="express-more">
            <div className="express-more-wrapper">
               {explore.map(ex => (
                  <article key={ex.id}>
                     <img src={ex.product_urle} alt="olive nature" />
                     <div className="content">
                        <h4>{ex.productName}</h4>
                        <div className="explore_action">
                           <div className="details">
                              <p className="p1">200ml</p>
                              <p className="p2">{ex.detail}</p>
                              <p className="p3">{ex.type}</p>
                              <button>view details</button>
                           </div>
                           <div className="cart">
                              <p className="p2">{ex.price}</p>
                              <p className="p3">price</p>
                              <button onClick={() => handleOrder(ex.id)}>add to cart</button>
                           </div>
                           <div>
                           </div>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
            <p className="explore-p">Express More</p>
         </section>

      </main>

   </>)
}

PageMain.propTypes = {
   arrivalProduct: PropTypes.array.isRequired,
   explore: PropTypes.array.isRequired,
   best: PropTypes.array.isRequired,
   handleOrder: PropTypes.func.isRequired
}
export default PageMain
