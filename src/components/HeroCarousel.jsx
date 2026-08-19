import { useState, useEffect } from 'react'
import { Calendar, FileText, ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../data/photographyData'

export default function HeroCarousel({ onOpenBooking }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  const currentSlide = heroSlides[currentIndex]

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-24 sm:py-36 bg-[#111111] text-white">
      {/* Background Slides with Ken Burns (100% Sharp & Visible Photo) */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className={`w-full h-full object-cover object-center transform-gpu ${
              index === currentIndex ? 'animate-ken-burns' : ''
            }`}
          />
          {/* Subtle contrast vignette overlay so the photo stays vibrant & text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 mt-12">
        {/* Editorial Heading */}
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[1.1] text-white max-w-4xl drop-shadow-lg transition-all duration-700 reveal-on-scroll">
          {currentSlide.title}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-base sm:text-xl max-w-2xl font-light leading-relaxed drop-shadow-md transition-all duration-700 reveal-on-scroll reveal-delay-1">
          {currentSlide.subtitle}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto font-nav text-xs font-semibold uppercase tracking-wider reveal-scale reveal-delay-2">
          <button
            onClick={onOpenBooking}
            data-cursor="click"
            className="w-[250px] sm:w-auto px-5 py-3 sm:px-9 sm:py-4 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-xl shadow-[#ED78A8]/40 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            Book Your Shoot
          </button>
          
          <a
            href="/ClickMate_Packges_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="ClickMate_Packges_Final.pdf"
            data-cursor="click"
            className="w-[250px] sm:w-auto px-5 py-3 sm:px-9 sm:py-4 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <FileText className="w-4 h-4 text-[#ED78A8] shrink-0" />
            Download Brochure
          </a>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/20 hover:bg-[#ED78A8] backdrop-blur-md text-white transition-all z-20 hidden sm:flex border border-white/30 shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/20 hover:bg-[#ED78A8] backdrop-blur-md text-white transition-all z-20 hidden sm:flex border border-white/30 shadow-lg"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel Pagination Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-8 h-2.5 bg-[#ED78A8] shadow-lg'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
