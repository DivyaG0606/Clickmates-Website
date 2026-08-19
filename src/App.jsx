import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileStickyCTA from './components/MobileStickyCTA'
import BookingModal from './components/BookingModal'
import CustomCursor from './components/CustomCursor'
import TopProgressBar from './components/TopProgressBar'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import PackagesPage from './pages/PackagesPage'
import ContactPage from './pages/ContactPage'

import './App.css'

// Helper component to reset scroll & attach IntersectionObserver for scroll animations
function ScrollObserver() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Reset scroll position to top
    window.scrollTo(0, 0)

    // Setup IntersectionObserver for smooth scroll reveal animations
    const observerCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '100px 0px 0px 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Give DOM time to render before observing
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale')
      elements.forEach((el) => observer.observe(el))
    }, 80)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])

  return null
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

  const handleOpenBooking = () => {
    setBookingModalOpen(true)
  }

  const handleCloseBooking = () => {
    setBookingModalOpen(false)
  }

  return (
    <Router>
      <ScrollObserver />
      {/* Top Scroll Progress Line */}
      <TopProgressBar />

      {/* Desktop Interactive Pink Custom Cursor */}
      <CustomCursor />

      <div className="min-h-screen flex flex-col bg-[#FFFDFB] text-[#242424] font-body selection:bg-[#ED78A8] selection:text-white">
        {/* Header / Navbar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/packages" element={<PackagesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Bottom Sticky CTA Bar */}
        <MobileStickyCTA onOpenBooking={handleOpenBooking} />

        {/* Booking Reservation Modal */}
        <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
      </div>
    </Router>
  )
}
