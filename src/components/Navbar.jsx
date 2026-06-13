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
    'text-sm font-medium text-gray-800 transition-colors duration-200',
    isActive ? 'text-[#108035]' : 'hover:text-[#108035]',
  ].join(' ')
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#E5FFE8]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
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

        <div className="hidden flex-1 items-center justify-center gap-4 lg:flex lg:gap-6 xl:gap-8">
          {NAV_LINKS.map(({ label, to }) => {
            if (label === 'Sister Concern') {
              return (
                <div key={to} className="group relative py-2">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      [
                        'inline-flex items-center text-sm font-medium transition-colors duration-200',
                        isActive ? 'text-[#108035]' : 'text-gray-800 hover:text-[#108035]',
                      ].join(' ')
                    }
                    onClick={closeMenu}
                  >
                    {label}
                    <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true">
                      ↓
                    </span>
                  </NavLink>

                  <div className="hidden absolute left-0 top-full z-20 w-[280px] rounded-[24px] border border-[#108035]/15 bg-white shadow-[0_24px_60px_-32px_rgba(16,128,53,0.35)] group-hover:block">
                    <div className="flex flex-col py-2">
                      {SISTER_CONCERN_OPTIONS.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:text-[#108035]"
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
                className={navLinkClassName}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            )
          })}
        </div>

        <Link
          to="/contact"
          className="hidden shrink-0 rounded-md bg-[#108035] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-100 lg:inline-flex"
        >
          Contact Us
        </Link>

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
                className={({ isActive }) =>
                  [
                    'rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'bg-[#108035]/10 text-[#108035]'
                      : 'text-gray-800 hover:bg-[#108035]/5 hover:text-[#108035]',
                  ].join(' ')
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-4 flex w-full items-center justify-center rounded-md bg-[#108035] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}
