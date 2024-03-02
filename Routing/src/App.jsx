import { BrowserRouter  , Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Notfound from "./Components/Notfound";


import './App.css'

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}   />
        <Route path="/about" element={<About/>}   />
        <Route path="/contact" element={<Contact/>}   />
        <Route path="*" element= {<Notfound/>} />
        

      </Routes>      
      </BrowserRouter>
    </div>
  )
}
export default App