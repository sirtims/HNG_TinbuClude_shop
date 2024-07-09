
import { Routes, Route } from 'react-router-dom'
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"
import { Suspense, useState } from "react"
import FaceCleansers from "./FaceCleanser/FaceCleansers.jsx"
import FaceProduct from "./FaceProduct/FaceProduct.jsx"
import Product from "./Product/Product.jsx"
import CartComponent from "./CartComponent/CartComponent.jsx"
import CartPage from "./CartPage.jsx"
import AddreCheckOut from "./AddreCheckOut.jsx"
import Shipping from "./Shipping.jsx"
import PaymentPage from "./PaymentPage.jsx"

import { lazy } from "react"
const Home = lazy(() => import("./PageMain.jsx"))

function App() {

  const arivival = [
    { name: ">OLIVE NATURE", url: "public/header_img/header-img1.png", cartUrl: "public/addToCart_img.png", old_price: "N6,000", new_price: "N4,000", id: 0 },
    { name: ">OLIVE NATURE", url: "public/header_img/header-img2.png", cartUrl: "public/addToCart_img.png", old_price: "N12,000", new_price: "N8,000", id: 1 },
    { name: ">OLIVE NATURE", url: "public/header_img/header-img2.png", cartUrl: "public/addToCart_img.png", old_price: "N26,000", new_price: "N24,000", id: 2 }
  ]
  const [arrivalProduct, setArrivalProduct] = useState(arivival)
  const best_sellers = [
    { productName: "PURITY", product_urle: "header_img/best-sellas/Frame 93.png", cartUrl: "public/ddToCart_img.png", old_price: "N6,000", new_price: "N4,000", id: 0 },
    { productName: "FACIAL WASH", product_urle: "header_img/best-sellas/img2.png", cartUrl: "public/ddToCart_img.png", id: 1 },
    { productName: "OLIVE NATURE", product_urle: "header_img/best-sellas/img3.png", cartUrl: "public/ddToCart_img.png", id: 2 },
    { productName: "CERAVE", product_urle: "header_img/best-sellas/img4.png", cartUrl: "public/ddToCart_img.png", id: 3 },
  ]
  const [bests, setBest] = useState(best_sellers)
  const explore_more = [
    { productName: "OLIVE NATURE", product_urle: "public/header_img/explore-more/img1.png", price: "N22,000", type: "Oil", id: 0 },
    { productName: "OLIVE NATURE", product_urle: "public/header_img/explore-more/img2.png", price: "N22,000", type: "Oil", id: 1 },
    { productName: "OLIVE NATURE", product_urle: "public/header_img/explore-more/img3.png", price: "N22,000", type: "Oil", id: 2 },
    { productName: "OLIVE NATURE", product_urle: "public/header_img/explore-more/img4.png", price: "N22,000", type: "Oil", id: 3 },
    { productName: "OLIVE NATURE", product_urle: "public/header_img/explore-more/img5.png", price: "N22,000", type: "Oil", id: 4 },
    { productName: "OLIVE NATURE", product_urle: "public/header_img/explore-more/img6.png", price: "N22,000", type: "Oil", id: 5 },
    { productName: "OLIVE NATURE", product_urle: "public/header_img/explore-more/img7.png", price: "N22,000", type: "Oil", id: 6 },
    { productName: "OLIVE NATURE", product_urle: "public/header_img/explore-more/img8.png", price: "N22,000", type: "Oil", id: 7 }

  ]
  const [explore, setExplor] = useState(explore_more)
  const [produtUlr, setProductUrl] = useState(null)
  const [produtName, setProductName] = useState(null)

  function handleOrder(grab_order) {
    const newEx = explore.filter((i_, ex) => ex === grab_order) ||
      bests.filter((i_, best) => best === grab_order) ||
      arrivalProduct.filter((i_, ar) => ar === grab_order)
    setExplor
    setBest
    setArrivalProduct
    // console.log(newEx)
    const [{ productName, product_urle }] = newEx

    setProductName(productName)
    setProductUrl(product_urle)
    localStorage.setItem("product", JSON.stringify(newEx))
  }

  return (
    <>

      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home arrivalProduct={arrivalProduct} explore={explore} handleOrder={(e) => handleOrder(e)} />} />
          <Route path="/cartpage" element={<CartPage produtNam={produtName} produtUlr={produtUlr} />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AddreCheckOut" element={<AddreCheckOut />} />
          <Route path="/CartComponent" element={<CartComponent />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/Payment" element={<PaymentPage />} />
          <Route path="/FaceProduct" element={<FaceProduct bests={bests} explore={explore} handleOrder={(e) => handleOrder(e)} />} />
          <Route path="/CartPage" element={<CartPage produtNam={produtName} produtUlr={produtUlr} />} />
          <Route path="/FaceCleansers" element={<FaceCleansers />} />
        </Routes>
        <Footer />

      </Suspense>


    </>
  )
}

export default App
