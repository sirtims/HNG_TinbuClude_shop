import FooterComponents from "./FooterComponents"

const Footer = () => {
   return (
      <footer>
         {/* <FooterComponents /> */}
         <div className="footer_wrapper">
            <section className="sub">
               <h3>KAYGLOW</h3>
               <div className="footComp"><FooterComponents /></div>
               <div className="form-section">
                  <p>check the updates right in your inbox</p>
                  <form action="">
                     <input type="text" placeholder="email address" />
                     <a href="#">subscribe</a>
                  </form>
                  <div className="copy-right">
                     <div className="copy">
                        <p><span>&copy;</span> Kayglow 2024</p>
                     </div>
                     <div className="privacy">
                        <p>Privacy policy</p>
                     </div>
                     <div className="terms">
                        <p>Terms of use</p>
                     </div>
                  </div>
               </div>
            </section>
            <section className="links">
               <FooterComponents />
            </section>
         </div>

      </footer>


   )
}

export default Footer
