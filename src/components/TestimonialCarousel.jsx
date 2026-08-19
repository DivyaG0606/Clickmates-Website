import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, MapPin } from 'lucide-react'
import { testimonialsData } from '../data/photographyData'

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const totalReviews = testimonialsData.length

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews)
  }

  // Auto-play timer: rotates every 2 seconds (2000ms)
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      handleNext()
    }, 2000)
    return () => clearInterval(timer)
  }, [isHovered, totalReviews])

  const currentReview = testimonialsData[currentIndex]

  // Extract initials for circular avatar badge (e.g. "Ananya & Rohan" -> "AR")
  const getInitials = (name) => {
    if (!name) return 'CM'
    const parts = name.replace('&', '').split(' ').filter(Boolean)
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`
    return parts[0] ? parts[0].slice(0, 2).toUpperCase() : 'CM'
  }

  return (
    <section className="pt-8 pb-14 sm:py-28 bg-[#FFF0F6]/30 border-b border-[#FFF0F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20 shadow-xs max-w-full text-center leading-normal">
            100% VERIFIED CLIENT REVIEWS ({totalReviews} REVIEWS)
          </span>
          <h2 className="font-heading text-2xl sm:text-5xl font-bold text-[#242424]">
            Loved by Families Across Pune
          </h2>
          <p className="text-[#666666] text-xs sm:text-base font-light">
            Slide through real experiences from parents across Kothrud, Paud Road & Pune.
          </p>
        </div>

        {/* Single Focused Card View Container */}
        <div
          className="relative max-w-[340px] sm:max-w-xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-[#242424] hover:text-white hover:bg-[#ED78A8] border border-[#ED78A8]/30 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-[#242424] hover:text-white hover:bg-[#ED78A8] border border-[#ED78A8]/30 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Luxury Review Card */}
          <div className="px-1 sm:px-0">
            <div
              key={currentReview.id}
              className="p-5 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl relative overflow-hidden transition-all duration-500 transform hover:-translate-y-0.5 flex flex-col justify-between space-y-4 min-h-[220px]"
            >
              {/* Decorative Quote Icon Watermark */}
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 text-[#ED78A8]/15 pointer-events-none" />

              {/* Reviewer Info Row */}
              <div className="flex items-center gap-3 relative z-10">
                {/* Initials Avatar */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ED78A8] text-white flex items-center justify-center font-heading font-extrabold text-sm sm:text-base shadow-md shadow-[#ED78A8]/25 shrink-0">
                  {getInitials(currentReview.name)}
                </div>

                <div className="space-y-0.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="font-heading font-bold text-base sm:text-xl text-[#242424] truncate">
                      {currentReview.name}
                    </h3>
                    {currentReview.location && (
                      <span className="text-[11px] sm:text-xs text-[#888888] font-nav flex items-center gap-1 shrink-0">
                        <MapPin className="w-3 h-3 text-[#ED78A8]" />
                        {currentReview.location}
                      </span>
                    )}
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                    {currentReview.type}
                  </span>
                </div>
              </div>

              {/* Rating & Review Quote */}
              <div className="space-y-2.5 relative z-10 pt-2 border-t border-[#FFF0F6]">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(currentReview.rating)].map((_, r) => (
                    <Star key={r} className="w-4 h-4 fill-current drop-shadow-xs" />
                  ))}
                </div>
                <p className="text-[#333333] text-xs sm:text-base italic leading-relaxed font-body font-light">
                  "{currentReview.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-5 sm:pt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 sm:w-8 bg-[#ED78A8] shadow-sm'
                    : 'w-2 sm:w-2.5 bg-[#ED78A8]/30 hover:bg-[#ED78A8]/60'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
