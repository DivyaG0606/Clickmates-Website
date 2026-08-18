import { Link } from 'react-router-dom'
import { ChevronRight, Calendar, CheckCircle2 } from 'lucide-react'
import { servicesData, brandDetails } from '../data/photographyData'
import SEOHead from '../components/SEOHead'

// Import real photography background asset
import baby12 from '../assets/baby12.jpg'

export default function ServicesPage({ onOpenBooking }) {
  const servicesFaqs = [
    {
      q: "What full range of photography services does ClickMates Studio offer in Pune?",
      a: "ClickMates Photography offers specialized baby photography, newborn safety portraiture, maternity shoots, family portraits, baby milestone shoots (including 1st birthday cake smash), and event photography across Pune."
    },
    {
      q: "Where is the ClickMates Photography studio located for service sessions?",
      a: "All indoor studio sessions take place at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038."
    },
    {
      q: "Does ClickMates offer outdoor photography sessions in Pune?",
      a: "Yes, we conduct outdoor golden-hour family portraiture and maternity shoots at scenic outdoor locations across Kothrud, Baner, Pune parks, and venue locations."
    },
    {
      q: "How long does a typical photography session take at ClickMates Studio?",
      a: "Session durations range from 1.5 hours for essential baby shoots to 3–4 hours for comprehensive newborn and family sessions, allowing ample time for baby feeding breaks and outfit changes."
    },
    {
      q: "What is included in ClickMates Photography service packages?",
      a: "Packages include high-resolution edited digital photographs, custom backdrop themes, prop usage, styling guidance, parent/sibling participation, and optional fine-art canvas wall prints."
    },
    {
      q: "What is the best age for a baby milestone photoshoot in Pune?",
      a: "Popular milestone ages are 100 days, 6 to 7 months (when baby sits independently), 9 to 10 months, and 12 months (1st birthday cake smash)."
    },
    {
      q: "Do you provide event photography coverage for baby showers and birthday parties in Pune?",
      a: "Yes, we offer complete event photography coverage for baby showers, naming ceremonies, 1st birthday parties, and family celebrations in Kothrud and across Pune."
    },
    {
      q: "How can I schedule a service booking with ClickMates Photography?",
      a: "You can schedule a booking online via our contact form, by calling +91 96999 45608, or by messaging our studio on WhatsApp."
    }
  ]

  return (
    <div className="pt-20 pb-20 bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title="Photography Services in Kothrud, Pune | ClickMates Photography"
        description="ClickMates Photography offers professional photography services in Kothrud, Pune: baby photoshoot, newborn photography, maternity portraits, family portraits, and event photography."
        keywords="Photography Services Pune, Photography Studio Kothrud, Baby Photography Pune, Newborn Photography Pune, Maternity Photography Pune, Family Photography Pune, Event Photography Pune"
        canonicalUrl={`https://${brandDetails.domain}/services`}
        faqs={servicesFaqs}
      />

      {/* Image-Driven Hero Header Banner */}
      <section className="relative py-32 sm:py-44 bg-[#111111] text-white text-center overflow-hidden">
        <img
          src={baby12}
          alt="ClickMates Photography Studio Kothrud Pune Services Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 shadow-lg">
            KOTHRUD, PUNE STUDIO
          </span>
          <h1 className="font-heading text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">
            Photography Services in Pune
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Crafted for families who treasure authentic emotion, creative theme styling, and timeless digital heirlooms.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl bg-white border border-[#FFF0F6] shadow-sm hover:shadow-xl transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-[10px] font-semibold tracking-widest uppercase font-nav text-[#ED78A8] bg-[#FFF0F6] px-3 py-1 rounded-full border border-[#ED78A8]/20">
                  SPECIALTY {index + 1}
                </span>

                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
                  {service.title} in Pune
                </h2>

                <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                  {service.fullDesc}
                </p>

                <ul className="space-y-2.5 text-xs text-[#242424] font-body">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4 pt-4 font-nav text-xs font-semibold">
                  <Link
                    to={`/services/${service.id}`}
                    className="px-6 py-3 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md shadow-[#ED78A8]/20 flex items-center gap-2"
                  >
                    <span>View Service Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#ED78A8]" />
                    Book Shoot
                  </button>
                </div>
              </div>

              <div className={`lg:col-span-6 rounded-3xl overflow-hidden shadow-lg h-80 sm:h-96 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={service.cardImage}
                  alt={`${service.title} session at ClickMates Studio Kothrud Pune`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8 SERVICES FAQS SECTION */}
      <section className="py-20 bg-[#FFFDFB] border-t border-[#FFF0F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              Frequently Asked Questions About Our Services
            </h2>
          </div>

          <div className="space-y-4">
            {servicesFaqs.map((faq, index) => (
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
    </div>
  )
}
