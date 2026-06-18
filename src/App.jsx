import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop' 
import ScrollToTopButton from './components/ScrollToTopButton' 
import Home from './pages/Home'
import AboutUs from './pages/AboutUs' 
import Contact from './pages/Contact'
import Management from './pages/Management'
import BoardDirectors1 from './pages/BoardDirectors1'
import TeamLeaders from './pages/TeamLeaders'

function App() {
  return (
    <BrowserRouter basename="/Six-Season-Group-Project">
      {/* 🎯 ২. এখানে ScrollToTop বসিয়ে দিন, তাহলে সব পেজের জন্য একবারে কাজ করবে */}
      <ScrollToTop /> 

      <div className="flex flex-col min-h-screen bg-[#E7FBF3]">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/management" element={<Management />} /> 
            <Route path="/board-of-directors" element={<BoardDirectors1 />} />
            <Route path="/team-leaders" element={<TeamLeaders />} />
          </Routes>
        </main>
        
        <Footer />
        <ScrollToTopButton /> {/* স্ক্রল টু টপ বাটন সব পেজে থাকবে */}
      </div>
    </BrowserRouter>
  )
}

export default App