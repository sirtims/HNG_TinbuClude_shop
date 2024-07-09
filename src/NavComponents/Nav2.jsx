import Style from "./FaceCleanser/FaceCleanser.module.css"

const Nav2 = () => {
   return (
      <ul className={Style.ul}>
         <li className={Style.li}>
            <select name="" id="">
               <option value="">Product</option>
            </select>

         </li>
         <li className={Style.li}>
            <select name="" id="">
               <option value="">Face</option>
            </select>

         </li>
         <li className={Style.li}>
            <select name="" id="">
               <option value="">Cleansing</option>
            </select>

         </li>
      </ul>
   )
}

export default Nav2
