import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Management() {
  const location = useLocation()

  // কারেন্ট পাথ অনুযায়ী কোন ট্যাব অ্যাক্টিভ থাকবে তা চেনার ফাংশন
  const isActive = (path) => location.pathname === path

  return (
    <div className="w-full min-h-screen bg-[#BEF4B8] pt-28 pb-12 relative z-10">
      
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6">
        {/* মেইন হোয়াইট কার্ড কন্টেইনার */}
        <div className="w-full bg-white rounded-[32px] shadow-sm border border-gray-100 pt-12 pb-16 px-6 md:px-12 text-center">
          
          {/* স্মল ব্যাজ */}
          <div className="inline-block bg-[#023011] text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
            Leadership Team
          </div>

          {/* মেইন টাইটেল */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Meet Our Leaders
          </h1> 

          {/* সাবটাইটেল ডেসক্রিপশন */}
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Visionary leaders guiding Six Season Group with decades of experience,
            diverse perspectives, and a shared commitment to innovation and excellence.
          </p>

          {/* লিংক বাটন গ্রুপ (Navigation Tabs) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            
            {/* Link 1: CEO & Chairman */}
            <Link
              to="/management"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
                isActive('/management')
                  ? 'bg-gradient-to-r from-[#108035] to-[#0d5c26] text-white shadow-md scale-105'
                  : 'bg-[#0f3616] text-white/90 hover:bg-[#154d20]'
              }`}
            >
              <span className="text-lg">👑</span>
              <span>CEO & CHAIRMAN</span>
            </Link>

            {/* Link 2: Board of Directors */}
            <Link
              to="/board-of-directors"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
                isActive('/board-of-directors')
                  ? 'bg-gradient-to-r from-[#108035] to-[#0d5c26] text-white shadow-md scale-105'
                  : 'bg-[#0f3616] text-white/90 hover:bg-[#154d20]'
              }`}
            >
              <span className="text-lg">👥</span>
              <span>BOARD OF DIRECTORS</span>
            </Link>

            {/* Link 3: Team Leaders */}
            <Link
              to="/team-leaders"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
                isActive('/team-leaders')
                  ? 'bg-gradient-to-r from-[#108035] to-[#0d5c26] text-white shadow-md scale-105'
                  : 'bg-[#0f3616] text-white/90 hover:bg-[#154d20]'
              }`}
            >
              <span className="text-lg">⭐</span>
              <span>TEAM LEADERS</span>
            </Link>

          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-16">
        {/* সেকশন হেডার */}
        <div className="w-full text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-wide">
            Executive Leadership
          </h2>
          <div className="w-full h-[1px] bg-gray-300/60 mt-4"></div>
        </div>

        {/* মেইন ২-কলাম লেআউট গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-8">
          
          {/* 📸 বাম দিকের ইমেজ হোল্ডার */}
          <div className="md:col-span-4 lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[320px] aspect-[3/4] rounded-[24px] overflow-hidden bg-white/80 border border-gray-200/50 shadow-md flex items-center justify-center relative group">
              <img 
                src="https://via.placeholder.com/400x533"
                alt="Leader Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center pointer-events-none">
                <span className="text-xs text-gray-400 font-medium bg-white/80 px-3 py-1 rounded-full shadow-sm">Image Holder</span>
              </div>
            </div>
          </div>

          {/* 📝 ডান দিকের লাইট-গ্রিন টেক্সট কন্টেইনার */}
          <div className="md:col-span-8 lg:col-span-8 bg-[#E6FCEF] border border-[#108035]/10 rounded-[32px] p-6 md:p-10 shadow-sm flex flex-col justify-between min-h-[420px]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mb-2">
                Md Robiul Islam
              </h3>
              
              <div className="flex items-center gap-2 text-[#108035] font-semibold text-base mb-6">
                <span>👑</span>
                <span>Chairman of the Board</span>
              </div>

              <div className="border-l-2 border-gray-400 pl-4 my-6 italic text-sm text-gray-700">
                "“True clarity is about simplifying complexity, not adding to it”"
              </div>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-normal mb-8">
                With over two decades of experience in corporate governance, Rabiul provides strategic oversight and ensures the company’s long-term sustainability and market leadership
              </p>
            </div>

            <div className="pt-4 border-t border-gray-300/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-800 mb-6">
                <div className="flex">
                  <span className="font-bold w-32 shrink-0">Focus:</span>
                  <span className="text-gray-700"> Corporate governance & risk management</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-32 shrink-0">Experience:</span>
                  <span className="text-gray-700">20+ years in corporate governance</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-32 shrink-0">Lead company:</span>
                  <span className="text-gray-700">11+</span>
                </div>
              </div>

              <div className="flex items-center gap-5 text-gray-600 text-lg">
                <a href="#" className="hover:text-[#108035] transition-colors cursor-pointer">🔗</a>
                <a href="#" className="hover:text-[#108035] transition-colors cursor-pointer">🐦</a>
                <a href="#" className="hover:text-[#108035] transition-colors cursor-pointer">✉️</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-16">
        {/* সেকশন হেডার */}
        <div className="w-full text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-wide">
            Executive Leadership
          </h2>
          <div className="w-full h-[1px] bg-gray-300/60 mt-4"></div>
        </div>

        {/* মেইন ২-কলাম লেআউট গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-8">
          
          {/* 📸 বাম দিকের ইমেজ হোল্ডার */}
          <div className="md:col-span-4 lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[320px] aspect-[3/4] rounded-[24px] overflow-hidden bg-white/80 border border-gray-200/50 shadow-md flex items-center justify-center relative group">
              <img 
                src="https://via.placeholder.com/400x533"
                alt="Leader Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center pointer-events-none">
                <span className="text-xs text-gray-400 font-medium bg-white/80 px-3 py-1 rounded-full shadow-sm">Image Holder</span>
              </div>
            </div>
          </div>

          {/* 📝 ডান দিকের লাইট-গ্রিন টেক্সট কন্টেইনার */}
          <div className="md:col-span-8 lg:col-span-8 bg-[#E6FCEF] border border-[#108035]/10 rounded-[32px] p-6 md:p-10 shadow-sm flex flex-col justify-between min-h-[420px]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mb-2">
                Al-Amin Hossain
              </h3>
              
              <div className="flex items-center gap-2 text-[#108035] font-semibold text-base mb-6">
                <span>👑</span>
                <span>Founder & Chief Executive Officer</span>
              </div>

              <div className="border-l-2 border-gray-400 pl-4 my-6 italic text-sm text-gray-700">
                "Innovation happens at the intersection of empathy and technology"
              </div>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-normal mb-8">
                Under his leadership, Six Season Group has grown from a modest startup to a global industry leader. Al-Amin visionary approach combines technical expertise with deep market understanding. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-300/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-800 mb-6">
                <div className="flex">
                  <span className="font-bold w-32 shrink-0">Focus:</span>
                  <span className="text-gray-700">Strategic vision & global expansion</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-32 shrink-0">Experience:</span>
                  <span className="text-gray-700">15+ years in textile manufacturing</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-32 shrink-0">Lead company:</span>
                  <span className="text-gray-700">11+</span>
                </div>
              </div>

              <div className="flex items-center gap-5 text-gray-600 text-lg">
                <a href="#" className="hover:text-[#108035] transition-colors cursor-pointer">🔗</a>
                <a href="#" className="hover:text-[#108035] transition-colors cursor-pointer">🐦</a>
                <a href="#" className="hover:text-[#108035] transition-colors cursor-pointer">✉️</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: OUR FOUNDING STORY */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-20 mb-16">
        <div className="w-full text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-wide drop-shadow-sm">
            Our Founding Story
          </h2>
          <div className="w-full h-[1px] bg-black/20 mt-6 max-w-4xl mx-auto"></div>
        </div>

        <div className="w-full bg-[#E2E4E5] rounded-[32px] shadow-md border border-white/40 p-8 md:p-14 text-center flex flex-col items-center justify-center gap-8">
          <p className="text-base md:text-xl font-medium text-gray-900 leading-relaxed max-w-4xl">
            Six Season Group is a leading garments manufacturer and exporter based in Bangladesh, 
            specializing exclusively in all kinds of knitwear.
          </p>

          <div className="w-full max-w-3xl bg-[#E6FCEF]/80 border border-[#108035]/20 rounded-[28px] py-8 px-6 md:px-10 shadow-inner flex flex-col gap-4">
            <p className="text-base md:text-xl font-semibold text-gray-800 leading-relaxed italic">
              "We started with just five people in a small garage office, fueled by coffee and a brief 
              that technology should adapt to humans, not the other way around"
            </p>
            <span className="text-[#108035] font-bold text-base md:text-lg tracking-wide mt-2">
              -Al Amin Hossain, Founder & CEO
            </span>
          </div>

          <p className="text-xs md:text-sm font-semibold text-gray-700 max-w-3xl leading-relaxed tracking-normal">
            As a proud member of Bangladesh Knitwear Manufacturing and Exporters Association, 
            we maintain full compliance with international export regulations and quality benchmarks.
          </p>
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP MESSAGE / VIDEO HOLDER */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-20 mb-16">
        <div className="w-full text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-wide">
            Leadership Message
          </h2>
          <div className="w-full h-[1px] bg-gray-300/60 mt-6 max-w-4xl mx-auto"></div>
        </div>

        <div className="w-full max-w-4xl mx-auto aspect-video rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0f401b] to-[#1e5a2e] shadow-xl border border-white/20 p-6 flex flex-col items-center justify-center relative group">
          <div className="flex flex-col items-center justify-center text-center z-0 p-4 max-w-xl transition-all duration-300 group-hover:scale-95">
            <button 
              type="button"
              className="w-16 h-16 md:w-20 md:h-20 bg-white text-[#108035] rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer mb-6"
              aria-label="Play video"
            >
              ▶
            </button>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
              Message from Our CEO
            </h3>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed font-medium">
              Click to watch Al-Amin Hossain discuss our vision. 
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: LEADERSHIP JOURNEY / TIMELINE */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-20 mb-16">
        <div className="w-full text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-wide">
            Leadership Journey
          </h2>
          <div className="w-full h-[1px] bg-gray-300/60 mt-6 max-w-4xl mx-auto"></div>
        </div>

        <div className="w-full bg-[#E5FFE8] border border-[#108035]/10 rounded-[32px] p-6 md:p-16 shadow-sm relative overflow-hidden">
          
          {/* DESKTOP VIEW TIMELINE */}
          <div className="hidden md:block relative w-full h-[550px]">
            <div className="absolute top-[52px] left-[25%] right-[25%] h-[3px] bg-[#108035]/60 z-0"></div>
            <div className="absolute top-[52px] right-[25%] h-[180px] w-[3px] bg-[#108035]/60 z-0"></div>
            <div className="absolute top-[232px] left-[35%] right-[25%] h-[3px] bg-[#108035]/60 z-0"></div>
            <div className="absolute top-[232px] left-[35%] h-[180px] w-[3px] bg-[#108035]/60 z-0"></div>
            <div className="absolute top-[412px] left-[35%] right-[50%] h-[3px] bg-[#108035]/60 z-0"></div>

            <div className="absolute top-0 left-[12%] w-[26%] text-center flex flex-col items-center z-10">
              <span className="text-xl font-bold text-gray-800 mb-1">2014</span>
              <div className="w-9 h-9 rounded-full bg-white border-[3px] border-[#108035] flex items-center justify-center shadow-md mb-2">
                <span className="text-xs">🏢</span>
              </div>
              <h4 className="font-bold text-gray-950 text-sm mb-1 bg-[#E5FFE8] px-2">Company Founded</h4>
              <p className="text-xs text-gray-600 leading-relaxed bg-[#E5FFE8] px-2 rounded">
                Six Season Group was founded with a vision to simplify timeless style for the modern individual.
              </p>
            </div>

            <div className="absolute top-0 left-[62%] w-[26%] text-center flex flex-col items-center z-10">
              <span className="text-xl font-bold text-gray-800 mb-1">2017</span>
              <div className="w-9 h-9 rounded-full bg-white border-[3px] border-[#108035] flex items-center justify-center shadow-md mb-2">
                <span className="text-xs">🌍</span>
              </div>
              <h4 className="font-bold text-gray-950 text-sm mb-1 bg-[#E5FFE8] px-2">Global Expansion</h4>
              <p className="text-xs text-gray-600 leading-relaxed bg-[#E5FFE8] px-2 rounded">
                Established Six Season Global Business LTD to formalize export operations.
              </p>
            </div>

            <div className="absolute top-[180px] left-[20%] w-[30%] text-center flex flex-col items-center z-10">
              <span className="text-xl font-bold text-gray-800 mb-1">2019</span>
              <div className="w-9 h-9 rounded-full bg-white border-[3px] border-[#108035] flex items-center justify-center shadow-md mb-2">
                <span className="text-xs">📊</span>
              </div>
              <h4 className="font-bold text-gray-950 text-sm mb-1 bg-[#E5FFE8] px-2">International Growth</h4>
              <p className="text-xs text-gray-600 leading-relaxed bg-[#E5FFE8] px-2 rounded">
                Opened Six Season USA LLC and launched Delivery 24 logistics division.
              </p>
            </div>

            <div className="absolute top-[360px] left-[35%] w-[30%] text-center flex flex-col items-center z-10">
              <span className="text-xl font-bold text-gray-800 mb-1">2023</span>
              <div className="w-9 h-9 rounded-full bg-white border-[3px] border-[#108035] flex items-center justify-center shadow-md mb-2">
                <span className="text-xs">🚀</span>
              </div>
              <h4 className="font-bold text-gray-950 text-sm mb-1 bg-[#E5FFE8] px-2">Launch AMRISS</h4>
              <p className="text-xs text-gray-600 leading-relaxed bg-[#E5FFE8] px-2 rounded">
                Introduced AMRISS, our fashion-forward brand representing commitment at design innovation.
              </p>
            </div>
          </div>

          {/* MOBILE VIEW TIMELINE */}
          <div className="block md:hidden relative pl-8 border-l-2 border-gray-400/80 mx-2 flex flex-col gap-10">
            <div className="relative">
              <div className="absolute -left-[43px] top-0 w-6 h-6 rounded-full bg-white border-2 border-[#108035] flex items-center justify-center text-[10px] shadow-sm">🏢</div>
              <span className="text-lg font-bold text-gray-800 block">2014</span>
              <h4 className="font-bold text-gray-950 text-sm mt-1">Company Founded</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Six Season Group was founded with a vision to simplify timeless style for the modern individual.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[43px] top-0 w-6 h-6 rounded-full bg-white border-2 border-[#108035] flex items-center justify-center text-[10px] shadow-sm">🌍</div>
              <span className="text-lg font-bold text-gray-800 block">2017</span>
              <h4 className="font-bold text-gray-950 text-sm mt-1">Global Expansion</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Established Six Season Global Business LTD to formalize export operations.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[43px] top-0 w-6 h-6 rounded-full bg-white border-2 border-[#108035] flex items-center justify-center text-[10px] shadow-sm">📊</div>
              <span className="text-lg font-bold text-gray-800 block">2019</span>
              <h4 className="font-bold text-gray-950 text-sm mt-1">International Growth</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Opened Six Season USA LLC and launched Delivery 24 logistics division.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[43px] top-0 w-6 h-6 rounded-full bg-white border-2 border-[#108035] flex items-center justify-center text-[10px] shadow-sm">🚀</div>
              <span className="text-lg font-bold text-gray-800 block">2023</span>
              <h4 className="font-bold text-gray-950 text-sm mt-1">Launch AMRISS</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Introduced AMRISS, our fashion-forward brand representing commitment at design innovation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: LEADERSHIP VALUES CARD GRID */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-20 mb-16">
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-wide drop-shadow-sm">
            Leadership Values
          </h2>
          <div className="w-full h-[1px] bg-black/30 mt-6 max-w-4xl mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CARD 1: Innovation */}
          <div className="bg-[#E5FFE8] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 flex items-center justify-center text-4xl mb-4 bg-white rounded-full shadow-sm">💡</div>
            <h3 className="text-2xl font-bold text-gray-950 mb-3 tracking-wide">Innovation</h3>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              We embrace change and continuously seek new ways to solve problems and create value. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* CARD 2: Integrity */}
          <div className="bg-[#E5FFE8] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 flex items-center justify-center text-4xl mb-4 bg-white rounded-full shadow-sm">⚙️</div>
            <h3 className="text-2xl font-bold text-gray-950 mb-3 tracking-wide">Integrity</h3>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              We lead with honesty and transparency, building trust through ethical decision making. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* CARD 3: Collaboration */}
          <div className="bg-[#E5FFE8] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 flex items-center justify-center text-4xl mb-4 bg-white rounded-full shadow-sm">🤝</div>
            <h3 className="text-2xl font-bold text-gray-950 mb-3 tracking-wide">Collaboration</h3>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              We believe diverse perspectives strengthen outcomes and foster inclusive environments. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* CARD 4: Excellence */}
          <div className="bg-[#E5FFE8] rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 flex items-center justify-center text-4xl mb-4 bg-white rounded-full shadow-sm">🏆</div>
            <h3 className="text-2xl font-bold text-gray-950 mb-3 tracking-wide">Excellence</h3>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              We pursue the highest standards in everything we do, constantly learning and improving. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Management