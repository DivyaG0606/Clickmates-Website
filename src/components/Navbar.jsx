import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Calendar, MessageCircle } from 'lucide-react'
import { brandDetails, logoImg } from '../data/photographyData'

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ]

  const isCurrent = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#FFF0F6] shadow-xs ${
        scrolled ? 'py-2.5' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={logoImg}
            alt="ClickMates Photography Studio Logo Kothrud Pune"
            className="h-14 sm:h-18 lg:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-nav text-xs font-semibold tracking-wider uppercase">
          {navLinks.map((link) => {
            const active = isCurrent(link.path)
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors duration-200 py-1.5 relative font-bold ${
                  active ? 'text-[#ED78A8]' : 'text-[#242424] hover:text-[#ED78A8]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ED78A8] rounded-full animate-fade-in" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Action CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-md shadow-[#ED78A8]/20 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book a Shoot
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase font-nav text-white bg-[#ED78A8] shadow-sm"
          >
            Book
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg transition-colors text-[#242424]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDFB] border-b border-[#FFF0F6] shadow-2xl px-6 py-6 animate-fade-down text-[#242424]">
          <div className="flex flex-col gap-4 font-nav text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 border-b border-slate-100 flex items-center justify-between ${
                  isCurrent(link.path) ? 'text-[#ED78A8] font-bold' : 'text-[#242424]'
                }`}
              >
                <span>{link.name}</span>
                {isCurrent(link.path) && <span className="w-2 h-2 rounded-full bg-[#ED78A8]" />}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenBooking()
                }}
                className="w-full py-3 rounded-full text-center text-xs font-semibold tracking-wider uppercase font-nav text-white bg-[#ED78A8] shadow-md shadow-[#ED78A8]/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Your Shoot
              </button>

              <a
                href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates%20Team!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-center text-xs font-semibold tracking-wider uppercase font-nav text-[#242424] bg-[#FFF0F6] border border-[#ED78A8]/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#ED78A8]" />
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
