import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, X, ChevronLeft, ChevronRight, Calendar, Maximize2, MapPin, CheckCircle2 } from 'lucide-react'
import { brandDetails } from '../data/photographyData'
import { portfolioCategories } from '../data/portfolioData'
import SEOHead from '../components/SEOHead'

export default function CategoryGalleryPage({ onOpenBooking }) {
  const { categorySlug } = useParams()

  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Find active category
  const currentCategory = portfolioCategories.find((cat) => cat.slug === categorySlug) || portfolioCategories[0]

  const categoryImages = currentCategory.images || []
  const lightboxItem = lightboxIndex !== null ? categoryImages[lightboxIndex] : null

  // Lightbox Navigation Callbacks
  const handleNext = useCallback(() => {
    if (lightboxIndex === null || categoryImages.length === 0) return
    setLightboxIndex((prev) => (prev + 1) % categoryImages.length)
  }, [lightboxIndex, categoryImages.length])

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null || categoryImages.length === 0) return
    setLightboxIndex((prev) => (prev - 1 + categoryImages.length) % categoryImages.length)
  }, [lightboxIndex, categoryImages.length])

  const handleClose = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  // Keyboard Shortcuts (Arrow Keys & Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') handleClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, handleNext, handlePrev, handleClose])

  // Touch Swipe Handlers for Mobile Lightbox
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) handleNext()
    if (isRightSwipe) handlePrev()

    setTouchStart(0)
    setTouchEnd(0)
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" },
    { name: currentCategory.title, url: `/portfolio/${currentCategory.slug}` }
  ]

  return (
    <div className="pt-20 pb-24 bg-[#FFFDFB] text-[#242424] font-body selection:bg-[#ED78A8] selection:text-white min-h-screen">
      <SEOHead
        title={`${currentCategory.title} Gallery in Pune | Clickmates Studio`}
        description={`Explore Clickmates Studio's high-resolution ${currentCategory.title.toLowerCase()} gallery in Kothrud, Pune. ${currentCategory.description}`}
        keywords={`${currentCategory.title} Pune, Clickmates Studio ${currentCategory.title}, ${currentCategory.badge} photoshoot Kothrud, photographer in Kothrud Pune, photography studio Paud Road Bhusari Colony`}
        canonicalUrl={`https://${brandDetails.domain}/portfolio/${currentCategory.slug}`}
        breadcrumbs={breadcrumbs}
      />

      {/* BACK TO PORTFOLIO & HEADER */}
      <section className="py-12 sm:py-16 border-b border-[#ED78A8]/20 bg-gradient-to-b from-[#FFF0F6] via-[#FFFDFB] to-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Back Button */}
          <div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest font-nav text-[#555555] hover:text-[#ED78A8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO MAIN PORTFOLIO</span>
            </Link>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-3">
            <span className="inline-block text-xs font-extrabold uppercase tracking-[0.25em] font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              {currentCategory.badge} GALLERY
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#242424] tracking-tight">
              {currentCategory.title} Gallery in Kothrud, Pune
            </h1>
            <p className="text-[#555555] text-sm sm:text-lg max-w-3xl font-light leading-relaxed">
              {currentCategory.subtitle} {currentCategory.description} Created with artistic care at Clickmates Studio on Paud Road in Kothrud, Pune.
            </p>
          </div>

          {/* CATEGORY NAVIGATION SWITCHER BAR */}
          <div className="pt-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-2 border-t border-[#ED78A8]/15">
            {portfolioCategories.map((cat) => {
              const active = cat.slug === currentCategory.slug
              return (
                <Link
                  key={cat.slug}
                  to={`/portfolio/${cat.slug}`}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider font-nav transition-all duration-300 shrink-0 ${
                    active
                      ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/25 scale-105'
                      : 'bg-white text-[#555555] hover:text-[#ED78A8] hover:bg-[#FFF0F6] border border-[#ED78A8]/20 shadow-xs'
                  }`}
                >
                  {cat.badge}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY MASONRY/GRID */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {categoryImages.map((imgItem, idx) => (
            <div
              key={imgItem.id || idx}
              onClick={() => setLightboxIndex(idx)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group bg-[#1a1819] border border-[#ED78A8]/20 shadow-md hover:shadow-2xl hover:shadow-[#ED78A8]/20 transition-all duration-500 transform hover:scale-[1.02]"
            >
              <img
                src={imgItem.image}
                alt={imgItem.alt || `${imgItem.title} - ${currentCategory.title} by Clickmates Studio Pune`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain max-h-[550px] transition-transform duration-700 ease-out"
              />

              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase font-nav text-[#ED78A8]">
                    {currentCategory.badge} • CLICKMATES STUDIO
                  </span>
                  <h3 className="font-heading text-lg font-bold drop-shadow-md">
                    {imgItem.title}
                  </h3>
                  {imgItem.caption && (
                    <p className="text-xs text-slate-200 font-light line-clamp-2">
                      {imgItem.caption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOCAL STUDIO FOOTNOTE */}
        <div className="bg-[#FFF0F6]/50 p-6 sm:p-8 rounded-3xl border border-[#ED78A8]/20 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[#ED78A8] font-bold">
            <MapPin className="w-5 h-5" />
            <span>Clickmates Studio Location (Paud Road, Kothrud, Pune):</span>
          </div>
          <p className="text-[#444444] font-light leading-relaxed">
            Ishana II, Office No. 2, Sr. No. 77/2, Left Bhusari Colony, 38 Paud Road, Kothrud, Pune, Maharashtra 411038. Clickmates Photography Studio
          </p>
        </div>
      </section>

      {/* BOTTOM NAVIGATION & CTA */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#ED78A8]/20 pt-12">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest font-nav text-[#555555] hover:text-[#ED78A8] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO PORTFOLIO GALLERY</span>
        </Link>

        {onOpenBooking && (
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-extrabold tracking-widest uppercase font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all shadow-md shadow-[#ED78A8]/20 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            BOOK {currentCategory.badge} SHOOT
          </button>
        )}
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-fade-in text-white selection:bg-transparent"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Lightbox Header */}
          <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10 z-10">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ED78A8] font-nav">
              {lightboxIndex + 1} / {categoryImages.length} • {currentCategory.title}
            </span>

            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors cursor-pointer"
              title="Close Fullscreen View (Esc)"
              aria-label="Close Lightbox Modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Display Area */}
          <div className="relative flex-grow flex items-center justify-center p-4 sm:p-8 select-none">
            <img
              src={lightboxItem.image}
              alt={lightboxItem.alt || lightboxItem.title}
              className="max-h-[80vh] max-w-full object-contain shadow-2xl rounded-lg transition-transform duration-300"
            />

            {/* Left Navigation Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all shadow-xl cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all shadow-xl cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Bottom Lightbox Caption Bar */}
          <div className="p-4 sm:p-6 bg-neutral-950/80 border-t border-white/10 text-center space-y-1 z-10">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
              {lightboxItem.title}
            </h4>
            {lightboxItem.caption && (
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl mx-auto">
                {lightboxItem.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
