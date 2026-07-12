import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Sister Concern', to: '/sister-concern' },
  { label: 'Management', to: '/management' },
  { label: 'Blog', to: '/blog' },
  { label: 'Career', to: '/career' },
]

const SISTER_CONCERN_OPTIONS = [
  { label: 'Six Season Agro Traders', href: '#' },
  { label: 'Six Season Global Business LTD', href: '#' },
  { label: 'Marss Outwear Creation', href: '#' },
  { label: 'Six Season USA LLC', href: '#' },
  { label: 'Delivery 24', href: '#' },
  { label: 'AMRISS', href: '#' },
]

function navLinkClassName({ isActive }) {
  return [
    'text-sm font-semibold transition-colors duration-200',
    isActive ? 'text-[#108035] font-bold' : 'text-gray-800 hover:text-[#108035]',
  ].join(' ')
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) // 🎯 মোডাল ওপেন/ক্লোজ স্টেট

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#E5FFE8] shadow-sm">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center"
            aria-label="Go to homepage"
          >
            <div
              className="h-12 w-36 rounded border border-[#108035]/20 bg-white/40 sm:h-14 sm:w-44"
              aria-label="Logo image placeholder"
              role="img"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden flex-1 items-center justify-center gap-4 lg:flex lg:gap-6 xl:gap-8">
            {NAV_LINKS.map(({ label, to }) => {
              if (label === 'Sister Concern') {
                return (
                  <div key={to} className="group relative py-2">
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        [
                          'inline-flex items-center text-sm font-semibold transition-colors duration-200',
                          isActive ? 'text-[#108035] font-bold' : 'text-gray-800 hover:text-[#108035]',
                        ].join(' ')
                      }
                      onClick={closeMenu}
                    >
                      {label}
                      <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true">
                        ↓
                      </span>
                    </NavLink>

                    {/* Dropdown Menu */}
                    <div className="hidden absolute left-0 top-full z-20 w-[280px] rounded-[24px] border border-[#108035]/15 bg-white shadow-[0_24px_60px_-32px_rgba(16,128,53,0.35)] group-hover:block">
                      <div className="flex flex-col py-2">
                        {SISTER_CONCERN_OPTIONS.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-[#108035]/10 hover:text-[#108035]"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'} 
                  className={navLinkClassName}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              )
            })}
          </div>

          {/* 🎯 Contact Us Button (Desktop) - Link থেকে বাটন করা হয়েছে পপ-আপের জন্য */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden shrink-0 rounded-md bg-[#108035] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-100 lg:inline-flex"
          >
            Contact Us
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#108035] transition-colors duration-200 hover:bg-[#108035]/10 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="border-t border-[#108035]/10 bg-[#E5FFE8] px-4 pb-5 pt-2 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    [
                      'rounded-md px-3 py-2.5 text-sm font-semibold transition-colors duration-200',
                      isActive
                        ? 'bg-[#108035]/10 text-[#108035] font-bold'
                        : 'text-gray-800 hover:bg-[#108035]/5 hover:text-[#108035]',
                    ].join(' ')
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* 🎯 Contact Us Button (Mobile) */}
            <button
              className="mt-4 flex w-full items-center justify-center rounded-md bg-[#108035] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
              onClick={() => {
                closeMenu();
                setIsModalOpen(true);
              }}
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* 🎯 CONTACT US MODAL POPUP SECTION */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          
          {/* Main Modal Card Container */}
          <div className="relative bg-[#219c58] text-white rounded-[24px] max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl p-6 md:p-10 gap-8 items-center animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Cross Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white text-xl font-bold transition-transform hover:scale-110"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Left Column: Input Form */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-wide">
                If You Have Questions <br /> Please, Contact Us
              </h2>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="First name" 
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Last name" 
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm md:text-base"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-white text-green-600 font-bold rounded-md uppercase tracking-wider text-xs sm:text-sm hover:bg-gray-100 transition-colors shadow-md"
                >
                  Get Consult
                </button>
              </form>
            </div>

            {/* Right Column: Info & Social Icons */}
            <div className="space-y-4 text-left border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" 
                  alt="Representative" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/50 shadow-md"
                />
                <h3 className="text-xl font-bold leading-tight">
                  Choose Your <br /> Apparel Partner
                </h3>
              </div>
              
              <p className="text-sm text-white/80 leading-relaxed">
                Using precise data and transparent communication in our manufacturing flow ensures premium garment outputs with custom specifications tailored for your brand's growth.
              </p>

              {/* Social Icons Links */}
              <div className="flex items-center gap-3 pt-2">
                {['🔵', '🐦', '🔗', '📸', '▶️'].map((icon, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-sm shadow-sm"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}