import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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

// 🛠️ একটি ছোট ইন্টারনাল কম্পোনেন্ট যা প্রতিবার পেজ চেঞ্জ হলে স্ক্রোল রিভিল অ্যানিমেশন চালু করবে
function GlobalScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // এটি আপনার পেজের ভেতরের সমস্ত মেইন সেকশন বা বড় কন্টেইনারগুলোকে সিলেক্ট করবে
      const allSections = document.querySelectorAll('main section, main > div, main > div > section');
      
      if (allSections.length > 0) {
        allSections.forEach((section, index) => {
          // 🛑 শর্ত: প্রথম সেকশনটি (হিরো সেকশন, index 0) বাদ থাকবে। 
          // শুধু তার নিচের বাকি সব সেকশনে অটোমেটিক ক্লাস বসবে।
          if (index > 0) {
            section.classList.add('auto-scroll-reveal');
          }
        });
      }

      // Intersection Observer সেটআপ (স্ক্রোল ট্র্যাক করার জন্য)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target); // একবার অ্যানিমেশন হয়ে গেলে ট্র্যাক করা বন্ধ করবে
            }
          });
        },
        { 
          root: null,
          threshold: 0.05, // সেকশনটি স্ক্রিনের মাত্র ৫% ভেতরে ঢুকলেই অ্যানিমেশন স্টার্ট হবে
          rootMargin: "0px 0px -40px 0px" // নিচে সামান্য মার্জিন যেন স্ক্রোলের ফিল প্রিমিয়াম আসে
        }
      );

      const revealable = document.querySelectorAll('.auto-scroll-reveal');
      revealable.forEach((sec) => observer.observe(sec));
    }, 200); // পেজ কম্পোনেন্ট লোড হওয়ার জন্য ২০০ মিলি-сеকেন্ড বাফার টাইম

    return () => clearTimeout(timer);
  }, [location.pathname]); // প্রতিবার পেজ রুট পরিবর্তন হলে এটি আবার রান করবে

  return null; // এটি ব্যাকগ্রাউন্ডে কাজ করবে, স্ক্রিনে কিছু রেন্ডার করবে না
}

function App() {
  return (
    <BrowserRouter basename="/Six-Season-Group-Project">
      <ScrollToTop /> 
      
      {/* 🚀 এখানে অটো-স্ক্রোল রিভিল স্ক্রিপ্টটি যুক্ত করা হলো যা পুরো প্রজেক্টে একবারে কাজ করবে */}
      <GlobalScrollReveal />

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
        <ScrollToTopButton /> 
      </div>
    </BrowserRouter>
  )
}

export default App