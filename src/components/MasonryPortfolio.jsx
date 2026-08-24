import { useState } from 'react'
import { portfolioItems } from '../data/photographyData'
import LightboxModal from './LightboxModal'

export default function MasonryPortfolio({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [lightboxItem, setLightboxItem] = useState(null)

  const categories = ['ALL', 'BABY', 'NEWBORN', 'MATERNITY', 'EVENTS']

  const filteredItems = activeCategory === 'ALL'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  const handleNextLightbox = () => {
    if (!lightboxItem) return
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setLightboxItem(filteredItems[nextIndex])
  }

  const handlePrevLightbox = () => {
    if (!lightboxItem) return
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setLightboxItem(filteredItems[prevIndex])
  }

  return (
    <section className="pt-8 pb-14 sm:py-28 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3 reveal-on-scroll">
          <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
            INTERACTIVE GALLERY
          </span>
          <h2 className="font-heading text-2xl sm:text-5xl font-bold text-[#242424]">
            Stories We've Captured
          </h2>
          <p className="text-[#666666] text-xs sm:text-base">
            Every photograph carries a genuine feeling. Click any photo to expand into fullscreen view.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12 font-nav text-[11px] sm:text-xs font-semibold reveal-on-scroll reveal-delay-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 uppercase tracking-wider ${
                activeCategory === cat
                  ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/25 scale-105'
                  : 'bg-[#FFF0F6] text-[#242424] hover:bg-[#ED78A8]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6 max-w-[320px] sm:max-w-none mx-auto reveal-scale">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              data-cursor="view"
              className="break-inside-avoid relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.alt}
                width="600"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-52 sm:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Soft Pink Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#ED78A8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase font-nav text-[#ED78A8] mb-1">
                  {item.category}
                </span>
                <h4 className="font-heading text-lg sm:text-xl font-bold">{item.title}</h4>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2">{item.caption}</p>
                <div className="pt-2 sm:pt-3 text-[10px] font-semibold tracking-widest font-nav uppercase text-white inline-flex items-center gap-1">
                  View Image →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
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
