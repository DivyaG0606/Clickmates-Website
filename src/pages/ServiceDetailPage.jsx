import { useParams, Link, Navigate } from 'react'
import { CheckCircle2, Calendar, MessageCircle, ArrowLeft, HelpCircle } from 'lucide-react'
import { servicesData, brandDetails } from '../data/photographyData'
import SEOHead from '../components/SEOHead'

export default function ServiceDetailPage({ onOpenBooking }) {
  const { serviceId } = useParams()
  const service = servicesData.find(s => s.id === serviceId)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const relatedServices = servicesData.filter(s => s.id !== serviceId).slice(0, 3)

  const defaultServiceFaqs = [
    {
      q: `Where are the ${service.title} sessions conducted?`,
      a: `All indoor sessions are hosted at ClickMates Photography Studio located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038.`
    },
    {
      q: `How do I reserve a date for ${service.title} in Pune?`,
      a: `You can easily book online by clicking 'Book This Session' or by reaching out to us via WhatsApp at +91 96999 45608.`
    }
  ]

  const serviceFaqs = service.faqs || defaultServiceFaqs

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.id}` }
  ]

  return (
    <div className="pt-24 pb-20 bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title={`${service.title} in Pune | ClickMates Photography Studio Kothrud`}
        description={`${service.shortDesc} Book professional ${service.title.toLowerCase()} at ClickMates Photography Studio in Kothrud, Pune.`}
        keywords={`${service.title} Pune, ${service.title} Kothrud, ${service.title} Studio Pune, ClickMates Photography`}
        canonicalUrl={`https://${brandDetails.domain}/services/${service.id}`}
        serviceDetails={{
          name: service.title,
          description: service.shortDesc,
          category: service.title
        }}
        faqs={serviceFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-[#111111] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={`${service.title} at ClickMates Photography Studio Kothrud Pune`}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 py-28 sm:py-36">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-nav text-white/80 hover:text-[#ED78A8] transition mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <h1 className="font-heading text-5xl sm:text-7xl font-extrabold leading-tight">
            {service.title} in Pune
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Overview & What We Offer */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              KOTHRUD PUNE STUDIO SPECIALTY
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              What Makes Our {service.title} Special
            </h2>

            <p className="text-[#666666] text-base leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="font-heading text-xl font-bold text-[#242424]">Included in Your Shoot:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-body">
                {service.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FFF0F6]/50 border border-[#FFF0F6]">
                    <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 flex flex-wrap gap-4 font-nav text-xs font-semibold">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-lg shadow-[#ED78A8]/20 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book This Session
              </button>

              <a
                href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates!%20I'm%20interested%20in%20${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#ED78A8]" />
                Enquire via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl border border-[#FFF0F6] h-96 sm:h-[480px]">
            <img
              src={service.cardImage}
              alt={`${service.title} session at ClickMates Studio Kothrud Pune`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-[#FFF0F6]/30 border-y border-[#FFF0F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#242424]">
              {service.title} Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#FFF0F6] shadow-sm space-y-2">
                <h3 className="font-heading text-lg font-bold text-[#242424] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#ED78A8]" />
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-body pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424]">
            Explore Related Photography Sessions in Pune
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Link
              key={rel.id}
              to={`/services/${rel.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#FFF0F6] shadow-sm hover:shadow-md transition p-4 flex items-center gap-4"
            >
              <img
                src={rel.cardImage}
                alt={`${rel.title} ClickMates Studio Pune`}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <h4 className="font-heading text-lg font-bold text-[#242424] group-hover:text-[#ED78A8] transition">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#666666] line-clamp-1">{rel.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
