import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play } from 'lucide-react'
import { babyShootCarouselItems } from '../data/photographyData'
import LightboxModal from './LightboxModal'

export default function BabyShootCarousel({ onOpenBooking }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [lightboxItem, setLightboxItem] = useState(null)

  const items = babyShootCarouselItems

  useEffect(() => {
    if (!isAutoplay) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoplay, items.length])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const currentItem = items[currentIndex]

  const handleNextLightbox = () => {
    if (!lightboxItem) return
    const idx = items.findIndex((i) => i.id === lightboxItem.id)
    const nextIdx = (idx + 1) % items.length
    setLightboxItem(items[nextIdx])
  }

  const handlePrevLightbox = () => {
    if (!lightboxItem) return
    const idx = items.findIndex((i) => i.id === lightboxItem.id)
    const prevIdx = (idx - 1 + items.length) % items.length
    setLightboxItem(items[prevIdx])
  }

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-[#FFF0F6]/40 via-white to-[#FFFDFB] rounded-3xl border border-[#FFF0F6] shadow-sm my-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Optional Play/Pause Controls Bar */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className="p-2 rounded-full bg-white border border-[#ED78A8]/20 text-[#ED78A8] hover:bg-[#FFF0F6] transition-colors shadow-xs cursor-pointer"
            title={isAutoplay ? "Pause Slideshow" : "Play Slideshow"}
            aria-label={isAutoplay ? "Pause baby shoot carousel autoplay" : "Play baby shoot carousel autoplay"}
          >
            {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        </div>

        {/* Main Carousel Display (Proper Size & Fit) */}
        <div
          className="relative max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-neutral-950 h-72 sm:h-96 md:h-[460px] group flex items-center justify-center border border-[#ED78A8]/20"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <img
            src={currentItem.image}
            alt={currentItem.alt}
            className="w-full h-full object-contain sm:object-cover object-center transition-all duration-700 ease-out"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4 sm:p-6 text-white">
            {/* Top Bar inside slide */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase font-nav text-white bg-[#ED78A8] px-3 py-1 rounded-full shadow-md">
                {currentIndex + 1} / {items.length} • {currentItem.category}
              </span>

              <button
                onClick={() => setLightboxItem(currentItem)}
                className="p-2 sm:p-2.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white transition-all transform hover:scale-110 cursor-pointer shadow-lg"
                title="Expand Fullscreen View"
                aria-label="Expand baby shoot photo fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Caption Info */}
            <div className="space-y-1 max-w-xl">
              <h3 className="font-heading text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-snug drop-shadow-xs line-clamp-2">
                {currentItem.caption}
              </p>
            </div>
          </div>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white hover:text-[#242424] transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Previous baby shoot slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white hover:text-[#242424] transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Next baby shoot slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Selector Strip (B1 to B6) */}
        <div className="max-w-4xl mx-auto grid grid-cols-6 gap-2 sm:gap-3 mt-4">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all duration-300 cursor-pointer ${currentIndex === idx
                  ? 'border-[#ED78A8] scale-105 shadow-md shadow-[#ED78A8]/30 ring-2 ring-[#ED78A8]/50'
                  : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] font-bold px-1.5 py-0.5 rounded font-nav">
                B{idx + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Integration */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
        onOpenBooking={onOpenBooking}
      />
    </section>
  )
}
