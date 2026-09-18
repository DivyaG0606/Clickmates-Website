import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Heart,
  Camera,
  Clock,
  MapPin,
  HeartHandshake,
  ChevronDown,
  Calendar,
  MessageCircle,
  Phone,
  ArrowRight,
  Smile,
  Palette,
  Users
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { brandDetails } from '../data/photographyData'
import baby10 from '../assets/baby/baby10.jpg'
import m16 from '../assets/maternity/maternity13.jpg'
import m18 from '../assets/maternity/maternity15.jpg'
import e30 from '../assets/event/event1.jpg'

export default function AboutPage({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const aboutFaqs = [
    {
      q: "What is Clickmates Studio?",
      a: "Clickmates Studio is a professional photography studio serving clients in Kothrud and across Pune. We specialize in capturing life's most precious milestones—from maternity glows and newborn baby innocence to 1st birthday celebrations and timeless family portraits—with artistic warmth and care."
    },
    {
      q: "Where is Clickmates Photography Studio located?",
      a: "Our studio is located at: Ishana II, Office No. 2, Sr. No. 77/2, Left Bhusari Colony, 38 Paud Road, Kothrud, Pune, Maharashtra 411038. Clickmates Photography Studio."
    },
    {
      q: "What photography services does Clickmates Studio offer?",
      a: "Clickmates Studio offers professional baby, newborn, maternity, family, kids, portrait, and event photography services tailored to your family's unique story."
    },
    {
      q: "Why choose Clickmates Studio for photography in Pune?",
      a: "Clients choose Clickmates Studio for our personalized approach, comfortable climate-controlled studio environment, creative theme concepts, meticulous attention to detail, natural professional editing, and exceptional customer experience."
    },
    {
      q: "Does Clickmates Studio offer baby and newborn photography in Pune?",
      a: "Yes! Clickmates Studio provides specialized baby and newborn photography in Pune. Our studio features certified 100% baby safety protocols, sanitized props, gentle wrapping techniques, and climate-controlled warmth."
    },
    {
      q: "Does Clickmates offer maternity photography in Pune?",
      a: "Yes, Clickmates Studio offers elegant maternity photography in Pune. We provide complimentary designer gowns, indoor and outdoor shoot concepts, and personalized styling to celebrate your journey into motherhood."
    },
    {
      q: "Can families book photography sessions at Clickmates Studio?",
      a: "Yes! Families can book heartwarming family photography sessions, portrait sessions, and multi-generational shoots at Clickmates Studio. Parents, siblings, and grandparents are always welcome."
    },
    {
      q: "How can I book a photography session with Clickmates Studio?",
      a: "Booking your session is simple: Enquiry → Select service/package → Choose date → Confirm booking → Photoshoot at our studio. You can call +91 96999 45608 or message us on WhatsApp to get started."
    }
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" }
  ]

  const whyChooseFeatures = [
    {
      icon: ShieldCheck,
      title: "Professional Approach",
      desc: "From initial consultation to final image delivery, we maintain the highest standards of safety, punctuality, and professional care."
    },
    {
      icon: Palette,
      title: "Creative Concepts",
      desc: "Every photoshoot is custom-designed with artistic themes, color-coordinated backdrops, handcrafted wooden props, and designer outfits."
    },
    {
      icon: Smile,
      title: "Comfortable Studio Environment",
      desc: "Our Kothrud studio is climate-controlled (26°C-28°C), 100% sanitized, baby-proofed, and equipped with a private nursing lounge for mothers and infants."
    },
    {
      icon: Heart,
      title: "Personalized Sessions",
      desc: "We tailor every shoot pace around your baby's natural mood, feeding breaks, and nap times, ensuring zero rush and complete peace of mind."
    },
    {
      icon: Camera,
      title: "Attention to Details",
      desc: "We focus on the delicate micro-moments—tiny baby fingers, gentle glances, natural laughter, and authentic family connections."
    },
    {
      icon: Award,
      title: "Professional Editing",
      desc: "Our high-end editorial retouching enhances warm skin tones and color harmony while preserving your family's authentic texture and expression."
    },
    {
      icon: HeartHandshake,
      title: "Customer Experience",
      desc: "Transparent package pricing with zero hidden fees, friendly guidance, and fast digital gallery delivery make your journey delightful."
    }
  ]

  return (
    <div className="bg-[#FFFDFB] text-[#242424] font-body" itemScope itemType="https://schema.org/AboutPage">
      <SEOHead
        title="About Clickmates Studio | Photography Studio in Kothrud, Pune"
        description="Learn about Clickmates Studio, a professional photography studio in Kothrud, Pune, creating beautiful baby, newborn, maternity, family and event memories."
        keywords="Clickmates Studio Pune, Clickmates Photography Studio, photographer in Kothrud Pune, professional photography studio Pune, photography studio Kothrud, photographers in Pune, Kothrud, Pune, Maharashtra, Paud Road, Bhusari Colony"
        canonicalUrl={`https://${brandDetails.domain}/about`}
        faqs={aboutFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* HERO HEADER SECTION (H1) */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-32 bg-[#111111] text-white text-center overflow-hidden">
        <img
          src={m18}
          alt="Clickmates Studio - Photography Studio in Kothrud, Pune"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/80" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            BRAND & STUDIO STORY
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            About Clickmates Studio – Photography in Kothrud, Pune
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Welcome to <strong className="font-medium text-white">Clickmates Studio Pune</strong>, your premier destination for artistic milestone portraits, gentle newborn sessions, luxury maternity portraiture, and heartwarming family memories.
          </p>
        </div>
      </section>

      {/* SECTION 1: OUR STORY (H2) */}
      <section className="py-14 sm:py-24 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
                HOW IT ALL STARTED
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
                Our Story
              </h2>
              <div className="space-y-4 text-[#555555] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Clickmates Studio was born out of a deep-seated passion for visual storytelling and an unyielding desire to preserve the fleeting moments of family life. As photography enthusiasts in Pune, we realized that while time moves rapidly, photographs hold the unique power to freeze joy, tenderness, and love in their purest forms.
                </p>
                <p>
                  Our motivation to establish <strong className="font-medium text-[#242424]">Clickmates Photography Studio</strong> in Kothrud stemmed from seeing expecting parents and new mothers look for a safe, comfortable, and truly professional photography experience. We envisioned a studio where warmth meets artistic perfection—a space where parents could feel relaxed knowing their newborn is handled with certified care, and where every milestone is celebrated with creative dedication.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                <img
                  src={m16}
                  alt="Our Story - Clickmates Studio Pune"
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROFESSIONAL PHOTOGRAPHY IN PUNE (H2) */}
      <section className="py-14 sm:py-24 bg-[#FFF0F6]/30 border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              OUR APPROACH & PHILOSOPHY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
              Professional Photography in Pune
            </h2>
            <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed">
              At Clickmates Studio, our approach as a trusted <strong className="font-medium text-[#242424]">photographer in Kothrud Pune</strong> blends artistic vision with technical precision. We believe that professional photography is not merely about taking pictures—it is about creating an emotional atmosphere where authentic expressions unfold naturally.
            </p>
            <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed">
              As a leading <strong className="font-medium text-[#242424]">professional photography studio Pune</strong> wide, we work closely with expecting mothers, newborn babies, growing toddlers, and multi-generational families. Whether capturing the gentle heartbeat of pregnancy, a baby's first independent sit, or the vibrant joy of a 1st birthday cake smash, we focus on genuine warmth, soft continuous lighting, and timeless aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PHOTOGRAPHY SERVICES (H2) */}
      <section className="py-14 sm:py-24 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              WHAT WE CAPTURE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
              Our Photography Services
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-light">
              Clickmates Studio provides a complete range of specialized portrait and milestone photography services in Pune:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Baby */}
            <div className="bg-white p-6 rounded-3xl border border-[#ED78A8]/20 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">👶</div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">Baby Photography</h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Capturing milestone smiles, sitting achievements (6–11 months), and playful theme setups.
              </p>
            </div>

            {/* Newborn */}
            <div className="bg-white p-6 rounded-3xl border border-[#ED78A8]/20 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">🧸</div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">Newborn Photography</h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Gentle, 100% baby-safe sleepy posing within 5 to 14 days of birth in a sanitized studio.
              </p>
            </div>

            {/* Maternity */}
            <div className="bg-white p-6 rounded-3xl border border-[#ED78A8]/20 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">🤰</div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">Maternity Photography</h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Graceful pregnancy portraiture featuring complimentary designer gowns and custom lighting.
              </p>
            </div>

            {/* Family */}
            <div className="bg-white p-6 rounded-3xl border border-[#ED78A8]/20 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">👨‍👩‍👧</div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">Family Photography</h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Heartwarming multi-generational family portraits and candid bonding moments.
              </p>
            </div>

            {/* Kids */}
            <div className="bg-white p-6 rounded-3xl border border-[#ED78A8]/20 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">🎈</div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">Kids Photography</h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Fun, energetic portrait sessions celebrating toddler laughter and 1st birthday cake smashes.
              </p>
            </div>

            {/* Portrait */}
            <div className="bg-white p-6 rounded-3xl border border-[#ED78A8]/20 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">✨</div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">Portrait Photography</h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Expressive individual and couple portraits crafted with fine-art backdrop styling.
              </p>
            </div>

            {/* Events */}
            <div className="bg-white p-6 rounded-3xl sm:col-span-2 border border-[#ED78A8]/20 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] font-bold text-lg">🎉</div>
              <h3 className="font-heading text-xl font-bold text-[#242424]">Event Photography</h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Comprehensive candid event coverage for baby showers (Dohale Jevan), naming ceremonies (Namkaran), and birthday parties across Pune.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-nav text-[#ED78A8] hover:text-[#d65f8f] underline"
            >
              View Full Photography Services Page →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE CLICKMATES STUDIO? (H2) */}
      <section className="py-14 sm:py-24 bg-[#FFF0F6]/20 border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              OUR DIFFERENCE & ADVANTAGE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
              Why Choose Clickmates Studio?
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-light">
              Here is why families and expecting parents trust Clickmates Studio for photography in Pune:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((item, index) => {
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

      {/* SECTION 5: OUR STUDIO IN KOTHRUD, PUNE (H2) */}
      <section className="py-14 sm:py-24 bg-[#FFFDFB] border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
                LOCAL SEO & ACCESSIBILITY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424]">
                Our Studio in Kothrud, Pune
              </h2>
              <div className="space-y-4 text-[#555555] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Clickmates Studio is proudly located in <strong className="font-medium text-[#242424]">Kothrud</strong>, one of the most accessible and central hubs in <strong className="font-medium text-[#242424]">Pune</strong>. Situated right on <strong className="font-medium text-[#242424]">Paud Road</strong> near <strong className="font-medium text-[#242424]">Bhusari Colony</strong>, our studio offers seamless connectivity and dedicated parking for visiting families.
                </p>
                <p>
                  As a leading <strong className="font-medium text-[#242424]">photography studio Kothrud</strong>, our premises feature temperature control maintained at a cozy 26°C to 28°C for newborn comfort, sanitized props and backdrops, soft continuous lighting, and a private dressing suite. Whether you are traveling from Karve Nagar, Erandwane, Deccan, Bavdhan, Baner, or Wakad, our Paud Road studio near Bhusari Colony provides an inviting sanctuary for your session.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#FFF0F6]/50 p-6 rounded-3xl border border-[#ED78A8]/20 space-y-4">
                <div className="flex items-center gap-2 text-[#ED78A8] font-bold">
                  <MapPin className="w-5 h-5" />
                  <span>Exact Studio Location</span>
                </div>
                <p className="text-xs sm:text-sm text-[#444444] font-light leading-relaxed">
                  Ishana II, Office No. 2, Sr. No. 77/2, Left Bhusari Colony, 38 Paud Road, Kothrud, Pune, Maharashtra 411038. Clickmates Photography Studio
                </p>
                <div className="pt-2 border-t border-[#ED78A8]/20 flex flex-col gap-2 text-xs font-nav font-medium text-[#242424]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                    <span>Located on main Paud Road in Left Bhusari Colony</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                    <span>Easy parking & ground/elevator accessibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                    <span>Serving Kothrud, Pune & Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CREATING MEMORIES THAT LAST (H2) */}
      <section className="py-16 sm:py-28 bg-[#111111] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            HERITAGE & EMOTION
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold leading-tight">
            Creating Memories That Last
          </h2>
          <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
            Children grow up in the blink of an eye, and moments pass by softly. At Clickmates Studio, we believe that a photograph is not just a digital file—it is a cherished family heirloom. It is the story of where your journey began, recorded with tenderness, grace, and timeless beauty for generations to look back on.
          </p>
        </div>
      </section>

      {/* SECTION 7: VISIT CLICKMATES STUDIO IN PUNE (H2) */}
      <section className="py-14 sm:py-24 bg-[#FFF0F6]/40 border-b border-[#FFF0F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              BOOK YOUR SESSION
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
              Visit Clickmates Studio in Pune
            </h2>
            <p className="text-[#666666] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              We invite you to experience the warmth of Clickmates Studio in Kothrud, Pune. Let us capture your family's story with artistry and care.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#ED78A8]/20 shadow-md text-left space-y-4 max-w-2xl mx-auto">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#242424] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ED78A8]" />
              Official Studio Address:
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
              Book Studio Session
            </button>
            <a
              href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20Clickmates%20Studio!%20I%20would%20like%20to%20enquire%20about%20a%20photoshoot.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[250px] sm:w-auto px-8 py-4 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              WhatsApp Studio Team
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: ABOUT PAGE FAQ — HIGH-INTENT QUESTIONS (ACCORDION & SCHEMA) */}
      <section className="py-14 sm:py-24 bg-[#FFFDFB] border-t border-[#FFF0F6]" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              About Clickmates Studio – High-Intent FAQs
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm font-light">
              Clear answers to your questions about our studio location, services, and booking process in Pune.
            </p>
          </div>

          <div className="space-y-3 max-w-[340px] sm:max-w-none mx-auto">
            {aboutFaqs.map((faq, index) => {
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