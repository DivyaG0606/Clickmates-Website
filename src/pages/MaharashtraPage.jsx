import { useState } from 'react'
import { MessageCircle, Star, CheckCircle2, Calendar, ChevronDown } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { brandDetails } from '../data/photographyData'
import baby15 from '../assets/baby/baby15.jpg'
import m16 from '../assets/maternity/maternity13.jpg'

export default function MaharashtraPage({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const faqs = [
    {
      q: "Where is ClickMates Photography studio located in Maharashtra?",
      a: "Our central photography studio is located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038."
    },
    {
      q: "Does ClickMates Photography welcome clients traveling from other cities in Maharashtra?",
      a: "Yes! Families regularly travel from Pimpri-Chinchwad, Mumbai, Thane, Navi Mumbai, Nashik, Satara, Ahmednagar, Kolhapur, and Lonavala to experience our flagship photography studio in Kothrud, Pune."
    },
    {
      q: "Can outdoor maternity or event shoots be arranged outside Pune?",
      a: "Yes, on-location outdoor maternity and special event assignments can be arranged across Maharashtra upon prior consultation."
    }
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Maharashtra Photography Services", url: "/photography-services-maharashtra" }
  ]

  const regionCities = [
    "Pune", "Pimpri-Chinchwad", "Lonavala", "Navi Mumbai", "Mumbai", "Thane", "Nashik", "Satara", "Kolhapur", "Ahmednagar"
  ]

  return (
    <div className="pt-24 pb-20 bg-[#FFFDFB] text-[#242424] font-body selection:bg-[#ED78A8] selection:text-white" itemScope itemType="https://schema.org/WebPage">
      <SEOHead
        title="Photography Services in Maharashtra | ClickMates Photography"
        description="ClickMates Photography is a flagship photography studio based in Kothrud, Pune, providing baby, newborn, maternity & family photography services across Maharashtra."
        keywords="photography services Maharashtra, photography studio Maharashtra, baby photographer Maharashtra, maternity photoshoot Maharashtra, ClickMates Photography Studio"
        canonicalUrl={`https://${brandDetails.domain}/photography-services-maharashtra`}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFF0F6]/60 via-[#FFFDFB] to-[#FFFDFB] py-16 sm:py-24 border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0F6] border border-[#ED78A8]/30 text-[#ED78A8] text-xs font-semibold uppercase tracking-wider font-nav">
                <Star className="w-3.5 h-3.5 fill-[#ED78A8]" />
                <span>Regional Photography Hub</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#242424] leading-tight">
                Photography Services in <span className="text-[#ED78A8]">Maharashtra</span>
              </h1>
              <p className="text-[#666666] text-base sm:text-lg font-light leading-relaxed">
                ClickMates Photography operates a state-of-the-art photography studio in Kothrud, Pune, welcoming families from across Maharashtra for memorable baby shoots, newborn portraiture, editorial maternity sessions, and family reunions.
              </p>

              {/* Entity Address Box with LocalBusiness Microdata */}
              <div className="bg-white p-5 rounded-2xl border border-[#ED78A8]/20 shadow-sm space-y-2 text-xs sm:text-sm" itemScope itemType="https://schema.org/LocalBusiness">
                <meta itemProp="name" content="ClickMates Photography Studio" />
                <meta itemProp="telephone" content={brandDetails.phone} />
                <p className="font-semibold text-[#242424] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                  <span>Flagship Studio Headquarters:</span>
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
                  <span>Book Studio Session</span>
                </button>
                <a
                  href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates%20Photography!%20I%20would%20like%20to%20enquire%20about%20a%20shoot.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="click"
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={baby15}
                  alt="Baby photography session ClickMates Maharashtra"
                  className="rounded-3xl shadow-xl h-64 sm:h-80 w-full object-cover border-4 border-white"
                />
                <img
                  src={m16}
                  alt="Maternity photoshoot ClickMates Maharashtra"
                  className="rounded-3xl shadow-xl h-64 sm:h-80 w-full object-cover border-4 border-white mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Serviced Cities */}
      <section className="py-16 bg-[#FFF0F6]/30 border-y border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-heading text-3xl font-bold text-[#242424]">
            Serving Destinations Across Maharashtra
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {regionCities.map((city) => (
              <span key={city} className="px-4 py-2 bg-white rounded-full text-xs font-semibold text-[#444444] border border-[#ED78A8]/20 shadow-xs">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs with Interactive Accordion & Schema */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" itemScope itemType="https://schema.org/FAQPage">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">DIRECT ANSWERS</span>
          <h2 className="font-heading text-3xl font-bold text-[#242424]">
            Maharashtra Services Frequently Asked Questions
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
      </section>
    </div>
  )
}