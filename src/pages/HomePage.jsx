import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronDown
} from 'lucide-react'
import {
  whyChooseUsData,
  processSteps,
  instagramFeed,
  brandDetails
} from '../data/photographyData'
import HeroCarousel from '../components/HeroCarousel'
import ServiceCarousel from '../components/ServiceCarousel'
import MilestoneJourneyCarousel from '../components/MilestoneJourneyCarousel'
import BabyShootCarousel from '../components/BabyShootCarousel'
import PackagesSection from '../components/PackagesSection'
import MarqueeStrip from '../components/MarqueeStrip'
import SEOHead from '../components/SEOHead'
import TestimonialCarousel from '../components/TestimonialCarousel'

// Category asset imports for homepage
import m16 from '../assets/maternity/maternity13.jpg'
import baby10 from '../assets/baby/baby10.jpg'

export default function HomePage({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const homeFaqs = [
    {
      q: "Where is Clickmates Studio located in Kothrud, Pune?",
      a: "Clickmates Studio is a professional photography studio in Kothrud, Pune, located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038."
    },
    {
      q: "What photography services in Kothrud and Pune does Clickmates Studio offer?",
      a: "Clickmates Studio offers baby photography Pune, newborn photography Pune, maternity photoshoot Pune, family photography Pune, portrait photography Pune, cake smash photography Pune, and event photography Pune."
    },
    {
      q: "Why is Clickmates Studio the top photography studio in Kothrud, Pune?",
      a: "As a leading professional photography studio Pune, Clickmates Studio provides sanitized baby props, climate-controlled warmth, certified newborn safety posing, designer maternity gowns, and custom theme backdrops."
    },
    {
      q: "Which nearby areas in Pune does Clickmates Studio serve?",
      a: "Located on Paud Road in Kothrud, our photography studio near Paud Road serves families from Bhusari Colony, Paud Road, Karve Nagar, Erandwane, Deccan, Shivajinagar, Bavdhan, Aundh, Baner, Wakad, Pashan, and Kothrud."
    },
    {
      q: "How can I book a photoshoot session at Clickmates Studio in Kothrud, Pune?",
      a: "You can book your photography session by clicking 'Book Your Session', calling +91 96999 45608, or contacting Clickmates Studio directly on WhatsApp."
    }
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" }
  ]

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#242424] font-body selection:bg-[#ED78A8] selection:text-white" itemScope itemType="https://schema.org/WebPage">
      <SEOHead
        title="Photography Studio in Kothrud, Pune | Clickmates Studio"
        description="Clickmates Studio is a professional photography studio in Kothrud, Pune, offering baby, newborn, maternity, family, kids, portrait and event photography. Book your session today."
        keywords="Photography Studio in Kothrud Pune, photography studio Kothrud, photographer in Kothrud Pune, photography studio in Pune, professional photographer in Pune, professional photography studio Pune, photoshoot studio in Kothrud, photoshoot studio in Pune, photographer near Kothrud, photography services in Kothrud, photography services in Pune, baby photography Pune, baby photoshoot Pune, baby photographer Pune, baby photoshoot studio Pune, kids photography Pune, kids photoshoot Pune, child photography Pune, 1 year baby photoshoot Pune, first birthday photoshoot Pune, cake smash photography Pune, newborn photography Pune, newborn photographer Pune, newborn photoshoot Pune, newborn baby photoshoot Pune, newborn photography studio Pune, newborn photoshoot studio Pune, maternity photography Pune, maternity photoshoot Pune, maternity photographer Pune, maternity photoshoot studio Pune, pregnancy photoshoot Pune, maternity photography studio Pune, family photography Pune, family photographer Pune, family photoshoot Pune, family portrait photography Pune, kids and family photography Pune, portrait photography Pune, professional photoshoot Pune, event photography Pune, birthday photography Pune, baby shower photography Pune, couple photography Pune, model photography Pune, Kothrud Pune, Kothrud photography studio, photography studio Kothrud Pune, photographer Kothrud Pune, photoshoot studio Kothrud, Paud Road photography studio, photography studio near Paud Road, photographer near Kothrud, photography studio Pune Maharashtra, photographer Pune Maharashtra, Bhusari Colony, Paud Road, Karve Nagar, Erandwane, Deccan, Shivajinagar, Bavdhan, Aundh, Baner, Wakad, Pashan"
        canonicalUrl={`https://${brandDetails.domain}/`}
        faqs={homeFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 1 & 2: DYNAMIC HERO CAROUSEL */}
      <HeroCarousel onOpenBooking={onOpenBooking} />

      {/* INFINITE SCROLLING IMAGE STRIP */}
      <MarqueeStrip />

      {/* SECTION 3: INTRODUCTION / ASYMMETRICAL IMAGE STACK STORY */}
      <section className="py-12 sm:py-28 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative Content */}
            <div className="lg:col-span-7 space-y-6 text-left reveal-on-scroll">
              <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20 max-w-full text-center leading-normal">
                CLICKMATES STUDIO | KOTHRUD, PUNE
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#242424] leading-tight">
                Professional Photography Studio in Kothrud, Pune
              </h1>

              <p className="text-[#666666] text-base sm:text-lg font-light leading-relaxed">
                Clickmates Studio is a premier <strong className="font-medium text-[#242424]">photography studio in Kothrud, Pune</strong>, recognized as a leading <strong className="font-medium text-[#242424]">professional photography studio Pune</strong> wide. Conveniently located at Paud Road in Bhusari Colony, our studio offers specialized <strong className="font-medium text-[#242424]">photography services in Kothrud</strong> and <strong className="font-medium text-[#242424]">photography services in Pune</strong> for newborn, baby, maternity, family, portrait, and celebration event sessions. Whether you are looking for an expert <strong className="font-medium text-[#242424]">photographer in Kothrud Pune</strong> or a state-of-the-art <strong className="font-medium text-[#242424]">photoshoot studio in Kothrud</strong>, Clickmates Studio delivers stunning visual art tailored to your journey.
              </p>

              {/* GEO Answer Entity Summary */}
              <div className="bg-[#FFF0F6]/50 p-5 rounded-2xl border border-[#ED78A8]/20 space-y-2 text-xs sm:text-sm" itemScope itemType="https://schema.org/LocalBusiness">
                <meta itemProp="name" content="Clickmates Studio" />
                <meta itemProp="telephone" content={brandDetails.phone} />
                <p className="font-semibold text-[#242424] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ED78A8]" />
                  <span>Exact Studio Location (Paud Road photography studio near Bhusari Colony):</span>
                </p>
                <p className="text-[#555555] font-light pl-6" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">{brandDetails.fullAddress}</span>
                </p>
                <div className="pt-2 flex flex-wrap gap-3 pl-6 font-nav text-xs">
                  <Link to="/services" className="text-[#ED78A8] font-bold underline hover:text-[#d65f8f]">
                    View Photography Services →
                  </Link>
                  <Link to="/packages" className="text-[#ED78A8] font-bold underline hover:text-[#d65f8f]">
                    Explore Packages & Pricing →
                  </Link>
                  <Link to="/contact" className="text-[#ED78A8] font-bold underline hover:text-[#d65f8f]">
                    Book Studio Session →
                  </Link>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 font-nav text-xs font-semibold uppercase tracking-wider">
                <button
                  onClick={onOpenBooking}
                  data-cursor="click"
                  className="w-[250px] sm:w-auto px-5 py-3 sm:px-8 sm:py-4 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-lg shadow-[#ED78A8]/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  Book Studio Session
                </button>
                <Link
                  to="/services"
                  data-cursor="click"
                  className="w-[250px] sm:w-auto px-5 py-3 sm:px-8 sm:py-4 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8] hover:text-white transition-all duration-300 border border-[#ED78A8]/30 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Explore All Services <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Collages */}
            <div className="lg:col-span-5 relative reveal-scale reveal-delay-1">
              <div className="relative mx-auto max-w-xs sm:max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={m16}
                    alt="Clickmates Studio - Photography Studio in Kothrud, Pune maternity and baby shoot setup"
                    className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                  <img
                    src={baby10}
                    alt="Professional photographer in Kothrud Pune Clickmates Studio"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CURATED SERVICES CAROUSEL */}
      <ServiceCarousel onOpenBooking={onOpenBooking} />

      {/* SECTION 5: MILESTONE JOURNEY CAROUSEL */}
      <MilestoneJourneyCarousel onOpenBooking={onOpenBooking} />

      {/* SECTION 5.5: FEATURED BABY SHOOT CAROUSEL (B1 - B6) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BabyShootCarousel onOpenBooking={onOpenBooking} />
      </div>



      {/* SECTION 7: WHY CHOOSE CLICKMATES */}
      <section className="pt-8 pb-14 sm:py-28 bg-[#FFF0F6]/40 border-y border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2.5 sm:space-y-3 reveal-on-scroll">
            <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              OUR STUDIO PROMISE
            </span>
            <h2 className="font-heading text-2xl sm:text-5xl font-bold text-[#242424]">
              Why Families Trust ClickMates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-[340px] md:max-w-none mx-auto reveal-scale">
            {whyChooseUsData.map((item) => (
              <div
                key={item.number}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#ED78A8]/20 shadow-md hover:shadow-2xl hover:border-[#ED78A8] transition-all duration-500 flex flex-col justify-between space-y-3 sm:space-y-4 transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFF0F6] text-[#ED78A8] flex items-center justify-center font-extrabold font-heading text-base sm:text-lg">
                  {item.number}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#242424]">{item.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed font-body font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: SIMPLE STEP BOOKING PROCESS */}
      <section className="py-20 sm:py-28 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 reveal-on-scroll">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              EASY STEPS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
              How Your Shoot Happens
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative reveal-scale">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative bg-white p-6 rounded-3xl border-2 border-[#ED78A8]/20 shadow-md hover:shadow-2xl hover:border-[#ED78A8] transition-all duration-500 space-y-3 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <span className="text-3xl font-heading font-extrabold text-[#ED78A8]">{step.step}</span>
                <h3 className="font-heading font-bold text-base text-[#242424]">{step.title}</h3>
                <p className="text-xs text-[#666666] leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: REAL CLIENT REVIEWS CAROUSEL */}
      <TestimonialCarousel />

      {/* SECTION 10: OFFICIAL PHOTOGRAPHY PACKAGES SECTION */}
      <PackagesSection onOpenBooking={onOpenBooking} />

      {/* HOMEPAGE SEO GEO & SERVICES HUB */}
      <section className="py-16 sm:py-24 bg-[#FFF0F6]/30 border-y border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 reveal-on-scroll">
            <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              PHOTOGRAPHY SERVICES IN KOTHRUD, PUNE, MAHARASHTRA
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              Top Photography Studio in Kothrud, Pune
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-light leading-relaxed">
              At Clickmates Studio, we bring warmth, artistry, and professional excellence to every session. As a leading <strong className="font-medium text-[#242424]">professional photographer in Pune</strong> and dedicated <strong className="font-medium text-[#242424]">photography studio in Pune</strong>, we offer high-ranking studio sessions and creative photo shoots for families across Pune, Maharashtra.
            </p>
          </div>

          {/* Service & Location Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1: Baby & Newborn Photography Studio Pune */}
            <div className="bg-white p-6 rounded-3xl border border-[#ED78A8]/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">
                👶
              </div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">
                Baby & Newborn Photography Studio Pune
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
                Looking for an expert <strong className="font-medium text-[#242424]">baby photographer Pune</strong> or a safe <strong className="font-medium text-[#242424]">newborn photography studio Pune</strong>? We specialize in <strong className="font-medium text-[#242424]">baby photography Pune</strong>, <strong className="font-medium text-[#242424]">baby photoshoot Pune</strong>, and gentle <strong className="font-medium text-[#242424]">newborn baby photoshoot Pune</strong> sessions. Our <strong className="font-medium text-[#242424]">baby photoshoot studio Pune</strong> features sanitized setups for <strong className="font-medium text-[#242424]">kids photography Pune</strong>, <strong className="font-medium text-[#242424]">kids photoshoot Pune</strong>, <strong className="font-medium text-[#242424]">child photography Pune</strong>, memorable <strong className="font-medium text-[#242424]">1 year baby photoshoot Pune</strong>, <strong className="font-medium text-[#242424]">first birthday photoshoot Pune</strong>, and fun <strong className="font-medium text-[#242424]">cake smash photography Pune</strong>. As a certified <strong className="font-medium text-[#242424]">newborn photographer Pune</strong>, we offer comfortable <strong className="font-medium text-[#242424]">newborn photoshoot Pune</strong>, <strong className="font-medium text-[#242424]">newborn photography Pune</strong>, and <strong className="font-medium text-[#242424]">newborn photoshoot studio Pune</strong> experiences.
              </p>
            </div>

            {/* Card 2: Maternity & Family Photography Pune */}
            <div className="bg-white p-6 rounded-3xl border border-[#ED78A8]/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">
                🤰
              </div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">
                Maternity & Family Photography Pune
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
                Capture the joy of parenthood with our top-rated <strong className="font-medium text-[#242424]">maternity photography studio Pune</strong> and <strong className="font-medium text-[#242424]">maternity photoshoot studio Pune</strong>. Work with an acclaimed <strong className="font-medium text-[#242424]">maternity photographer Pune</strong> for <strong className="font-medium text-[#242424]">maternity photography Pune</strong>, glowing <strong className="font-medium text-[#242424]">maternity photoshoot Pune</strong>, and elegant <strong className="font-medium text-[#242424]">pregnancy photoshoot Pune</strong> sessions. We also offer heartwarming <strong className="font-medium text-[#242424]">family photography Pune</strong>, sessions with a skilled <strong className="font-medium text-[#242424]">family photographer Pune</strong>, <strong className="font-medium text-[#242424]">family photoshoot Pune</strong>, classic <strong className="font-medium text-[#242424]">family portrait photography Pune</strong>, and vibrant <strong className="font-medium text-[#242424]">kids and family photography Pune</strong>.
              </p>
            </div>

            {/* Card 3: Portrait, Event & Special Shoots */}
            <div className="bg-white p-6 rounded-3xl border border-[#ED78A8]/20 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">
                ✨
              </div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">
                Portrait, Event & Professional Shoots
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
                Beyond baby and maternity sessions, Clickmates Studio is your go-to <strong className="font-medium text-[#242424]">professional photography studio Pune</strong> for expressive <strong className="font-medium text-[#242424]">portrait photography Pune</strong> and a tailored <strong className="font-medium text-[#242424]">professional photoshoot Pune</strong>. We provide comprehensive <strong className="font-medium text-[#242424]">event photography Pune</strong>, capturing candid highlights for <strong className="font-medium text-[#242424]">birthday photography Pune</strong>, ceremonial <strong className="font-medium text-[#242424]">baby shower photography Pune</strong>, romantic <strong className="font-medium text-[#242424]">couple photography Pune</strong>, and sleek <strong className="font-medium text-[#242424]">model photography Pune</strong>.
              </p>
            </div>

          </div>

          {/* Local Area Coverage & Location Hierarchy */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#ED78A8]/20 space-y-4">
            <div className="flex items-center gap-2 text-[#ED78A8]">
              <MapPin className="w-5 h-5" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#242424]">
                Local SEO & Geographic Hierarchy: Kothrud → Pune → Maharashtra
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
              As a premier <strong className="font-medium text-[#242424]">Kothrud photography studio</strong>, Clickmates Studio is established as the premier <strong className="font-medium text-[#242424]">photography studio Kothrud Pune</strong> and leading <strong className="font-medium text-[#242424]">photographer Kothrud Pune</strong>. Situated as a convenient <strong className="font-medium text-[#242424]">Paud Road photography studio</strong> and trusted <strong className="font-medium text-[#242424]">photography studio near Paud Road</strong>, we serve as the ideal <strong className="font-medium text-[#242424]">photographer near Kothrud</strong> and premier <strong className="font-medium text-[#242424]">photoshoot studio Kothrud</strong> for families across <strong className="font-medium text-[#242424]">Kothrud Pune</strong>.
            </p>
            <div className="pt-2 border-t border-[#FFF0F6]">
              <p className="text-xs text-[#777777] font-light leading-relaxed">
                <strong className="text-[#242424]">Nearby Areas Served:</strong> We proudly welcome clients from nearby localities across Pune including <span className="text-[#ED78A8] font-medium">Bhusari Colony</span>, <span className="text-[#ED78A8] font-medium">Paud Road</span>, <span className="text-[#ED78A8] font-medium">Karve Nagar</span>, <span className="text-[#ED78A8] font-medium">Erandwane</span>, <span className="text-[#ED78A8] font-medium">Deccan</span>, <span className="text-[#ED78A8] font-medium">Shivajinagar</span>, <span className="text-[#ED78A8] font-medium">Bavdhan</span>, <span className="text-[#ED78A8] font-medium">Aundh</span>, <span className="text-[#ED78A8] font-medium">Baner</span>, <span className="text-[#ED78A8] font-medium">Wakad</span>, <span className="text-[#ED78A8] font-medium">Pashan</span>, and all of <span className="text-[#ED78A8] font-medium">Kothrud</span> as a trusted <strong className="font-medium text-[#242424]">photography studio Pune Maharashtra</strong> and top <strong className="font-medium text-[#242424]">photographer Pune Maharashtra</strong>.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* HOMEPAGE GEO / AEO DIRECT ANSWERS & FAQS ACCORDION */}
      <section className="pt-8 pb-14 sm:py-20 bg-[#FFFDFB] border-b border-[#FFF0F6]" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20 max-w-full text-center leading-normal">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
              Frequently Asked Questions About ClickMates
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm font-light">
              Everything you need to know about our baby, newborn, and maternity photography studio in Pune.
            </p>
          </div>

          <div className="space-y-3 max-w-[340px] sm:max-w-none mx-auto">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'border-[#ED78A8] shadow-md ring-1 ring-[#ED78A8]/20'
                    : 'border-[#FFF0F6] shadow-xs hover:border-[#ED78A8]/40'
                    }`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-heading font-bold text-sm sm:text-lg text-[#242424] flex items-center gap-2 pr-2" itemProp="name">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ED78A8] shrink-0" />
                      <span>{faq.q}</span>
                    </h3>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#ED78A8] text-white rotate-180' : 'bg-[#FFF0F6] text-[#ED78A8]'
                      }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-left border-t border-[#FFF0F6] animate-fade-in" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-[#555555] text-xs sm:text-sm font-light leading-relaxed pl-6 sm:pl-7 pt-2.5" itemProp="text">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: INSTAGRAM IMAGE GRID */}
      <section className="py-20 sm:py-28 bg-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 reveal-on-scroll">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              @CLICKMATES_PHOTOGRAPHY
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
              Follow Our Stories
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 reveal-scale">
            {instagramFeed.map((img) => (
              <div key={img.id} className="relative rounded-2xl overflow-hidden h-48 sm:h-64 group" data-cursor="view">
                <img
                  src={img.image}
                  alt="ClickMates Photography studio session behind the scenes on Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-nav font-semibold p-2 text-center">
                  {img.tag}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={brandDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="click"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase font-nav text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8] hover:text-white transition border border-[#ED78A8]/30 shadow-sm"
            >
              Follow ClickMates on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL BRIGHT EMOTIONAL CTA */}
      <section className="py-24 sm:py-32 bg-[#FFF0F6] text-[#242424] relative overflow-hidden text-center border-t border-[#ED78A8]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 reveal-scale">
          <h2 className="font-heading text-4xl sm:text-6xl font-bold leading-tight text-[#242424]">
            Your Story Deserves to Be Remembered.
          </h2>

          <p className="text-[#666666] text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Let's turn today's beautiful moments into memories you'll treasure for years to come.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 font-nav text-xs font-semibold uppercase tracking-wider">
            <button
              onClick={onOpenBooking}
              data-cursor="click"
              className="w-[250px] sm:w-auto px-5 py-3 sm:px-9 sm:py-4 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-xl shadow-[#ED78A8]/30 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              Book Your Shoot
            </button>

            <a
              href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates%20Team!`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="click"
              className="w-[250px] sm:w-auto px-5 py-3 sm:px-9 sm:py-4 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}