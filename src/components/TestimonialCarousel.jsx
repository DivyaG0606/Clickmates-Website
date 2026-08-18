import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, MapPin } from 'lucide-react'
import { testimonialsData } from '../data/photographyData'

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [cardsPerPage, setCardsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2)
      } else {
        setCardsPerPage(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalReviews = testimonialsData.length
  const maxIndex = Math.max(0, totalReviews - cardsPerPage)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Auto-play timer (scrolls every 2 seconds)
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      handleNext()
    }, 2000)
    return () => clearInterval(timer)
  }, [currentIndex, isHovered, maxIndex])

  return (
    <section className="py-20 sm:py-28 bg-[#FFF0F6]/30 border-b border-[#FFF0F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20 shadow-xs">
            100% VERIFIED CLIENT REVIEWS ({totalReviews} REVIEWS)
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
            Loved by Families Across Pune
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-light">
            Slide through real experiences from parents across Kothrud, Paud Road & Pune.
          </p>
        </div>

        {/* 1-Line Carousel Track Container */}
        <div
          className="relative px-2 sm:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Control Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-[#242424] hover:text-white hover:bg-[#ED78A8] border border-[#FFF0F6] shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer hidden sm:flex"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-[#242424] hover:text-white hover:bg-[#ED78A8] border border-[#FFF0F6] shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer hidden sm:flex"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* ALL REVIEWS IN 1 SINGLE ROW LINE TRACK */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-700 ease-out gap-6 flex-nowrap"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`
              }}
            >
              {testimonialsData.map((test) => (
                <div
                  key={test.id}
                  className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="p-8 rounded-3xl bg-white border border-[#FFF0F6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full space-y-6 relative overflow-hidden group">
                    {/* Decorative Quote Icon (NO ROUND PHOTO IMAGE) */}
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-[#ED78A8]/15 group-hover:text-[#ED78A8]/30 transition-colors pointer-events-none" />

                    {/* Reviewer Header Details (Clean Text, No Image Round) */}
                    <div className="space-y-1.5 relative z-10">
                      <h3 className="font-heading font-bold text-lg text-[#242424]">
                        {test.name}
                      </h3>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-[#ED78A8] font-nav font-semibold uppercase tracking-wider">
                          {test.type}
                        </span>
                        {test.location && (
                          <span className="text-[10px] text-[#888888] font-nav flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#ED78A8]" />
                            {test.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Star Rating & Quote Text */}
                    <div className="space-y-3.5 relative z-10">
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(test.rating)].map((_, r) => (
                          <Star key={r} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-[#333333] text-xs sm:text-sm italic leading-relaxed font-body font-light">
                        "{test.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator for Single Line Track */}
          <div className="flex items-center justify-center gap-2 pt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#ED78A8]'
                    : 'w-2.5 bg-[#ED78A8]/30 hover:bg-[#ED78A8]/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Mobile Prev/Next Controls */}
          <div className="flex sm:hidden items-center justify-center gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white text-[#242424] border border-[#FFF0F6] shadow-md flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white text-[#242424] border border-[#FFF0F6] shadow-md flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
