// import PropTypes from "prop-types"
import { useContext } from "react"
import { bestContext } from "./bestContext.jsx"
function BestSellers() {
   // console.log(best)
   const { best, handleOrder } = useContext(bestContext)

   return (

      <section className="best-sellers">
         <h3>BEST SELERS</h3>
         <div className="best-seller-wrapper">
            {best.map((item) => (
               <article key={item.id}>
                  <img src={item.product_url} alt="olive nature" />
                  <div className="content">
                     <h4>PURITY</h4>
                     <div className="action">
                        <div className="price">
                           <p className="type">cream</p>
                           <p className="old_price">{item.old_price}</p>
                           <p className="new_price">{item.new_price}</p>
                        </div>
                        <div onClick={() => handleOrder(item.id)} className="action_img"> <img src={item.cartUrl} alt="" /></div>
                     </div>
                     <h6>60 ML</h6>
                  </div>
               </article>
            ))}

         </div>

      </section>

   )
}
// BestSellers.propTypes = {
//    best: PropTypes.array.isRequired,
//    handleOrder: PropTypes.func.isRequired,
// }
// BestSellers.defaultProps = {
//    best: [],
// }
export default BestSellers