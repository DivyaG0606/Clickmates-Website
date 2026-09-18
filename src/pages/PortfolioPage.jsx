import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Calendar, Maximize2, MapPin, Phone, Clock, MessageCircle, CheckCircle2 } from 'lucide-react'
import { brandDetails } from '../data/photographyData'
import { portfolioCategories } from '../data/portfolioData'
import SEOHead from '../components/SEOHead'
import LightboxModal from '../components/LightboxModal'

export default function PortfolioPage({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Flatten all images across categories with category metadata
  const allPhotos = useMemo(() => {
    const list = []
    portfolioCategories.forEach((cat) => {
      if (cat.images) {
        cat.images.forEach((img) => {
          list.push({
            ...img,
            categorySlug: cat.slug,
            category: cat.badge,
            categoryTitle: cat.title
          })
        })
      }
    })
    return list
  }, [])

  // Filtered photos based on selected category tab
  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') return allPhotos
    return allPhotos.filter((img) => img.categorySlug === selectedCategory)
  }, [allPhotos, selectedCategory])

  const activeLightboxItem = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1))
  }

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0))
  }

  const portfolioFaqs = [
    {
      q: "What photography galleries are featured in Clickmates Studio portfolio?",
      a: "Our portfolio features specialized galleries for Baby Photography, 100% Newborn Safety Shoots, Luxury Maternity Portraits, Family Photography, Kids Milestones, 1st Birthday Cake Smash, Event Coverage, and Studio Portraiture in Pune."
    },
    {
      q: "Can I view category-specific photoshoots in high resolution?",
      a: "Yes! You can filter photos by category using the tabs above (such as Baby, Newborn, Maternity, Family, Events) or click on any photograph to open a full-screen high-resolution lightbox."
    },
    {
      q: "Where were the photographs in Clickmates Studio portfolio taken?",
      a: "All studio portraits were created at Clickmates Studio located on main Paud Road in Left Bhusari Colony, Kothrud, Pune. Outdoor portraits were captured at scenic golden-hour locations across Pune, Maharashtra."
    },
    {
      q: "Are the backdrops, props, and maternity gowns shown in the gallery available for clients?",
      a: "Yes! All handcrafted wooden props, sanitized baby wraps, floral set arrangements, balloon arches, and designer maternity gowns featured in our portfolio are available at Clickmates Studio for your session."
    },
    {
      q: "Where is Clickmates Photography Studio located in Pune?",
      a: "Our verified studio address is: Ishana II, Office No. 2, Sr. No. 77/2, Left Bhusari Colony, 38 Paud Road, Kothrud, Pune, Maharashtra 411038. Clickmates Photography Studio."
    },
    {
      q: "How can I book a session featured in Clickmates Studio portfolio?",
      a: "Booking your session is simple: click 'Book Studio Session', call +91 96999 45608, or send us a message on WhatsApp with your preferred service and shoot date."
    }
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" }
  ]

  return (
    <div className="pt-20 pb-20 bg-[#FFFDFB] text-[#242424] font-body selection:bg-[#ED78A8] selection:text-white min-h-screen">
      <SEOHead
        title="Photography Portfolio Gallery in Pune | Clickmates Studio"
        description="Explore Clickmates Studio's photography portfolio gallery in Kothrud, Pune, featuring baby, newborn, maternity, family, kids, portrait and event photography."
        keywords="Photography Portfolio Pune, baby photography portfolio Pune, newborn photography gallery Pune, maternity photoshoot portfolio Pune, family photography gallery Pune, event photography portfolio Pune, Clickmates Studio portfolio, photographer in Kothrud Pune, photography studio Kothrud, Kothrud, Paud Road, Bhusari Colony, Pune, Maharashtra"
        canonicalUrl={`https://${brandDetails.domain}/portfolio`}
        faqs={portfolioFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. PORTFOLIO HERO SECTION (H1) */}
      <section className="relative py-16 sm:py-24 border-b border-[#ED78A8]/20 text-center overflow-hidden bg-gradient-to-b from-[#FFF0F6] via-[#FFFDFB] to-[#FFFDFB]">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ED78A8]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-nav text-[#ED78A8] bg-white px-4 py-1.5 rounded-full border border-[#ED78A8]/30 shadow-xs">
            CLICKMATES STUDIO GALLERY
          </span>

          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#242424] tracking-tight leading-tight">
            Photography Portfolio Gallery in Kothrud, Pune
          </h1>

          <p className="text-[#555555] text-sm sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Welcome to the official visual gallery of <strong className="font-medium text-[#242424]">Clickmates Studio</strong>. Explore our portfolio of baby milestones, gentle newborn care, luxury maternity sessions, heartwarming family portraits, and candid event celebrations across Pune, Maharashtra.
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW & LOCAL SEO SECTION (H2) */}
      <section className="py-10 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 text-left">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              REAL MEMORIES & ARTISTRY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424]">
              Explore Our Photography Portfolio in Kothrud, Pune
            </h2>
            <p className="text-[#555555] text-sm sm:text-base font-light leading-relaxed">
              Every picture in our gallery represents a real family milestone captured with love and precision at our studio located on main Paud Road near Bhusari Colony in Kothrud, Pune. Filter through our specialized categories below to discover our work as a leading <strong className="font-medium text-[#242424]">photographer in Kothrud Pune</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES FILTER TABS & PHOTO GALLERY (H2) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424]">
            Specialized Photography Categories in Pune
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] font-light">
            Select a category tab to view high-resolution photographs from our studio sessions:
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto p-3 sm:p-5 rounded-3xl bg-[#FFF0F6]/60 border border-[#ED78A8]/20 shadow-xs">
          <button
            onClick={() => {
              setSelectedCategory('all')
              setLightboxIndex(null)
            }}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold font-nav uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/30 scale-105'
                : 'bg-white text-[#555555] hover:text-[#ED78A8] hover:bg-[#FFF0F6] border border-[#ED78A8]/20 shadow-xs'
            }`}
          >
            ALL PHOTOS ({allPhotos.length})
          </button>
          {portfolioCategories.map((cat) => {
            const active = selectedCategory === cat.slug
            const count = cat.images ? cat.images.length : 0
            return (
              <button
                key={cat.slug}
                onClick={() => {
                  setSelectedCategory(cat.slug)
                  setLightboxIndex(null)
                }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold font-nav uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  active
                    ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/30 scale-105'
                    : 'bg-white text-[#555555] hover:text-[#ED78A8] hover:bg-[#FFF0F6] border border-[#ED78A8]/20 shadow-xs'
                }`}
              >
                {cat.badge} ({count})
              </button>
            )
          })}
        </div>

        {/* Photo Gallery Masonry / Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((imgItem, idx) => (
            <div
              key={imgItem.id || idx}
              onClick={() => setLightboxIndex(idx)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group bg-[#1a1819] border border-[#ED78A8]/20 shadow-md hover:shadow-2xl hover:shadow-[#ED78A8]/20 transition-all duration-500 transform hover:scale-[1.02]"
            >
              <img
                src={imgItem.image}
                alt={imgItem.alt || `${imgItem.title} - Clickmates Studio Pune`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain max-h-[550px] transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase font-nav text-[#ED78A8] bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10 inline-block">
                    {imgItem.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold drop-shadow-md text-white">
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
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {activeLightboxItem && (
        <LightboxModal
          item={activeLightboxItem}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
          onOpenBooking={onOpenBooking}
        />
      )}

      {/* 5. LOCAL SEO GEOGRAPHIC FOOTPRINT (H2) */}
      <section className="py-12 bg-[#FFF0F6]/30 border-y border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#ED78A8]/20 space-y-4">
            <div className="flex items-center gap-2 text-[#ED78A8]">
              <MapPin className="w-5 h-5" />
              <h2 className="font-heading text-lg sm:text-xl font-bold text-[#242424]">
                Serving Families Across Kothrud & Pune, Maharashtra
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
              Our studio photography portfolio reflects clients traveling from across Pune, including <span className="text-[#ED78A8] font-medium">Bhusari Colony</span>, <span className="text-[#ED78A8] font-medium">Paud Road</span>, <span className="text-[#ED78A8] font-medium">Karve Nagar</span>, <span className="text-[#ED78A8] font-medium">Erandwane</span>, <span className="text-[#ED78A8] font-medium">Deccan</span>, <span className="text-[#ED78A8] font-medium">Shivajinagar</span>, <span className="text-[#ED78A8] font-medium">Bavdhan</span>, <span className="text-[#ED78A8] font-medium">Aundh</span>, <span className="text-[#ED78A8] font-medium">Baner</span>, <span className="text-[#ED78A8] font-medium">Wakad</span>, <span className="text-[#ED78A8] font-medium">Pashan</span>, and <span className="text-[#ED78A8] font-medium">Kothrud</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (H2) */}
      <section className="py-14 sm:py-20 bg-[#FFFDFB] border-b border-[#ED78A8]/20" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2.5">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold font-nav uppercase tracking-widest text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/30 shadow-xs">
              PORTFOLIO FAQS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              Frequently Asked Questions About Our Portfolio
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm">
              Answers to questions about navigating our photo galleries and booking studio sessions in Pune.
            </p>
          </div>

          <div className="space-y-3">
            {portfolioFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#ED78A8] shadow-md ring-1 ring-[#ED78A8]/20'
                      : 'border-[#FFF0F6] shadow-xs hover:border-[#ED78A8]/40'
                  }`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[#242424] hover:text-[#ED78A8] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2" itemProp="name">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ED78A8] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#ED78A8] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#555555] font-body font-light leading-relaxed border-t border-[#FFF0F6] pl-7 pt-2.5" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA & STUDIO ADDRESS SECTION (H2) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFB] via-[#FFF0F6]/60 to-[#FFFDFB] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#242424] tracking-tight">
            Book Your Photoshoot at Clickmates Studio
          </h2>
          <p className="text-[#555555] text-sm sm:text-lg font-light max-w-2xl mx-auto">
            Inspired by our portfolio? Let's turn your family's precious moments into digital heirlooms.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#ED78A8]/20 shadow-md text-left space-y-3 max-w-2xl mx-auto text-xs sm:text-sm">
            <h3 className="font-heading font-bold text-[#242424] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ED78A8]" />
              Official Studio Location:
            </h3>
            <p className="text-[#555555] font-light pl-6">
              Ishana II, Office No. 2, Sr. No. 77/2, Left Bhusari Colony, 38 Paud Road, Kothrud, Pune, Maharashtra 411038. Clickmates Photography Studio
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 font-nav text-xs font-bold tracking-widest uppercase">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-lg shadow-[#ED78A8]/25 hover:shadow-xl cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              BOOK A STUDIO SESSION
            </button>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[#242424] bg-white hover:bg-[#FFF0F6] border border-[#ED78A8]/30 transition-all duration-300 shadow-xs"
            >
              VIEW PACKAGES & PRICING →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}