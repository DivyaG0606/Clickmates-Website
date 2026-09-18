import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
  Camera,
  Palette,
  Users,
  Star
} from 'lucide-react'
import { brandDetails } from '../data/photographyData'
import SEOHead from '../components/SEOHead'

// Import real photography assets for service sections
import baby1 from '../assets/baby/baby1.jpg'
import baby10 from '../assets/baby/baby10.jpg'
import baby12 from '../assets/baby/baby12.jpg'
import m16 from '../assets/maternity/maternity13.jpg'
import m18 from '../assets/maternity/maternity15.jpg'
import e30 from '../assets/event/event1.jpg'

export default function ServicesPage({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const servicesFaqs = [
    {
      q: "What photography services does Clickmates Studio offer in Pune?",
      a: "Clickmates Studio offers comprehensive professional photography services in Pune, including baby photography, newborn safety shoots, maternity portraits, family portraits, kids photography, portrait sessions, and event photography coverage."
    },
    {
      q: "Do you offer baby photography in Pune?",
      a: "Yes! We specialize in baby photography in Pune, capturing 100-day milestones, 6–7 month sitting milestones, 1st birthday cake smash sessions, and playful theme setups with sanitized props and eye-safe soft continuous lighting."
    },
    {
      q: "Do you offer newborn photography in Pune?",
      a: "Yes, Clickmates Studio is a certified newborn photography studio in Pune. We conduct gentle, 100% safe newborn shoots for babies aged 5 to 14 days in a heated, sanitized studio environment with certified wrapping techniques."
    },
    {
      q: "Do you provide maternity photoshoots in Pune?",
      a: "Yes, we offer elegant maternity photography in Pune featuring complimentary designer gowns, tiaras, indoor lighting concepts, and outdoor sunset portraits celebrating your pregnancy journey."
    },
    {
      q: "Can families book a photoshoot at Clickmates Studio?",
      a: "Absolutely! We offer heartwarming family photography sessions where parents, children, siblings, and grandparents can capture candid bonding and timeless family heirlooms together."
    },
    {
      q: "Do you offer kids and birthday photography in Pune?",
      a: "Yes, we provide specialized kids photography and 1st birthday cake smash photoshoots in Pune featuring custom balloon backdrops, splash baths, and fun interactive setups."
    },
    {
      q: "Do you provide photography services for events in Pune?",
      a: "Yes, Clickmates Studio provides professional candid event photography coverage for baby showers (Dohale Jevan), naming ceremonies (Namkaran), 1st birthday celebrations, and family milestone events across Pune."
    },
    {
      q: "Where is Clickmates Photography Studio located?",
      a: "Our studio is located at: Ishana II, Office No. 2, Sr. No. 77/2, Left Bhusari Colony, 38 Paud Road, Kothrud, Pune, Maharashtra 411038. Clickmates Photography Studio."
    },
    {
      q: "Can I choose a theme or concept for my photoshoot?",
      a: "Yes! Every shoot is personalized. You can select from our curated backdrop concepts, color palettes, prop collections, and outfit options during your pre-shoot consultation."
    },
    {
      q: "How do I book a photography session with Clickmates?",
      a: "Our booking process is simple: Enquiry → Select service → Select package → Choose date → Confirm booking → Photoshoot at our studio. Call +91 96999 45608 or message us on WhatsApp to get started."
    }
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ]

  const whyChooseAdvantages = [
    {
      icon: Award,
      title: "Professional Photography",
      desc: "Skilled lighting, patient posing, and technical mastery dedicated to preserving authentic expressions."
    },
    {
      icon: Palette,
      title: "Creative Concepts",
      desc: "Curated backdrop themes, balloon arches, wooden props, and designer maternity gowns custom-styled for your shoot."
    },
    {
      icon: Camera,
      title: "Studio Experience",
      desc: "A warm, welcoming, and relaxed environment designed specifically for infants, mothers, and families."
    },
    {
      icon: Heart,
      title: "Personalized Sessions",
      desc: "Unhurried shoot pacing structured around your baby's feeding, nursing, and nap schedules."
    },
    {
      icon: Sparkles,
      title: "Quality Editing",
      desc: "High-end editorial retouching preserving natural skin textures and rich, warm color tones."
    },
    {
      icon: ShieldCheck,
      title: "Comfortable Environment",
      desc: "100% sanitized props, climate control (26°C-28°C), and private lounges ensuring total peace of mind."
    },
    {
      icon: Users,
      title: "Professional Service",
      desc: "Transparent package pricing, upfront terms, friendly guidance, and fast high-res digital gallery delivery."
    }
  ]

  return (
    <div className="bg-[#FFFDFB] text-[#242424] font-body" itemScope itemType="https://schema.org/Service">
      <SEOHead
        title="Photography Services in Pune | Baby, Maternity & Event | Clickmates"
        description="Explore professional photography services in Pune by Clickmates Studio, including baby, newborn, maternity, family, kids, portrait and event photography."
        keywords="Photography Services in Pune, photography services Pune, professional photography services Pune, photography studio services Pune, professional photographer Pune, photography studio Pune, photoshoot services Pune, photography services in Kothrud, professional photoshoot Pune, photographer in Kothrud Pune, baby photography Pune, newborn photography Pune, maternity photography Pune, family photography Pune, portrait photography Pune, event photography Pune, Kothrud, Paud Road, Bhusari Colony, Pune Maharashtra"
        canonicalUrl={`https://${brandDetails.domain}/services`}
        faqs={servicesFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* HERO HEADER SECTION (H1) */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-32 bg-[#111111] text-white text-center overflow-hidden">
        <img
          src={baby12}
          alt="Professional Photography Services in Pune - Clickmates Studio"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/80" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            KOTHRUD, PUNE STUDIO
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Professional Photography Services in Pune
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Welcome to <strong className="font-medium text-white">Clickmates Studio</strong>. We offer comprehensive, high-ranking <strong className="font-medium text-white">photography services in Pune</strong> for maternity, newborn babies, growing milestones, family portraits, and special event celebrations.
          </p>
        </div>
      </section>

      {/* SECTION 1: OVERVIEW / INTRO (H2) */}
      <section className="py-12 sm:py-20 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              EXCELLENCE IN VISUAL STORYTELLING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              Professional Photography Services in Pune
            </h2>
            <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed">
              At Clickmates Studio, we provide premier <strong className="font-medium text-[#242424]">photography services in Pune</strong> designed to capture life's most precious milestones with warmth, safety, and artistic finesse. As a leading <strong className="font-medium text-[#242424]">professional photography studio Pune</strong> based on main Paud Road near Bhusari Colony in Kothrud, our team offers tailored <strong className="font-medium text-[#242424]">photoshoot services Pune</strong> families rely on for lasting memories.
            </p>
            <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed">
              Whether you are seeking specialized <strong className="font-medium text-[#242424]">photography services in Kothrud</strong>, looking for an experienced <strong className="font-medium text-[#242424]">photographer in Kothrud Pune</strong>, or booking a <strong className="font-medium text-[#242424]">professional photoshoot Pune</strong> session, Clickmates Studio provides an inviting environment equipped with high-end props, soft continuous lighting, and custom set designs. We serve clients across Pune, including Karve Nagar, Erandwane, Bavdhan, Aundh, Deccan, Shivajinagar, Baner, Pashan, Wakad, Balewadi, Hinjawadi, and nearby areas.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS HUB */}
      <section className="py-12 sm:py-24 bg-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* SECTION 2: BABY & KIDS PHOTOGRAPHY IN PUNE (H2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                MILESTONE WATCH (3 TO 12 MONTHS)
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
                Baby & Kids Photography in Pune
              </h2>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                Our <strong className="font-medium text-[#242424]">baby photography Pune</strong> sessions celebrate your little one's rapid growth and adorable expressions. From 100-day milestone shoots and 6–7 month sitting sessions to 1st birthday celebrations, our experienced <strong className="font-medium text-[#242424]">baby photographer Pune</strong> team creates playful, comfortable environments.
              </p>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                At our dedicated <strong className="font-medium text-[#242424]">baby photoshoot studio Pune</strong>, we offer creative themes, sanitized props, eye-safe soft lighting, and interactive setups for <strong className="font-medium text-[#242424]">kids photography Pune</strong>, <strong className="font-medium text-[#242424]">kids photoshoot Pune</strong>, <strong className="font-medium text-[#242424]">first birthday photography Pune</strong>, and colorful <strong className="font-medium text-[#242424]">cake smash photography Pune</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 font-nav text-xs font-semibold">
                <Link
                  to="/services/baby-photography"
                  className="px-5 py-3 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all shadow-md flex items-center gap-2"
                >
                  <span>View Baby Photography Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/packages"
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20"
                >
                  Explore Packages & Pricing →
                </Link>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#ED78A8]" />
                  Book Baby Shoot
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#ED78A8]/20 shadow-lg h-64 sm:h-80">
              <img
                src={baby1}
                alt="Baby & Kids Photography in Pune - Clickmates Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SECTION 3: NEWBORN PHOTOGRAPHY IN PUNE (H2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#ED78A8]/20 shadow-lg h-64 sm:h-80 lg:order-1">
              <img
                src={baby10}
                alt="Newborn Photography in Pune - Clickmates Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-5 lg:order-2">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                100% BABY SAFETY (5 TO 14 DAYS)
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
                Newborn Photography in Pune
              </h2>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                The first fortnight of your baby's life is a fleeting miracle. Clickmates Studio is widely recognized as a premier <strong className="font-medium text-[#242424]">newborn photography studio Pune</strong>. Work with a certified, patient <strong className="font-medium text-[#242424]">newborn photographer Pune</strong> dedicated to the highest safety and hygiene protocols.
              </p>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                During your <strong className="font-medium text-[#242424]">newborn photoshoot Pune</strong> session, we provide climate-controlled warmth (26°C-28°C), organic sanitized wraps, gentle posing cue, macro detail shots, and unhurried feeding breaks at our <strong className="font-medium text-[#242424]">newborn photoshoot studio Pune</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 font-nav text-xs font-semibold">
                <Link
                  to="/services/newborn-photography"
                  className="px-5 py-3 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all shadow-md flex items-center gap-2"
                >
                  <span>View Newborn Photography Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/packages"
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20"
                >
                  Explore Packages & Pricing →
                </Link>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#ED78A8]" />
                  Book Newborn Session
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 4: MATERNITY PHOTOGRAPHY IN PUNE (H2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                ELEGANT MOTHERHOOD (28 TO 34 WEEKS)
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
                Maternity Photography in Pune
              </h2>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                Celebrate the magical beauty of pregnancy with our top-rated <strong className="font-medium text-[#242424]">maternity photography studio Pune</strong>. Collaborate with an artistic <strong className="font-medium text-[#242424]">maternity photographer Pune</strong> for <strong className="font-medium text-[#242424]">maternity photography Pune</strong> and glowing <strong className="font-medium text-[#242424]">maternity photoshoot Pune</strong> sessions.
              </p>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                At our <strong className="font-medium text-[#242424]">maternity photoshoot studio Pune</strong>, we provide complimentary designer gowns, tiaras, indoor soft studio lighting, outdoor sunset concepts, and intimate couple/family portraiture for your <strong className="font-medium text-[#242424]">pregnancy photoshoot Pune</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 font-nav text-xs font-semibold">
                <Link
                  to="/services/maternity-photography"
                  className="px-5 py-3 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all shadow-md flex items-center gap-2"
                >
                  <span>View Maternity Photography Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/packages"
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20"
                >
                  Explore Packages & Pricing →
                </Link>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#ED78A8]" />
                  Book Maternity Shoot
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#ED78A8]/20 shadow-lg h-64 sm:h-80">
              <img
                src={m16}
                alt="Maternity Photography in Pune - Clickmates Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SECTION 5: FAMILY PHOTOGRAPHY IN PUNE (H2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#ED78A8]/20 shadow-lg h-64 sm:h-80 lg:order-1">
              <img
                src={e30}
                alt="Family Photography in Pune - Clickmates Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-5 lg:order-2">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                TIMELOSS TOGETHERNESS
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
                Family Photography in Pune
              </h2>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                Preserve the authentic love and laughter of your family with our <strong className="font-medium text-[#242424]">family photography Pune</strong> sessions. Work with an experienced <strong className="font-medium text-[#242424]">family photographer Pune</strong> for a relaxed <strong className="font-medium text-[#242424]">family photoshoot Pune</strong> experience.
              </p>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                Whether creating multi-generational family heirlooms or playful portraits with parents, toddlers, and grandparents, our <strong className="font-medium text-[#242424]">family portrait photography Pune</strong> sessions capture genuine connection for home displays.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 font-nav text-xs font-semibold">
                <Link
                  to="/services/family-photography"
                  className="px-5 py-3 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all shadow-md flex items-center gap-2"
                >
                  <span>View Family Photography Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/packages"
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20"
                >
                  Explore Packages & Pricing →
                </Link>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#ED78A8]" />
                  Book Family Shoot
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 6: PORTRAIT & PROFESSIONAL PHOTOGRAPHY (H2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                FINE-ART & BRANDING
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
                Portrait & Professional Photography
              </h2>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                Beyond milestone sessions, Clickmates Studio offers specialized <strong className="font-medium text-[#242424]">portrait photography Pune</strong>. Work with a skilled <strong className="font-medium text-[#242424]">portrait photographer Pune</strong> for expressive <strong className="font-medium text-[#242424]">professional portrait photography Pune</strong> and high-end <strong className="font-medium text-[#242424]">studio portrait photography Pune</strong>.
              </p>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                Whether you need a <strong className="font-medium text-[#242424]">personal photoshoot Pune</strong> session, couple portraits, or executive personal branding portraits, our studio provides artistic lighting and editorial retouching.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 font-nav text-xs font-semibold">
                <Link
                  to="/packages"
                  className="px-5 py-3 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore Portrait Packages</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#ED78A8]" />
                  Book Portrait Session
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#ED78A8]/20 shadow-lg h-64 sm:h-80">
              <img
                src={m18}
                alt="Portrait & Professional Photography - Clickmates Studio Pune"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SECTION 7: EVENT PHOTOGRAPHY IN PUNE (H2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#ED78A8]/20 shadow-lg h-64 sm:h-80 lg:order-1">
              <img
                src={e30}
                alt="Event Photography in Pune - Clickmates Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-5 lg:order-2">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                CELEBRATION COVERAGE
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
                Event Photography in Pune
              </h2>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                Document life's great celebrations with our documentary <strong className="font-medium text-[#242424]">event photography Pune</strong> team. Hire a dedicated <strong className="font-medium text-[#242424]">event photographer Pune</strong> for candid and ritual coverage.
              </p>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                We specialize in <strong className="font-medium text-[#242424]">birthday photography Pune</strong>, 1st birthday parties, ceremonial <strong className="font-medium text-[#242424]">baby shower photography Pune</strong> (Dohale Jevan), naming ceremonies (Namkaran), and <strong className="font-medium text-[#242424]">family event photography Pune</strong> across Kothrud, Baner, Wakad, and Pune.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 font-nav text-xs font-semibold">
                <Link
                  to="/services/event-photography"
                  className="px-5 py-3 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all shadow-md flex items-center gap-2"
                >
                  <span>View Event Photography Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/packages"
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20"
                >
                  Explore Event Packages →
                </Link>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#ED78A8]" />
                  Book Event Coverage
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE CLICKMATES STUDIO? (H2) */}
      <section className="py-14 sm:py-24 bg-[#FFF0F6]/20 border-y border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              OUR STUDIO ADVANTAGE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
              Why Choose Clickmates Studio?
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-light">
              Here is why expecting parents and families across Pune trust Clickmates Studio for photography services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseAdvantages.map((item, index) => {
              const IconComp = item.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-white border border-[#ED78A8]/20 shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#ED78A8] text-white flex items-center justify-center shadow-md shadow-[#ED78A8]/20">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#242424]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9: BOOK YOUR PHOTOGRAPHY SESSION IN PUNE (H2) */}
      <section className="py-14 sm:py-24 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              STUDIO RESERVATION & ENQUIRY
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
              Book Your Photography Session in Pune
            </h2>
            <p className="text-[#666666] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Ready to turn your family's precious moments into digital heirlooms? Book your shoot with Clickmates Studio in Kothrud today.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#ED78A8]/20 shadow-md text-left space-y-4 max-w-2xl mx-auto">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#242424] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ED78A8]" />
              Official Verified Studio Location:
            </h3>
            <p className="text-sm text-[#444444] font-light leading-relaxed pl-7">
              Ishana II, Office No. 2, Sr. No. 77/2, Left Bhusari Colony, 38 Paud Road, Kothrud, Pune, Maharashtra 411038. Clickmates Photography Studio
            </p>

            <div className="pt-4 border-t border-[#FFF0F6] flex flex-col sm:flex-row items-center justify-between gap-4 font-nav text-xs">
              <div className="flex items-center gap-2 text-[#555555]">
                <Phone className="w-4 h-4 text-[#ED78A8]" />
                <span>+91 96999 45608 / +91 90213 80417</span>
              </div>
              <div className="flex items-center gap-2 text-[#555555]">
                <Clock className="w-4 h-4 text-[#ED78A8]" />
                <span>Mon - Sun: 9:30 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 font-nav text-xs font-semibold uppercase tracking-wider">
            <button
              onClick={onOpenBooking}
              data-cursor="click"
              className="w-[250px] sm:w-auto px-8 py-4 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-lg shadow-[#ED78A8]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              Book Your Photoshoot
            </button>
            <Link
              to="/packages"
              className="w-[250px] sm:w-auto px-8 py-4 rounded-full text-[#242424] bg-[#FFF0F6] hover:bg-[#ED78A8]/20 transition-all border border-[#ED78A8]/20 flex items-center justify-center gap-2"
            >
              Explore Packages & Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: HIGH-INTENT FAQS FOR SERVICES PAGE */}
      <section className="py-14 sm:py-24 bg-[#FFFDFB] border-t border-[#FFF0F6]" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              High-Intent Services FAQs
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm font-light">
              Clear answers to common questions about our photography services, packages, and studio policies in Pune.
            </p>
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
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
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
    </div>
  )
}