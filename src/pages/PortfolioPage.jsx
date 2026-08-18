import { useState } from 'react'
import { portfolioItems } from '../data/photographyData'
import LightboxModal from '../components/LightboxModal'
import SEOHead from '../components/SEOHead'

export default function PortfolioPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [lightboxItem, setLightboxItem] = useState(null)

  const categories = ['ALL', 'BABY', 'NEWBORN', 'MATERNITY', 'FAMILY', 'KIDS', 'MILESTONE', 'EVENTS']

  const filteredPortfolio = activeCategory === 'ALL'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  const handleNextLightbox = () => {
    if (!lightboxItem) return
    const currentIndex = filteredPortfolio.findIndex(i => i.id === lightboxItem.id)
    const nextIndex = (currentIndex + 1) % filteredPortfolio.length
    setLightboxItem(filteredPortfolio[nextIndex])
  }

  const handlePrevLightbox = () => {
    if (!lightboxItem) return
    const currentIndex = filteredPortfolio.findIndex(i => i.id === lightboxItem.id)
    const prevIndex = (currentIndex - 1 + filteredPortfolio.length) % filteredPortfolio.length
    setLightboxItem(filteredPortfolio[prevIndex])
  }

  return (
    <div className="pt-24 pb-20 bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title="Photography Portfolio in Pune | ClickMates Photography"
        description="Explore the ClickMates Photography portfolio featuring creative baby, newborn, maternity, family, kids, milestone and event photography."
        keywords="Photography Portfolio Pune, ClickMates Portfolio, Baby Photography Pune, Newborn Photography Pune, Maternity Photography Pune, Family Photography Pune, Kids Photography Pune"
        canonicalUrl="https://clickmets.in/portfolio"
      />

      <section className="bg-[#FFF0F6]/40 py-16 sm:py-24 border-b border-[#FFF0F6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
            VISUAL GALLERY
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-[#242424]">
            Stories We've Captured
          </h1>
          <p className="text-[#666666] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Click on any photograph to expand into fullscreen view.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 font-nav text-xs font-semibold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full transition-all duration-200 uppercase tracking-wider ${
                activeCategory === cat
                  ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/20'
                  : 'bg-[#FFF0F6] text-[#242424] hover:bg-[#ED78A8]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-80"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-semibold tracking-widest uppercase font-nav text-[#ED78A8] mb-1">
                  {item.category}
                </span>
                <h4 className="font-heading text-xl font-bold">{item.title}</h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
        onOpenBooking={onOpenBooking}
      />
    </div>
  )
}
