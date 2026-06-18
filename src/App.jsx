import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs' 
import Contact from './pages/Contact'
import Management from './pages/Management'
// 🆕 শুধুমাত্র ১ম পেজটি ইমপোর্ট থাকবে
import BoardDirectors1 from './pages/BoardDirectors1'
import TeamLeaders from './pages/TeamLeaders'

function App() {
  return (
    // 🎯 নিচে basename যুক্ত করা হয়েছে যাতে GitHub Pages-এ ব্ল্যাঙ্ক স্ক্রিন না আসে
    <BrowserRouter basename="/Six-Season-Group-Project">
      <div className="flex flex-col min-h-screen bg-[#E7FBF3]">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/management" element={<Management />} /> 
            
            {/* 🎯 বাটনে ক্লিক করলে এই পাথে চলে আসবে */}
            <Route path="/board-of-directors" element={<BoardDirectors1 />} />
            <Route path="/team-leaders" element={<TeamLeaders />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App