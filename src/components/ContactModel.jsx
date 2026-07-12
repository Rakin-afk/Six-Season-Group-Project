import React from 'react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      
      {/* মেইন মোডাল কন্টেইনার */}
      <div className="relative bg-[#0cd416] text-white rounded-[24px] max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl p-6 md:p-10 gap-8 items-center">
        
        {/* ক্লোজ (X) বাটন */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl font-bold transition-transform hover:scale-110"
        >
          ✕
        </button>

        {/* বাম পাশ: ফর্ম ইনপুট সেকশন */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            If You Have Questions <br /> Please, Contact Us
          </h2>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input 
                type="text" 
                placeholder="First name" 
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm md:text-base"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Last name" 
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm md:text-base"
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Your phone number" 
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm md:text-base"
              />
            </div>
            <button 
              type="submit" 
              className="px-6 py-2.5 bg-white text-green-600 font-bold rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors shadow-md"
            >
              Get Consult
            </button>
          </form>
        </div>

        {/* ডান পাশ: ইনফরমেশন ও সোশ্যাল লিংক */}
        <div className="space-y-4 text-left border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" 
              alt="Representative" 
              className="w-16 h-16 rounded-full object-cover border-2 border-white/50"
            />
            <h3 className="text-xl font-bold leading-tight">
              Choose Your <br /> Global Partner
            </h3>
          </div>
          
          <p className="text-sm text-white/80 leading-relaxed">
            Using accurate data and clear communication in the manufacturing process ensures high-quality knitwear items with exact customizations and specifications tailored for your brand.
          </p>

          {/* সোশ্যাল আইকনসমূহ */}
          <div className="flex items-center gap-3 pt-2">
            {['🔵', '🐦', '🔗', '📸', '▶️'].map((icon, idx) => (
              <a    
                key={idx} 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}