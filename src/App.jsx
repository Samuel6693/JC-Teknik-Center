import './App.css'
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Reviews from "./pages/Reviews"
import Admin from "./pages/Admin"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="om-oss" element={<About />} />
        <Route path="tjanster" element={<Services />} />
        <Route path="webbshop" element={<Shop />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="recensioner" element={<Reviews />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  )
}

export default App
