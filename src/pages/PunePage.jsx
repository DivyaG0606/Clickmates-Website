import { MessageCircle, Star, CheckCircle2, Calendar } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { brandDetails } from '../data/photographyData'
import baby1 from '../assets/baby1.jpg'
import e30 from '../assets/e30.jpg'

export default function PunePage({ onOpenBooking }) {
  const faqs = [
    {
      q: "What makes ClickMates Photography a leading photography studio in Pune?",
      a: "ClickMates Photography combines editorial artistic styling, safety-certified newborn handling, custom baby milestone sets, luxury maternity gowns, and warm family portraiture in a fully equipped studio in Kothrud, Pune."
    },
    {
      q: "Which areas in Pune does ClickMates Photography serve?",
      a: "ClickMates Photography serves families across Pune including Kothrud, Paud Road, Bhusari Colony, Karve Nagar, Erandwane, Deccan, Shivajinagar, Bavdhan, Pashan, Aundh, Baner, Balewadi, Wakad, Hinjewadi, Kharadi, Viman Nagar, and Pimpri-Chinchwad."
    },
    {
      q: "How can parents book a baby or maternity photoshoot in Pune?",
      a: "Parents can easily reserve a date online through our website, call us directly at +91 96999 45608, or send a message via WhatsApp."
    },
    {
      q: "Do you offer both studio shoots and outdoor photoshoots in Pune?",
      a: "Yes! We host indoor studio sessions at our Kothrud photography studio as well as outdoor family portraiture and event photography across Pune."
    }
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/services" },
    { name: "Pune Photography Studio", url: "/photography-studio-pune" }
  ]

  const puneAreas = [
    "Kothrud", "Paud Road", "Bhusari Colony", "Karve Nagar", "Erandwane",
    "Deccan", "Shivajinagar", "Bavdhan", "Pashan", "Aundh",
    "Baner", "Balewadi", "Wakad", "Hinjewadi", "Kharadi", "Viman Nagar"
  ]

  return (
    <div className="pt-24 pb-20 bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title="Best Photography Studio in Pune | Baby, Newborn & Maternity Photographer"
        description="Looking for the best photography studio in Pune? ClickMates Photography in Kothrud offers top-rated baby shoots, newborn photography, maternity sessions, and family portraiture."
        keywords="photography studio Pune, best photography studio Pune, professional photography studio Pune, baby photographer Pune, newborn photographer Pune, maternity photographer Pune, family photographer Pune, event photographer Pune, Kothrud photography studio, ClickMates Photography Pune"
        canonicalUrl={`https://${brandDetails.domain}/photography-studio-pune`}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFF0F6]/60 via-[#FFFDFB] to-[#FFFDFB] py-16 sm:py-24 border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0F6] border border-[#ED78A8]/30 text-[#ED78A8] text-xs font-semibold uppercase tracking-wider font-nav shadow-xs">
                <Star className="w-3.5 h-3.5 fill-[#ED78A8]" />
                <span>Top-Rated Photography Studio in Pune</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#242424] leading-tight">
                Professional <span className="text-[#ED78A8]">Photography Studio in Pune</span>
              </h1>
              <p className="text-[#666666] text-base sm:text-lg font-light leading-relaxed">
                ClickMates Photography is a premier specialized photography studio in Kothrud, Pune, dedicated to capturing timeless memories for families throughout Maharashtra. From gentle newborn poses to energetic 1st birthday cake smashes and serene maternity portraits.
              </p>

              {/* Entity Overview Box */}
              <div className="bg-white p-5 rounded-2xl border border-[#ED78A8]/20 shadow-sm space-y-2 text-xs sm:text-sm">
                <p className="font-semibold text-[#242424] flex items-center gap-2 font-nav">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                  <span>ClickMates Pune Studio Location:</span>
                </p>
                <p className="text-[#555555] font-light pl-6">
                  {brandDetails.fullAddress}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 font-nav text-sm">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 bg-[#ED78A8] hover:bg-[#d65f8f] text-white font-semibold rounded-full shadow-lg shadow-[#ED78A8]/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Pune Session</span>
                </button>
                <a
                  href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates%20Photography%20Pune!%20I%20would%20like%20to%20enquire%20about%20a%20photoshoot.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={baby1}
                  alt="Baby photoshoot by ClickMates best photography studio Pune"
                  title="Baby Photoshoot Pune - ClickMates Photography"
                  className="rounded-3xl shadow-xl h-64 sm:h-80 w-full object-cover border-4 border-white"
                />
                <img
                  src={e30}
                  alt="Family photography session in Pune by ClickMates studio"
                  title="Family Photography Session Pune"
                  className="rounded-3xl shadow-xl h-64 sm:h-80 w-full object-cover border-4 border-white mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid in Pune */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20 shadow-xs">
            OUR SPECIALIZATIONS IN PUNE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
            Professional Photography Services Offered in Pune
          </h2>
          <p className="text-[#666666] text-base font-light">
            Every photography session at our Kothrud studio is tailored with safety, artistic direction, and high attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#ED78A8]/20 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <h3 className="font-heading text-xl font-bold text-[#242424]">Baby & Milestone Photography Pune</h3>
            <p className="text-[#666666] text-sm leading-relaxed font-light">
              Capturing 100-day celebrations, sitting milestones, 6 to 11 month giggles, and 1st birthday cake smashes across Pune.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#ED78A8]/20 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <h3 className="font-heading text-xl font-bold text-[#242424]">Newborn Photography Studio Pune</h3>
            <p className="text-[#666666] text-sm leading-relaxed font-light">
              Safe, sleepy newborn sessions for babies aged 5 to 21 days in sanitized temperature-controlled studio warmth in Kothrud.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#ED78A8]/20 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <h3 className="font-heading text-xl font-bold text-[#242424]">Maternity Photography Pune</h3>
            <p className="text-[#666666] text-sm leading-relaxed font-light">
              Editorial pregnancy shoots with designer maternity gowns, artistic lighting, and romantic couple portraiture in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served in Pune */}
      <section className="py-16 bg-[#FFF0F6]/40 border-y border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">LOCAL REACH</span>
            <h2 className="font-heading text-3xl font-bold text-[#242424]">
              Serving Families Across Pune Localities
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto font-nav">
            {puneAreas.map((area) => (
              <span key={area} className="px-4 py-2 bg-white rounded-full text-xs font-semibold text-[#444444] border border-[#ED78A8]/20 shadow-xs">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pune FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">DIRECT ANSWERS</span>
          <h2 className="font-heading text-3xl font-bold text-[#242424]">
            Pune Studio Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-[#ED78A8]/25 shadow-sm space-y-2 text-left">
              <h3 className="font-heading font-bold text-lg text-[#242424]">{faq.q}</h3>
              <p className="text-[#666666] text-sm font-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}