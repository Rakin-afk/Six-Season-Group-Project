import React from 'react';

const TeamLeaders = () => {
  return (
    // 🎨 ব্যাকগ্রাউন্ড কালার কন্ট্রাস্ট এবং প্যাডিং নিখুঁত করা হলো
    <div className="w-full min-h-screen bg-gradient-to-br from-[#84eea2] via-[#02290c] to-[#06250e] pt-36 pb-24 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER SECTION
           ========================================================================= */}
        <div className="w-full text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-md">
            Our Team Leaders
          </h1>
          
          {/* টাইটেলের নিচের চিকন ডিভাইডার লাইন */}
          <div className="w-full h-[1px] bg-white/20 mx-auto mt-6 mb-8"></div>
          
          {/* সাবটাইটেল বা ডেসক্রিপশন টেক্সট */}
          <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
            Meet the driving force behind our operations. Our team leaders combine expertise, 
            passion, and strategic execution to deliver excellence across every department.
          </p>
        </div>

        {/* =========================================================================
            TEAM LEADERS GRID SECTION (3 Columns Layout)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          
          {/* LEADER CARD 1 (NIAZ MORSHED) */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                NIAZ MORSHED
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                IT Department Lead
              </div>
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
                Oversees IT infrastructure and digital transformation initiatives across the organization.
              </p>
            </div>
          </div>

          {/* LEADER CARD 2 (MAISHA JAMAN MRIDULA) */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                MAISHA JAMAN MRIDULA
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                Design & Innovation Lead
              </div>
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
                Leads creative design team bringing innovative fashion concepts to life.
              </p>
            </div>
          </div>

          {/* LEADER CARD 3 (SIMCHI REMA) */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                SIMCHI REMA
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                Accounts & Finance Lead
              </div>
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
                Manages financial operations and reporting with garment industry expertise.
              </p>
            </div>
          </div>

        </div>

        {/* ─── সেকশন ডিভাইডার লাইন ─── */}
        <div className="max-w-6xl mx-auto h-[1px] bg-white/10 my-16"></div>

        {/* =========================================================================
            SECTION 2: LOWER 2 TEAM LEADERS
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-4xl mx-auto">
          
          {/* LOWER MEMBER CARD 1 (SONJOY TONY) */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            
            {/* 🛠️ এখানে কার্ডের মেইন কন্টেইনারের ক্লোজিং ট্যাগ ফিক্সড করা হয়েছে */}
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                SONJOY TONY
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                Marketing & Sales Lead
              </div>
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
                Leads marketing strategies and brand development for global market expansion.
              </p>
            </div>
          </div>

          {/* LOWER MEMBER CARD 2 (RANA AHMED) */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full aspect-[4/5] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[40px] border border-white/30 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-[1.02] flex items-center justify-center relative">
              <div className="text-white/40 text-sm font-medium tracking-wider">Image Holder (4:5)</div>
            </div>
            
            {/* 🛠️ এখানে প্যারাগ্রাফের ক্লোজিং </p> ট্যাগ দিয়ে এরর ফিক্সড করা হয়েছে */}
            <div className="mt-6 max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                RANA AHMED
              </h3>
              <div className="inline-block bg-white/15 text-white/90 text-xs px-5 py-1.5 rounded-full font-medium mt-2 backdrop-blur-sm border border-white/10">
                Export Team Lead
              </div>
              <p className="text-xs md:text-sm text-white/70 mt-4 leading-relaxed">
                Leads marketing strategies and brand development for global market expansion.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TeamLeaders;