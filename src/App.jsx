import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Shop1 from './Pages/Shop1';
import Shop2 from './Pages/Shop2';

import Contact from './Pages/Contact';






import './App.css'


function App() {


  return (
    <>
      <div>
       <BrowserRouter>
      <Navbar/>
      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
           <Route path="/shop1" element={<Shop1 />} />
          <Route path="/shop2" element={<Shop2 />} />
    
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </div>
      <Footer />
       </BrowserRouter>
      </div>
    </>
  )
}

export default App
