import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { portfolioItems, brandDetails } from '../data/photographyData'
import LightboxModal from '../components/LightboxModal'
import SEOHead from '../components/SEOHead'

export default function PortfolioPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [lightboxItem, setLightboxItem] = useState(null)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const categories = ['ALL', 'BABY', 'NEWBORN', 'MATERNITY', 'FAMILY', 'KIDS', 'MILESTONE', 'EVENTS']

  const portfolioFaqs = [
    {
      q: "Where are the photoshoots featured in the ClickMates portfolio taken?",
      a: "All studio portraits showcased in our portfolio are captured at our fully equipped, professionally lit studio located in Kothrud, Pune (Office No. 2, Ishana II, Paud Road)."
    },
    {
      q: "Can I choose specific themes or props seen in your portfolio for my baby's shoot?",
      a: "Yes! All props, floral backgrounds, custom wraps, baskets, and theme sets displayed across our portfolio images are fully available for your booked session at no extra charge."
    },
    {
      q: "Are the photographs in your gallery edited and retouched?",
      a: "Every photograph delivered goes through professional color grading, skin smoothing, lighting balance, and detailed high-resolution retouching before being added to your private gallery."
    },
    {
      q: "How can I book a session similar to the styles showcased in your portfolio?",
      a: "You can easily click the 'Book Now' or contact options directly from our lightbox viewer, or use our instant booking calendar to secure your preferred date in Kothrud, Pune."
    }
  ]

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
        title="Photography Portfolio in Pune | Baby, Newborn & Maternity Gallery | ClickMates"
        description="Browse ClickMates Photography's professional portfolio in Kothrud, Pune. Explore stunning galleries of newborn photography, baby shoots, maternity sessions, kids milestones, and events."
        keywords="Photography Portfolio Pune, Baby Photoshoot Gallery Kothrud, Newborn Photography Portfolio, Maternity Shoot Pictures Pune, Family Photography Pune, Kids Milestone Gallery, ClickMates Photography Work"
        canonicalUrl={`https://${brandDetails.domain}/portfolio`}
        faqs={portfolioFaqs}
      />

      <section className="bg-[#FFF0F6]/40 py-16 sm:py-24 border-b border-[#FFF0F6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20 shadow-xs">
            VISUAL GALLERY & PORTFOLIO
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#242424]">
            Precious Stories & Memories We've Captured in Pune
          </h1>
          <p className="text-[#666666] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Explore our professional newborn, baby, maternity, and family photography gallery. Click on any photograph to expand into a fullscreen view.
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
              className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 uppercase tracking-wider cursor-pointer ${activeCategory === cat
                  ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/30'
                  : 'bg-[#FFF0F6] text-[#242424] hover:bg-[#ED78A8]/20 border border-[#ED78A8]/10'
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
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-80 border border-[#ED78A8]/15"
            >
              <img
                src={item.image}
                alt={item.alt || `${item.title} - ClickMates Photography Pune Portfolio`}
                title={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase font-nav text-[#ED78A8] mb-1">
                  {item.category} • ClickMates Pune
                </span>
                <h4 className="font-heading text-xl font-bold">{item.title}</h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2 font-light">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PORTFOLIO FAQ SECTION */}
        <div className="mt-20 sm:mt-28 space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
              PORTFOLIO FAQ
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-[#242424] font-medium">Everything you need to know about our photo sessions and studio work in Kothrud, Pune.</p>
          </div>

          <div className="space-y-4">
            {portfolioFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className="border border-[#ED78A8]/30 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[#242424] hover:text-[#ED78A8] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#ED78A8] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#444444] font-body font-normal leading-relaxed border-t border-[#FFF0F6] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
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