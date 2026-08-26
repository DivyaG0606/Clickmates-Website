import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Calendar, CheckCircle2, ChevronDown } from 'lucide-react'
import { servicesData, brandDetails } from '../data/photographyData'
import SEOHead from '../components/SEOHead'

// Import real photography background asset
import baby12 from '../assets/baby12.jpg'

export default function ServicesPage({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const servicesFaqs = [
    {
      q: "What full range of photography services does ClickMates Studio offer in Pune?",
      a: "ClickMates Photography offers specialized baby photography, 100% newborn safety portraiture, luxury maternity gowns & shoots, family portraits, baby milestone shoots (100 days, 6 months sitting, 1st birthday cake smash), and event photography in Kothrud, Paud Road, and across Pune."
    },
    {
      q: "Where is the ClickMates Photography studio located for service sessions?",
      a: "Our photography studio is located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038—easily accessible for clients searching for a photo studio near me in Kothrud, Karve Nagar, Bavdhan, and Baner."
    },
    {
      q: "Does ClickMates offer outdoor photography sessions in Pune?",
      a: "Yes, we conduct outdoor golden-hour family portraiture and maternity shoots at scenic locations across Kothrud, Baner, Pashan Lake, Pune gardens, and private resort venues."
    },
    {
      q: "How long does a typical photography session take at ClickMates Studio?",
      a: "Session durations range from 1.5 hours for essential baby shoots to 3–4 hours for comprehensive newborn and family sessions, allowing ample unhurried time for baby feeding breaks and outfit changes."
    },
    {
      q: "What is included in ClickMates Photography service packages?",
      a: "All packages include high-resolution edited digital portraits, custom theme backdrops, prop usage (baskets, tiaras, wraps, balloon setups), designer maternity gowns, parent/sibling participation, and fine-art canvas wall prints."
    },
    {
      q: "What is the best age for a baby milestone photoshoot in Pune?",
      a: "Popular milestone ages are 100 days, 6 to 7 months (when baby sits independently), 9 to 10 months (crawling phase), and 12 months (1st birthday cake smash celebration)."
    },
    {
      q: "Do you provide event photography coverage for baby showers and birthday parties in Pune?",
      a: "Yes, we offer complete event photography coverage for baby showers (Dohale Jevan), naming ceremonies (Namkaran), 1st birthday parties, and family celebrations across Kothrud and Pune."
    },
    {
      q: "How can I schedule a service booking with ClickMates Photography in Kothrud, Pune?",
      a: "You can schedule a studio booking online via our instant contact form, by calling +91 96999 45608, or by messaging our team directly on WhatsApp."
    }
  ]

  return (
    <div className="bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title="Photography Services in Kothrud, Pune | ClickMates Photography"
        description="ClickMates Photography offers professional photography services in Kothrud, Pune: baby photoshoot, newborn photography, maternity portraits, family portraits, and event photography."
        keywords="Photography Services Pune, Photography Studio Kothrud, Baby Photography Pune, Newborn Photography Pune, Maternity Photography Pune, Family Photography Pune, Event Photography Pune"
        canonicalUrl={`https://${brandDetails.domain}/services`}
        faqs={servicesFaqs}
      />

      {/* Image-Driven Hero Header Banner */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-36 bg-[#111111] text-white text-center overflow-hidden">
        <img
          src={baby12}
          alt="ClickMates Photography Studio Kothrud Pune Services Banner"
          title="Photography Services Banner - ClickMates Pune"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-5">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/20 backdrop-blur-md px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full border border-white/30 shadow-lg max-w-full text-center leading-normal">
            KOTHRUD, PUNE STUDIO
          </span>
          <h1 className="font-heading text-3xl sm:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
            Photography Services in Pune
          </h1>
          <p className="text-slate-200 text-sm sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
            Crafted for families who treasure authentic emotion, creative theme styling, and timeless digital heirlooms.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 sm:space-y-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-[340px] lg:max-w-none mx-auto relative group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <div className={`lg:col-span-6 space-y-4 sm:space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                  SPECIALTY {index + 1}
                </span>

                <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
                  {service.title} in Pune
                </h2>

                <p className="text-[#242424] text-sm sm:text-base leading-relaxed font-body font-normal">
                  {service.fullDesc}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm font-nav font-semibold text-[#242424]">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3 font-nav text-xs font-semibold">
                  <Link
                    to={`/services/${service.id}`}
                    className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-md shadow-[#ED78A8]/30 flex items-center justify-center gap-2 whitespace-nowrap text-center cursor-pointer"
                  >
                    <span>View Service Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all duration-300 border border-[#ED78A8]/20 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-center"
                  >
                    <Calendar className="w-4 h-4 text-[#ED78A8]" />
                    Book Shoot
                  </button>
                </div>
              </div>

              <div className={`lg:col-span-6 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#ED78A8]/20 shadow-lg h-52 sm:h-96 transform hover:scale-[1.02] transition-transform duration-500 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={service.cardImage}
                  alt={`${service.title} session at ClickMates Studio Kothrud Pune`}
                  title={`${service.title} - ClickMates Studio Pune`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8 SERVICES ACCORDION FAQS SECTION */}
      <section className="pt-8 pb-14 sm:py-20 bg-[#FFFDFB] border-t border-[#FFF0F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-4 py-1.5 rounded-full border border-[#ED78A8]/20 max-w-full text-center leading-normal">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
              Frequently Asked Questions About Our Services
            </h2>
          </div>

          <div className="space-y-3 max-w-[340px] sm:max-w-none mx-auto">
            {servicesFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                      ? 'border-[#ED78A8] shadow-md ring-1 ring-[#ED78A8]/20'
                      : 'border-[#FFF0F6] shadow-xs hover:border-[#ED78A8]/40'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-heading font-bold text-sm sm:text-lg text-[#242424] flex items-center gap-2 pr-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ED78A8] shrink-0" />
                      <span>{faq.q}</span>
                    </h3>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#ED78A8] text-white rotate-180' : 'bg-[#FFF0F6] text-[#ED78A8]'
                      }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-left border-t border-[#FFF0F6] animate-fade-in">
                      <p className="text-[#242424] text-sm sm:text-base font-body font-normal leading-relaxed pl-6 sm:pl-7 pt-3">
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