import { useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolioCategories } from '../data/portfolioData'
import LightboxModal from './LightboxModal'

export default function MasonryPortfolio({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [lightboxItem, setLightboxItem] = useState(null)

  const categoryFilterMap = {
    'ALL': 'all',
    'BABY': 'baby-photography',
    'MATERNITY': 'maternity-photography',
    'FAMILY': 'family-photography',
    'EVENTS': 'event-photography',
    'PETS': 'pet-photography'
  }

  const filterTabs = ['ALL', 'BABY', 'MATERNITY', 'FAMILY', 'EVENTS', 'PETS']

  // Gather ALL photos from every category folder without missing any
  const allPhotos = portfolioCategories.flatMap(cat => 
    (cat.images || []).map(img => ({
      ...img,
      categorySlug: cat.slug,
      category: cat.badge
    }))
  )

  const targetSlug = categoryFilterMap[activeCategory]
  const filteredItems = targetSlug === 'all'
    ? allPhotos
    : allPhotos.filter(item => item.categorySlug === targetSlug)

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
            INTERACTIVE GALLERY ({allPhotos.length} PHOTOS)
          </span>
          <h2 className="font-heading text-2xl sm:text-5xl font-bold text-[#242424]">
            Stories We've Captured
          </h2>
          <p className="text-[#666666] text-xs sm:text-base">
            Explore all {allPhotos.length} studio & outdoor photographs across baby, maternity, family, event, and pet sessions. Click any photo for fullscreen view.
          </p>
        </div>

        {/* Category Filters with Counts */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12 font-nav text-[11px] sm:text-xs font-semibold reveal-on-scroll reveal-delay-1">
          {filterTabs.map((cat) => {
            const slug = categoryFilterMap[cat]
            const count = slug === 'all' ? allPhotos.length : allPhotos.filter(i => i.categorySlug === slug).length
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 uppercase tracking-wider cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/25 scale-105'
                    : 'bg-[#FFF0F6] text-[#242424] hover:bg-[#ED78A8]/20'
                }`}
              >
                {cat} ({count})
              </button>
            )
          })}
        </div>

        {/* Full Grid displaying ALL category photos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto reveal-scale">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              data-cursor="view"
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group bg-[#1a1819] p-1 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-60 sm:h-72 flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.alt || `${item.title} - ClickMates Photography Pune`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 rounded-xl"
              />
              {/* Soft Pink Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#ED78A8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase font-nav text-[#ED78A8] mb-1">
                  {item.category}
                </span>
                <h4 className="font-heading text-sm sm:text-base font-bold line-clamp-1">{item.title}</h4>
                <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-2">{item.caption}</p>
                <div className="pt-2 text-[10px] font-semibold tracking-widest font-nav uppercase text-white inline-flex items-center gap-1">
                  View Image →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <div className="mt-12 text-center reveal-on-scroll">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-md shadow-[#ED78A8]/20 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Explore Portfolio Page ({allPhotos.length} Photos) →
          </Link>
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
