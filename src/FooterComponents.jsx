import Style from "./FooterComponents.module.css"
const FooterComponents = () => {
   return (
      <section className={Style.sectiton}>
         <div className={Style.linkContainer}>
            <ul className={Style.ul}>
               <li>Our story</li>
               <li>FAQ</li>
               <li>Contact</li>
               <li>Help & support</li>
            </ul>
            <ul className={Style.ul}>
               <li>Services</li>
               <li>Body</li>
               <li>Face</li>
               <li>Skincare</li>
            </ul>
            <ul className={Style.ul}>
               <li>About us</li>
               <li>Product</li>
               <li>Meat our team</li>
               <li>Join us</li>
            </ul>
         </div>
         <div className={Style.circleContainer}>
            <div className={Style.circle}></div>
            <div className={Style.circle}></div>
            <div className={Style.circle}></div>
            <div className={Style.circle}></div>
         </div>
      </section>
   )
}

export default FooterComponents
