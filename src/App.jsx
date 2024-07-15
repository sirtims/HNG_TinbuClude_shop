
import { Routes, Route } from 'react-router-dom'
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"
import { Suspense, useState } from "react"
import FaceCleansers from "./FaceCleansers.jsx"
import FaceProduct from "./FaceProduct.jsx"
import Product from "./Product.jsx"
import CartComponent from "./CartComponent.jsx"
import CartPage from "./CartPage.jsx"
import AddreCheckOut from "./AddreCheckOut.jsx"
import Shipping from "./Shipping.jsx"
import PaymentPage from "./PaymentPage.jsx"
import { bestContext } from './bestContext.jsx'

import { lazy } from "react"
const Home = lazy(() => import("./PageMain.jsx"))
// const BestSellers = lazy(() => import("./BestSellers.jsx"))

function App() {

  const arivival = [
    { name: "OLIVE NATURE", url: "/images/arrival1.png", cartUrl: "/images/addToCart_img.png", old_price: "N6,000", new_price: "N4,000", id: 0 },
    { name: "OLIVE NATURE", url: "images/arrival2.png", cartUrl: "/images/addToCart_img.png", old_price: "N12,000", new_price: "N8,000", id: 1 },
    { name: "OLIVE NATURE", url: "/images/arrival3.png", cartUrl: "/images/addToCart_img.png", old_price: "N26,000", new_price: "N24,000", id: 2 }
  ]
  const [arrivalProduct, setArrivalProduct] = useState(arivival)
  const best = [
    { productName: "FACIAL WASH", product_url: "/images/bestseller1.png", cartUrl: "/images/addToCart_img.png", old_price: "N6,000", new_price: "N4,000", id: 0 },
    { productName: "FACIAL WASH", product_url: "/images/bestseller2.png", cartUrl: "/images/addToCart_img.png", old_price: "N6,000", new_price: "N4,000", id: 1 },
    { productName: "OLIVE NATURE", product_url: "/images/bestseller3.png", cartUrl: "/images/addToCart_img.png", old_price: "N6,000", new_price: "N4,000", id: 2 },
    { productName: "CERAVE", product_url: "/images/destseller4", cartUrl: "/images/addToCart_img.png", old_price: "N6,000", new_price: "N4,000", id: 3 }
  ];
  const [bests] = useState(best);
  // console.log(bests)
  const explore_more = [
    { productName: "OLIVE NATURE", product_urle: "images/img1.png", price: "N22,000", type: "Oil", id: 0 },
    { productName: "OLIVE NATURE", product_urle: "images/img1.png", price: "N22,000", type: "Oil", id: 1 },
    { productName: "OLIVE NATURE", product_urle: "images/img3.png", price: "N22,000", type: "Oil", id: 2 },
    { productName: "OLIVE NATURE", product_urle: "images/img4.png", price: "N22,000", type: "Oil", id: 3 },
    { productName: "OLIVE NATURE", product_urle: "images/img5.png", price: "N22,000", type: "Oil", id: 4 },
    { productName: "OLIVE NATURE", product_urle: "images/img6.png", price: "N22,000", type: "Oil", id: 5 },
    { productName: "OLIVE NATURE", product_urle: "images/img7.png", price: "N22,000", type: "Oil", id: 6 },
    { productName: "OLIVE NATURE", product_urle: "images/img8.png", price: "N22,000", type: "Oil", id: 7 }

  ]
  const [explore] = useState(explore_more)
  const [produtUlr, setProductUrl] = useState(null)
  const [produtName, setProductName] = useState(null)

  function handleOrder(grab_order) {
    console.log("clicked")
    const newEx = explore.filter((i_, ex) => ex === grab_order) ||
      bests.filter((i_, best) => best === grab_order) ||
      arrivalProduct.filter((i_, ar) => ar === grab_order)

    setArrivalProduct
    // console.log(newEx)
    const [{ productName, product_urle }] = newEx

    setProductName(productName)
    setProductUrl(product_urle)
    localStorage.setItem("product", JSON.stringify(newEx))
  }
  const context = {
    best, handleOrder
  }
  return (
    <>
      <bestContext.Provider value={context}>
        <Suspense fallback={<div>  Loading...</div>}>
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
            <Route path="/CartPage" element={<CartPage produtNam={produtName} best={bests} handleOrder={(e) => handleOrder(e)} produtUlr={produtUlr} />} />
            <Route path="/FaceCleansers" element={<FaceCleansers />} />
          </Routes>
          <Footer />

        </Suspense>
      </bestContext.Provider>

    </>
  )
}

export default App
