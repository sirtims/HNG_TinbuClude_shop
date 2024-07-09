import BestSellers from "../BestSellers"
import Style from "./FaceCleanser.module.css"
import Nav2 from "../Nav2"
const FaceCleansers = () => {
   return (
      <div className={Style.faceCleanser_wrapper}>
         <section className={Style.section}>
            <Nav2 />
            <h1 className={Style.h1}>
               Face cleansers are essential skincare
               products that help remove dirts, oil,
               Makeup and other impurities from the face
            </h1>
         </section>
         <div className={Style.bestsellers}>
            <h2 className={Style.h2}>Face Cleansers</h2>
            <BestSellers />
         </div>
      </div>
   )
}

export default FaceCleansers
