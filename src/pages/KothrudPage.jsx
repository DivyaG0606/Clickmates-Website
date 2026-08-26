import { useState } from 'react'
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, ShieldCheck, Heart, Camera, Calendar, ChevronDown } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { brandDetails, portfolioItems } from '../data/photographyData'
import m16 from '../assets/m16.jpg'
import baby15 from '../assets/baby15.jpg'

export default function KothrudPage({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const faqs = [
    {
      q: "Where is ClickMates Photography Studio located in Kothrud?",
      a: "ClickMates Photography Studio is conveniently located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038 (near Paud Road landmark)."
    },
    {
      q: "What photography services are available at the Kothrud studio?",
      a: "Our Kothrud photography studio specializes in baby milestone photography, newborn care photography, maternity portraiture, family portraits, kids portrait shoots, and event photography."
    },
    {
      q: "Is the ClickMates Kothrud studio baby-friendly and climate-controlled?",
      a: "Yes! Our Kothrud studio features sanitized props, temperature-controlled environment, dedicated nursing and baby changing rooms, baby-safe soft lighting, and hygiene-certified studio equipment."
    },
    {
      q: "How can parents in Kothrud & Paud Road book a photoshoot?",
      a: "You can book directly by calling +91 96999 45608, sending a WhatsApp message to +91 96999 45608, or clicking the 'Book Session' button on our website."
    }
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/services" },
    { name: "Kothrud Studio", url: "/photography-studio-kothrud" }
  ]

  const kothrudPhotos = portfolioItems.slice(0, 6)

  return (
    <div className="pt-24 pb-20 bg-[#FFFDFB] text-[#242424] font-body selection:bg-[#ED78A8] selection:text-white" itemScope itemType="https://schema.org/WebPage">
      <SEOHead
        title="Photography Studio in Kothrud, Pune | ClickMates Photography"
        description="Looking for a professional photography studio in Kothrud? ClickMates Photography on Paud Road offers premier baby, newborn, maternity, family & event photography."
        keywords="photography studio Kothrud, photographer Kothrud, baby photographer Kothrud, newborn photographer Kothrud, maternity photographer Kothrud, family photographer Kothrud, photo studio Paud Road, photography studio Bhusari Colony"
        canonicalUrl={`https://${brandDetails.domain}/photography-studio-kothrud`}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFF0F6]/60 via-[#FFFDFB] to-[#FFFDFB] py-16 sm:py-24 border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0F6] border border-[#ED78A8]/30 text-[#ED78A8] text-xs font-semibold uppercase tracking-wider font-nav">
                <MapPin className="w-3.5 h-3.5" />
                <span>Premier Photography Studio Kothrud</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#242424] leading-tight">
                Photography Studio in <span className="text-[#ED78A8]">Kothrud, Pune</span>
              </h1>
              <p className="text-[#666666] text-base sm:text-lg font-light leading-relaxed">
                Welcome to ClickMates Photography Studio in Left Bhusari Colony, Paud Road, Kothrud. We create heartwarming, high-end visual stories for baby milestones, serene newborn moments, elegant maternity portraits, and joyful family gatherings.
              </p>

              {/* GEO Direct Answer Box with LocalBusiness Microdata */}
              <div className="bg-white p-5 rounded-2xl border border-[#ED78A8]/20 shadow-sm space-y-2 text-xs sm:text-sm" itemScope itemType="https://schema.org/LocalBusiness">
                <meta itemProp="name" content="ClickMates Photography Studio Kothrud" />
                <meta itemProp="telephone" content={brandDetails.phone} />
                <p className="font-semibold text-[#242424] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                  <span>Kothrud Studio Address:</span>
                </p>
                <p className="text-[#555555] font-light pl-6" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">{brandDetails.fullAddress}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 font-nav text-sm">
                <button
                  onClick={onOpenBooking}
                  data-cursor="click"
                  className="px-8 py-4 bg-[#ED78A8] hover:bg-[#d65f8f] text-white font-semibold rounded-full shadow-lg shadow-[#ED78A8]/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Kothrud Session</span>
                </button>
                <a
                  href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates%20Photography%20Studio%20Kothrud!%20I%20would%20like%20to%20enquire%20about%20a%20photoshoot.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="click"
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Studio</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={baby15}
                  alt="Baby photography at ClickMates Kothrud studio Pune"
                  className="rounded-3xl shadow-xl h-64 sm:h-80 w-full object-cover border-4 border-white"
                />
                <img
                  src={m16}
                  alt="Maternity photography at ClickMates studio Paud Road Kothrud"
                  className="rounded-3xl shadow-xl h-64 sm:h-80 w-full object-cover border-4 border-white mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Entity GEO / AEO Structured Highlights */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
            WHY CLICKMATES KOTHRUD
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
            Why Families in Kothrud Choose ClickMates
          </h2>
          <p className="text-[#666666] text-base font-light">
            Located right on Paud Road in Left Bhusari Colony, our studio offers comfort, artistic excellence, and complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] text-[#ED78A8] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#242424]">Sanitised & Baby Safe Studio</h3>
            <p className="text-[#666666] text-sm leading-relaxed font-light">
              Every prop, wrap, backdrop, and surface at our Kothrud studio is thoroughly disinfected prior to every newborn and baby session.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] text-[#ED78A8] flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#242424]">Private Comfort & Nursing Facilities</h3>
            <p className="text-[#666666] text-sm leading-relaxed font-light">
              We provide dedicated private changing rooms, nursing nooks, and climate control so parents and babies feel relaxed throughout the session.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] text-[#ED78A8] flex items-center justify-center font-bold">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#242424]">Professional Lighting & Props</h3>
            <p className="text-[#666666] text-sm leading-relaxed font-light">
              Equipped with soft continuous lights, handcrafted wooden props, organic fabrics, and luxury gowns for maternity shoots.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 bg-[#FFF0F6]/30 border-y border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="font-heading text-3xl font-bold text-[#242424]">
              Kothrud Studio Visual Portfolio
            </h2>
            <p className="text-[#666666] text-sm font-light">
              Real portraits captured inside our Kothrud photography studio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {kothrudPhotos.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-sm h-72" data-cursor="view">
                <img
                  src={item.image}
                  alt={`${item.title} - ClickMates Kothrud Studio Pune`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-nav uppercase text-[#ED78A8] font-bold tracking-widest">{item.category}</span>
                  <h4 className="font-heading text-lg font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Directions Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              LOCATION & DIRECTIONS
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#242424]">
              Visit ClickMates Studio on Paud Road, Kothrud
            </h2>
            <p className="text-[#666666] text-sm font-light leading-relaxed">
              Located conveniently in Left Bhusari Colony right along Paud Road, our studio is easily accessible from Erandwane, Karve Nagar, Deccan, Bavdhan, Shivajinagar, and Chandani Chowk.
            </p>

            <div className="space-y-3 text-sm text-[#444444]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ED78A8] shrink-0 mt-1" />
                <span>{brandDetails.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#ED78A8] shrink-0" />
                <span>{brandDetails.phone} / {brandDetails.phone2}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#ED78A8] shrink-0" />
                <span>{brandDetails.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Clickmates+Photography+Studio+Kothrud+Pune"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="click"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#242424] hover:bg-black text-white text-xs font-semibold uppercase font-nav tracking-wider rounded-full transition-all"
              >
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-96">
            <iframe
              title="ClickMates Photography Studio Kothrud Google Map"
              src={brandDetails.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Kothrud FAQs (AEO/GEO Section) with Interactive Accordion */}
      <section className="py-16 bg-[#FFF0F6]/20 border-t border-[#FFF0F6]" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">DIRECT ANSWERS & FAQS</span>
            <h2 className="font-heading text-3xl font-bold text-[#242424]">
              Kothrud Studio Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#ED78A8] shadow-md ring-1 ring-[#ED78A8]/20' : 'border-slate-100 shadow-sm'
                    }`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-3 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-heading font-bold text-lg text-[#242424] flex items-center gap-2" itemProp="name">
                      <CheckCircle2 className="w-5 h-5 text-[#ED78A8] shrink-0" />
                      <span>{faq.q}</span>
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#ED78A8] text-white rotate-180' : 'bg-[#FFF0F6] text-[#ED78A8]'
                      }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-left border-t border-[#FFF0F6]" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-[#666666] text-sm font-light leading-relaxed pt-3 pl-7" itemProp="text">
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
    </div>
  )
}