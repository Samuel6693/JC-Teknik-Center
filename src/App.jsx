import './App.css'
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Reviews from "./pages/Reviews"
import Admin from "./pages/Admin"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"

function App() {
  const [cartItems, setCartItems] = useState([])

  function handleAddToCart(product) {
    setCartItems((currentItems) => {
      const productExists = currentItems.some((item) => item.id === product.id)

      if (productExists) {
        return currentItems
      }

      return [...currentItems, product]
    })
  }

  function handleRemoveFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    )
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="om-oss" element={<About />} />
        <Route path="tjanster" element={<Services />} />
        <Route path="webbshop" element={<Shop />} />
        <Route path="webbshop/:productId" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        <Route
          path="kundvagn"
          element={
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
            />}
        />
        <Route path="kontakt" element={<Contact />} />
        <Route path="recensioner" element={<Reviews />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  )
}

export default App
