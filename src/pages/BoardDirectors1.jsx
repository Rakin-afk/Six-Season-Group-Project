import React from 'react';

const BoardDirectors1 = () => {
  return (
    // মেইন কন্টেইনার (সম্পূর্ণ পেজের ব্যাকগ্রাউন্ড)
    <div className="w-full min-h-screen bg-gradient-to-br from-[#84eea2] via-[#02290c] to-[#06250e] pt-36 pb-24 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            SECTION 1: UPPER MAIN HEADER & 3 DIRECTORS (image_ff50b8.png)
           ========================================================================= */}
        <div className="w-full text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-md">
            Board of Directors
          </h1>
          
          {/* টাইটেলের নিচের চিকন ডিভাইডার লাইন */}
          <div className="w-full h-[1px] bg-white/20 mx-auto mt-6 mb-8"></div>
          
          {/* Upper Middle Lorem Text */}
          <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
            A Board of Directors is an elected group of individuals who jointly oversee the activities and strategic direction of a company or organization. They are responsible for making high-level decisions, protecting shareholder interests, and ensuring the company meets its legal and financial goals.
          </p>
        </div>

        {/* 3 Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto mb-24">
          
          {/* MEMBER CARD 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                RAKIBUL ISLAM
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                Director of Technology
              </div>
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
Manages CAD systems, automation machinery, and digital transformation across all production facilities.              </p>
            </div>
          </div>

          {/* MEMBER CARD 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                SOLAYMAN HOSSAIN
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                Director of Production
              </div>
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
Oversees manufacturing operations, quality control, and supply chain management.              </p>
            </div>
          </div>

          {/* MEMBER CARD 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                MONZIL HOSSAIN
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                Director of Marketing
              </div>
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
Directs brand strategy, market research, and drives fashion trends globally.  </p>
            </div>
          </div>

        </div>

        {/* ─── সেকশন ডিভাইডার লাইন ─── */}
        <div className="max-w-6xl mx-auto h-[1px] bg-white/10 my-16"></div>

        {/* =========================================================================
            🆕 SECTION 2: LOWER 2 DIRECTORS (image_fdebc2.png)
           ========================================================================= */}
        {/* এখানে পাশাপাশি ২টি বড় ইমেজ কার্ড সুন্দরভাবে সেন্টারে পজিশন করার জন্য grid-cols-1 md:grid-cols-2 ব্যবহার করা হয়েছে */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-4xl mx-auto">
          
          {/* LOWER MEMBER CARD 1 (SAIFUL ISLAM) */}
          <div className="flex flex-col items-center text-center group">
            {/* বড় ইমেজ হোল্ডার */}
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            
            {/* মেম্বার ইনফো ও নিচের ডেসক্রিপশন */}
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                SAIFUL ISLAM
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                Director of Finance
              </div>
              {/* স্ক্রিনশট অনুযায়ী নিচের টেক্সট */}
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
Controls financial planning, budgeting, and strategic investment decisions.              </p>
            </div>
          </div>

          {/* LOWER MEMBER CARD 2 (ELIZA ADITI) */}
          <div className="flex flex-col items-center text-center group">
            {/* বড় ইমেজ হোল্ডার */}
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            
            {/* মেম্বার ইনফো ও নিচের ডেসক্রিপশন */}
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                ELIZA ADITI
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                Head of People & Culture
              </div>
              {/* স্ক্রিনশট অনুযায়ী নিচের টেক্সট */}
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
Leads talent acquisition, employee development, and organizational culture initiatives.              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BoardDirectors1;