import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  MessageCircle, 
  Calendar, 
  MapPin,
  CheckCircle2
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
import MasonryPortfolio from '../components/MasonryPortfolio'
import PackagesSection from '../components/PackagesSection'
import MarqueeStrip from '../components/MarqueeStrip'
import SEOHead from '../components/SEOHead'
import TestimonialCarousel from '../components/TestimonialCarousel'

import m16 from '../assets/m16.jpg'
import baby10 from '../assets/baby10.jpg'

export default function HomePage({ onOpenBooking }) {
  const homeFaqs = [
    {
      q: "Where is ClickMates Photography studio located in Pune?",
      a: "ClickMates Photography Studio is located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038, India."
    },
    {
      q: "What photography services does ClickMates Photography offer in Kothrud, Pune?",
      a: "ClickMates Photography specializes in baby photography, newborn safety shoots, maternity portraits, family portraits, baby milestone sessions (6-11 months, 1st birthday cake smash), and event photography."
    },
    {
      q: "What makes ClickMates Photography baby and newborn shoots safe and comfortable?",
      a: "Our Kothrud studio features sanitized props, climate-controlled warmth, baby-safe soft continuous lighting, private nursing rooms, and certified safety wrapping techniques for newborn babies."
    },
    {
      q: "Who is the top baby and maternity photographer in Kothrud, Pune?",
      a: "ClickMates Photography in Kothrud, Pune is widely trusted by parents across Pune for editorial quality maternity shoots, gentle newborn posing, creative baby themes, and transparent session packages."
    },
    {
      q: "Which localities in Pune does ClickMates Photography serve?",
      a: "ClickMates Photography serves families across Pune including Kothrud, Paud Road, Bhusari Colony, Karve Nagar, Erandwane, Deccan, Shivajinagar, Bavdhan, Pashan, Aundh, Baner, Wakad, Hinjewadi, Kharadi, Viman Nagar, and Pimpri-Chinchwad."
    },
    {
      q: "How far in advance should I book a newborn or maternity photoshoot in Pune?",
      a: "We recommend booking maternity shoots during your 28th to 34th week of pregnancy, and reserving newborn shoots while still pregnant based on your expected due date."
    },
    {
      q: "What are the opening hours and contact numbers for ClickMates Photography Studio?",
      a: "Our studio operates Monday to Sunday from 9:30 AM to 8:00 PM. You can call us directly at +91 96999 45608 or +91 90213 80417, or message us via WhatsApp."
    },
    {
      q: "How can I book a photoshoot session with ClickMates Photography?",
      a: "You can book your shoot by clicking 'Book Your Shoot' on our website, calling +91 96999 45608, or messaging us on WhatsApp at +91 96999 45608."
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#242424] font-body selection:bg-[#ED78A8] selection:text-white">
      <SEOHead
        title="ClickMates Photography | Photography Studio in Kothrud, Pune"
        description="ClickMates Photography is a professional photography studio in Kothrud, Pune, offering baby, newborn, maternity, family, milestone, and event photography."
        keywords="ClickMates Photography, Photography Studio Pune, Photography Studio Kothrud, Photographer Pune, Baby Photographer Pune, Newborn Photographer Pune, Maternity Photographer Pune, Family Photographer Pune"
        canonicalUrl={`https://${brandDetails.domain}/`}
        faqs={homeFaqs}
      />

      {/* SECTION 1 & 2: DYNAMIC HERO CAROUSEL */}
      <HeroCarousel onOpenBooking={onOpenBooking} />

      {/* INFINITE SCROLLING IMAGE STRIP */}
      <MarqueeStrip />

      {/* SECTION 3: INTRODUCTION / ASYMMETRICAL IMAGE STACK STORY */}
      <section className="py-20 sm:py-28 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
                CLICKMATES PHOTOGRAPHY STUDIO KOTHRUD
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#242424] leading-tight">
                ClickMates Photography Studio in <span className="text-[#ED78A8]">Kothrud, Pune</span>
              </h1>

              <p className="text-[#666666] text-base sm:text-lg font-light leading-relaxed">
                ClickMates Photography is a premier photography studio located in Left Bhusari Colony, Paud Road, Kothrud, Pune. We specialize in artistic baby milestone shoots, gentle newborn portraits, editorial maternity sessions, and timeless family gatherings.
              </p>

              {/* GEO Answer Entity Summary */}
              <div className="bg-[#FFF0F6]/50 p-5 rounded-2xl border border-[#ED78A8]/20 space-y-2 text-xs sm:text-sm">
                <p className="font-semibold text-[#242424] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ED78A8]" />
                  <span>Exact Studio Address:</span>
                </p>
                <p className="text-[#555555] font-light pl-6">
                  {brandDetails.fullAddress}
                </p>
                <div className="pt-2 flex flex-wrap gap-3 pl-6 font-nav text-xs">
                  <Link to="/services" className="text-[#ED78A8] font-bold underline hover:text-[#d65f8f]">
                    View Photography Services →
                  </Link>
                  <Link to="/packages" className="text-[#ED78A8] font-bold underline hover:text-[#d65f8f]">
                    Explore Packages & Pricing →
                  </Link>
                  <Link to="/contact" className="text-[#ED78A8] font-bold underline hover:text-[#d65f8f]">
                    Book Studio Shoot →
                  </Link>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 font-nav text-xs font-semibold uppercase tracking-wider">
                <button
                  onClick={onOpenBooking}
                  data-cursor="click"
                  className="px-8 py-4 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-lg shadow-[#ED78A8]/20 flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  Book Studio Session
                </button>
                <Link
                  to="/services"
                  data-cursor="click"
                  className="px-8 py-4 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8] hover:text-white transition-all duration-300 border border-[#ED78A8]/30 flex items-center gap-2"
                >
                  Explore All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Collages */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={m16}
                    alt="ClickMates Photography Studio Kothrud Pune"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                  <img
                    src={baby10}
                    alt="Baby photographer in Kothrud Pune ClickMates"
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

      {/* SECTION 6: EDITORIAL MASONRY PORTFOLIO */}
      <MasonryPortfolio onOpenBooking={onOpenBooking} />

      {/* SECTION 7: WHY CHOOSE CLICKMATES */}
      <section className="py-20 sm:py-28 bg-[#FFF0F6]/40 border-y border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              OUR STUDIO PROMISE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
              Why Families Trust ClickMates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item) => (
              <div
                key={item.number}
                className="p-8 rounded-3xl bg-white border border-[#FFF0F6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] text-[#ED78A8] flex items-center justify-center font-extrabold font-heading text-lg">
                  {item.number}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#242424]">{item.title}</h3>
                <p className="text-[#666666] text-xs sm:text-sm leading-relaxed font-body font-light">
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
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              EASY STEPS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
              How Your Shoot Happens
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {processSteps.map((step) => (
              <div key={step.step} className="relative bg-white p-6 rounded-3xl border border-[#FFF0F6] shadow-xs space-y-3">
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

      {/* HOMEPAGE GEO / AEO DIRECT ANSWERS & FAQS */}
      <section className="py-20 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              Frequently Asked Questions About ClickMates
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-[#FFF0F6] shadow-sm space-y-2 text-left">
                <h3 className="font-heading font-bold text-lg text-[#242424] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#ED78A8]" />
                  {faq.q}
                </h3>
                <p className="text-[#666666] text-sm font-light leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: INSTAGRAM IMAGE GRID */}
      <section className="py-20 sm:py-28 bg-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              @CLICKMATES_PHOTOGRAPHY
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
              Follow Our Stories
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
            {instagramFeed.map((img) => (
              <div key={img.id} className="relative rounded-2xl overflow-hidden h-48 sm:h-64 group" data-cursor="view">
                <img
                  src={img.image}
                  alt="ClickMates Instagram Story"
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="font-heading text-4xl sm:text-6xl font-bold leading-tight text-[#242424]">
            Your Story Deserves to Be Remembered.
          </h2>

          <p className="text-[#666666] text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Let's turn today's beautiful moments into memories you'll treasure for years to come.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 font-nav text-xs font-semibold uppercase tracking-wider">
            <button
              onClick={onOpenBooking}
              data-cursor="click"
              className="w-full sm:w-auto px-9 py-4 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-xl shadow-[#ED78A8]/30 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Your Shoot
            </button>

            <a
              href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates%20Team!`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="click"
              className="w-full sm:w-auto px-9 py-4 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
