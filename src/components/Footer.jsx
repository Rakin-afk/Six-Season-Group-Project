import React from 'react'
import { Link, useLocation } from 'react-router-dom' // <-- useLocation যোগ করা হয়েছে

export default function Footer() {
  const location = useLocation(); // <-- কারেন্ট URL ট্র্যাক করার জন্য হুক

  // যদি URL-এ director board বা team leader এর পাথ থাকে, তাহলে ফুটার কিছুই দেখাবে না (return null)
  if (location.pathname.includes('board') || location.pathname.includes('leader')) {
    return null;
  }

  return (
    <footer className="w-full bg-[#012406] pt-16 pb-8 text-white">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Six Season Group</h3>
          <p className="text-sm text-white/70 mt-6 leading-relaxed max-w-sm">
            Creating exceptional garments with attention to detail and sustainable practices since 2014. Our commitment to quality defines every piece we produce.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3 text-white/80">
              <span className="mt-1">📞</span>
              <span>+8801958486943</span>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <span className="mt-1">✉️</span>
              <span>info@sixseasongroup.com</span>
            </div>
            <div className="flex items-start gap-3 text-white/80 leading-relaxed">
              <span className="mt-1">📍</span>
              <span>House #6, Main Road, Rajbari, Kamarpara, Turaga, Dhaka – 1230, Bangladesh.</span>
            </div>
          </div>
        </div>

        {/* Popular Pages */}
        <div>
          <h5 className="text-lg font-semibold text-white tracking-wide border-b border-white/20 pb-2 mb-4 max-w-[100px]">
            Popular Pages
          </h5>
          <div className="space-y-3 text-sm text-white/70">
            <Link to="/career" className="block hover:text-emerald-400 transition-colors duration-200">Career</Link>
            <Link to="/about" className="block hover:text-emerald-400 transition-colors duration-200">About Us</Link>
            <Link to="/management" className="block hover:text-emerald-400 transition-colors duration-200">Management</Link>
            <Link to="/contact" className="block hover:text-emerald-400 transition-colors duration-200">Contact Us</Link>
            <Link to="/privacy-policy" className="block hover:text-emerald-400 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="block hover:text-emerald-400 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>

        {/* Sister Concern */}
        <div>
          <h5 className="text-lg font-semibold text-white tracking-wide border-b border-white/20 pb-2 mb-4 max-w-[120px]">
            Sister Concern
          </h5>
          <div className="space-y-3 text-sm text-white/70">
            <Link to="/sister-concern" className="block hover:text-emerald-400 transition-colors duration-200">Six Season Agro Traders</Link>
            <Link to="/sister-concern" className="block hover:text-emerald-400 transition-colors duration-200">Six Season Global Business LTD</Link>
            <Link to="/sister-concern" className="block hover:text-emerald-400 transition-colors duration-200">Six Season USA LLC</Link>
            <Link to="/sister-concern" className="block hover:text-emerald-400 transition-colors duration-200">Marss Outwear Creation</Link>
            <Link to="/sister-concern" className="block hover:text-emerald-400 transition-colors duration-200">Delivery 24</Link>
            <Link to="/sister-concern" className="block hover:text-emerald-400 transition-colors duration-200">AMRISS</Link>
          </div>
        </div>

        {/* More Info */}
        <div>
          <h5 className="text-lg font-semibold text-white tracking-wide border-b border-white/20 pb-2 mb-4 max-w-[80px]">
            More Info
          </h5>
          <div className="space-y-3 text-sm text-white/70">
            <Link to="/faqs" className="block hover:text-emerald-400 transition-colors duration-200">FAQs</Link>
            <Link to="/contact" className="block hover:text-emerald-400 transition-colors duration-200">Contact Us</Link>
            <Link to="/terms" className="block hover:text-emerald-400 transition-colors duration-200">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="block hover:text-emerald-400 transition-colors duration-200">Privacy Policy</Link>
            <Link to="#" className="block hover:text-emerald-400 transition-colors duration-200">Patient Portal</Link>
            <Link to="#" className="block hover:text-emerald-400 transition-colors duration-200">Billing Support</Link>
          </div>
        </div>
      </div>

      {/* Copyright & Socials */}
      <div className="w-full border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8">
        <p className="text-sm text-white/60">© 2026 Six Season Group. All rights reserved.</p>
        <div className="flex items-center gap-6 text-white/70 text-lg">
          <a href="#" className="hover:text-white transition-colors cursor-pointer">🔵</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">🐦</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">🔗</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">📸</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">▶️</a>
        </div>
      </div>
    </footer>
  )
}