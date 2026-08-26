import { useState } from 'react'
import { ShieldCheck, Award, Sparkles, CheckCircle2, Eye, Target, Heart, Camera, Clock, Shirt, MapPin, HeartHandshake, ChevronDown } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import baby10 from '../assets/baby10.jpg'
import m16 from '../assets/m16.jpg'
import m18 from '../assets/m18.jpg'

export default function AboutPage({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const aboutFaqs = [
    {
      q: "What is the background and story behind ClickMates Photography in Pune?",
      a: "ClickMates Photography was founded in Kothrud, Pune with a passion for transforming family moments—from pregnancy glows to 1st birthday smiles—into timeless, high-resolution visual heirlooms for families across Pune."
    },
    {
      q: "Where is ClickMates Photography Studio based in Pune?",
      a: "ClickMates Photography is located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038."
    },
    {
      q: "What photography equipment and studio amenities does ClickMates Studio provide?",
      a: "Our Kothrud photography studio features soft continuous lights, handcrafted wooden props, designer maternity gowns, climate control (26°C-28°C), private nursing rooms, and 100% sanitized newborn baby wraps."
    },
    {
      q: "Does ClickMates Photography provide props and outfits for baby and maternity shoots?",
      a: "Yes, we provide an extensive collection of sanitized baby props, baskets, headbands, tiaras, balloon setups, and designer maternity gowns for all studio sessions at no extra fee."
    },
    {
      q: "Why do Pune parents choose ClickMates over other photography studios?",
      a: "Pune parents choose ClickMates for our strict hygiene protocols, patient unhurried shoot pacing, eye-friendly lighting, transparent package pricing, and emotional newborn & maternity portraiture."
    },
    {
      q: "Are family members and siblings allowed during baby and maternity sessions?",
      a: "Absolutely! All ClickMates studio sessions encourage parent, partner, sibling, and immediate family involvement at no extra charge."
    },
    {
      q: "What is ClickMates Photography's approach to image editing and retouching?",
      a: "We focus on natural editorial retouching that enhances skin warmth and color harmony without over-smoothing or altering your family's authentic look."
    },
    {
      q: "How can clients contact or visit ClickMates Studio in Kothrud, Pune?",
      a: "You can visit our studio on Paud Road, Kothrud by appointment, call us directly at +91 96999 45608, or connect with us instantly on WhatsApp."
    }
  ]

  const whyUsReasons = [
    {
      icon: ShieldCheck,
      title: "100% Baby Safety & Sanitized Studio",
      desc: "Every wrap, backdrop, prop, and surface is 100% disinfected. Studio is temperature-regulated (26°C-28°C) with eye-friendly soft continuous lighting."
    },
    {
      icon: Clock,
      title: "Unhurried Pacing & Private Nursing Lounge",
      desc: "We schedule generous time slots so there is zero rush. Take all the breaks you need for nursing, feeding, comforting, or baby naps."
    },
    {
      icon: Shirt,
      title: "Designer Wardrobe & Handcrafted Props",
      desc: "Access our curated wardrobe of flowing maternity gowns, tiaras, handcrafted wooden baskets, balloon setups, and themed props at no extra fee."
    },
    {
      icon: Award,
      title: "Editorial Retouching & Real Skin Tones",
      desc: "We preserve real skin textures, authentic smiles, and rich color harmonies without artificial over-smoothing or heavy filters."
    },
    {
      icon: HeartHandshake,
      title: "Transparent Package Pricing",
      desc: "Clear, upfront package pricing with zero hidden fees. Includes color-graded digital files and full print rights for your family."
    },
    {
      icon: MapPin,
      title: "Prime Location on Paud Road, Kothrud",
      desc: "Conveniently located in Left Bhusari Colony with easy parking, private changing suites, and accessible studio facilities."
    }
  ]

  return (
    <div className="bg-[#FFFDFB] text-[#242424] font-body" itemScope itemType="https://schema.org/AboutPage">
      <SEOHead
        title="About ClickMates Photography Studio in Kothrud, Pune | Vision, Mission & Why Us"
        description="Discover ClickMates Photography studio story, vision, mission, and why Pune parents choose us in Kothrud, Pune. Specialized in baby, newborn, maternity, family and event photography."
        keywords="About ClickMates Photography, Why Choose ClickMates, ClickMates Vision Mission, Professional Photographer Kothrud, Photography Studio Pune Story"
        canonicalUrl="https://clickmets.in/about"
        faqs={aboutFaqs}
      />

      {/* Image-Driven Hero Header Banner */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-36 bg-[#111111] text-white text-center overflow-hidden">
        <img
          src={m18}
          alt="ClickMates Photography Studio Story and Newborn Portraiture in Kothrud Pune"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-5">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/20 backdrop-blur-md px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full border border-white/30 shadow-lg max-w-full text-center leading-normal">
            OUR STORY & PHILOSOPHY
          </span>
          <h1 className="font-heading text-3xl sm:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
            More Than Photography — We Preserve Feelings
          </h1>
          <p className="text-slate-200 text-sm sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
            ClickMates Photography was born out of a deep belief that every smile, tiny detail, and family milestone deserves to be frozen in time with warmth and artistic grace in Pune.
          </p>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="pt-10 pb-14 sm:py-24 bg-[#FFF0F6]/40 border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-4 py-1.5 rounded-full border border-[#ED78A8]/20 shadow-xs max-w-full text-center leading-normal">
              PURPOSE & DIRECTION
            </span>
            <h2 className="font-heading text-2xl sm:text-5xl font-bold text-[#242424]">
              Our Vision & Mission
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-normal">
              Guided by a commitment to safety, artistic perfection, and genuine human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[340px] md:max-w-none mx-auto">
            {/* VISION CARD */}
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl hover:shadow-2xl transition-all duration-300 space-y-5 relative overflow-hidden group transform hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#ED78A8] text-white flex items-center justify-center shadow-md shadow-[#ED78A8]/25 shrink-0">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-2.5">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                    LOOKING FORWARD
                  </span>
                  <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#242424]">
                    Our Vision
                  </h3>
                  <p className="text-[#242424] text-sm sm:text-base leading-relaxed font-body font-normal">
                    To be Pune's most cherished and trusted specialized photography studio—setting the benchmark for turning transient family moments, from the silent heartbeat of pregnancy to 1st birthday giggles, into timeless fine-art heirlooms passed down through generations.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#FFF0F6] space-y-2 text-xs sm:text-sm font-nav font-semibold text-[#242424]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>Artistic fine-art maternity & baby portraiture standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>Trusted by 500+ families across Kothrud & Pune</span>
                </div>
              </div>
            </div>

            {/* MISSION CARD */}
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl hover:shadow-2xl transition-all duration-300 space-y-5 relative overflow-hidden group transform hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#ED78A8] text-white flex items-center justify-center shadow-md shadow-[#ED78A8]/25 shrink-0">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-2.5">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
                    OUR EVERYDAY COMMITMENT
                  </span>
                  <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#242424]">
                    Our Mission
                  </h3>
                  <p className="text-[#242424] text-sm sm:text-base leading-relaxed font-body font-normal">
                    To deliver an unhurried, 100% baby-safe, and deeply personalized photography experience. We combine rigorous sanitization, continuous soft lighting, luxury theme setups, and transparent pricing to create visual stories that honor every family's authentic bond.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#FFF0F6] space-y-2 text-xs sm:text-sm font-nav font-semibold text-[#242424]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>Unhurried, baby-led shoot pacing with private nursing care</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>Full transparent pricing with zero hidden fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="pt-8 pb-14 sm:py-28 bg-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-4 py-1.5 rounded-full border border-[#ED78A8]/20 max-w-full text-center leading-normal">
              OUR DIFFERENCE & ADVANTAGE
            </span>
            <h2 className="font-heading text-2xl sm:text-5xl font-bold text-[#242424]">
              Why Choose ClickMates Photography?
            </h2>
            <p className="text-[#242424] text-sm sm:text-lg font-normal">
              Here is why hundreds of expecting parents and families across Pune trust us with their milestone moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-[340px] md:max-w-none mx-auto">
            {whyUsReasons.map((item, index) => {
              const IconComp = item.icon
              return (
                <div
                  key={index}
                  className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/30 border-2 border-[#ED78A8]/30 shadow-lg hover:shadow-2xl hover:border-[#ED78A8] transition-all duration-300 space-y-3.5 relative group transform hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#ED78A8] text-white group-hover:bg-[#D9578D] transition-colors duration-300 flex items-center justify-center shrink-0 shadow-md shadow-[#ED78A8]/25">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#242424]">
                      {item.title}
                    </h3>
                    <p className="text-[#242424] text-sm sm:text-base leading-relaxed font-body font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center pt-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-xl shadow-[#ED78A8]/30 cursor-pointer"
            >
              Book Your Studio Session Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="pt-8 pb-14 sm:py-24 border-t border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
                Creating Comfort First, Magic Second
              </h2>
              <p className="text-[#242424] text-sm sm:text-base leading-relaxed font-body font-normal">
                When working with infants, pregnant mothers, and growing children, patience is our greatest tool. We design shoots around your baby's natural nap schedules and feeding needs, ensuring every session remains relaxed, unhurried, and joyful.
              </p>
              <p className="text-[#242424] text-sm sm:text-base leading-relaxed font-body font-normal">
                Our custom Pune photography studio in Kothrud is equipped with sanitized baby props, temperature regulation for sleepy newborn shoots, and cozy parent lounges so you feel right at home.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 font-nav">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#ED78A8]">100%</div>
                  <div className="text-xs sm:text-sm text-[#242424] uppercase tracking-wider font-semibold mt-1">Baby Safety Posing</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#ED78A8]">500+</div>
                  <div className="text-xs sm:text-sm text-[#242424] uppercase tracking-wider font-semibold mt-1">Memories Captured</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4 max-w-[320px] lg:max-w-none mx-auto">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#ED78A8]/30 shadow-xl h-52 sm:h-72 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={baby10}
                  alt="ClickMates Studio Newborn Detail and Infant Photography Kothrud Pune"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#ED78A8]/30 shadow-xl h-52 sm:h-72 mt-4 sm:mt-8 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={m16}
                  alt="ClickMates Maternity Photoshoot and Expecting Mother Portraiture Pune"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Standards Grid */}
      <section className="py-12 sm:py-20 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12">
          <div className="max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#ED78A8]/10 px-4 py-1.5 rounded-full border border-[#ED78A8]/30 max-w-full text-center leading-normal">
              STUDIO GUARANTEE
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white">The ClickMates Promise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-left max-w-[320px] md:max-w-none mx-auto">
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1e1e1e] to-[#141414] border border-[#ED78A8]/30 shadow-xl hover:border-[#ED78A8] transition-all duration-300 transform hover:-translate-y-1 space-y-2.5 sm:space-y-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#ED78A8]/15 text-[#ED78A8] border border-[#ED78A8]/30 flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base sm:text-xl font-bold text-white">Sanitized & Safe Environment</h3>
              <p className="text-slate-200 text-xs sm:text-base leading-relaxed font-body font-normal">
                All wraps, backdrops, props, and surfaces are thoroughly disinfected before every newborn and baby shoot.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1e1e1e] to-[#141414] border border-[#ED78A8]/30 shadow-xl hover:border-[#ED78A8] transition-all duration-300 transform hover:-translate-y-1 space-y-2.5 sm:space-y-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#ED78A8]/15 text-[#ED78A8] border border-[#ED78A8]/30 flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base sm:text-xl font-bold text-white">High-End Custom Styling</h3>
              <p className="text-slate-200 text-xs sm:text-base leading-relaxed font-body font-normal">
                We work closely with you to curate color themes, outfit choices, and set decorations tailored to your taste.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1e1e1e] to-[#141414] border border-[#ED78A8]/30 shadow-xl hover:border-[#ED78A8] transition-all duration-300 transform hover:-translate-y-1 space-y-2.5 sm:space-y-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#ED78A8]/15 text-[#ED78A8] border border-[#ED78A8]/30 flex items-center justify-center shrink-0 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base sm:text-xl font-bold text-white">Editorial Quality Retouching</h3>
              <p className="text-slate-200 text-xs sm:text-base leading-relaxed font-body font-normal">
                Our retouching process preserves natural textures while enhancing warmth, color tones, and clarity.
              </p>
            </div>
          </div>

          <div className="pt-4 sm:pt-6">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-[270px] sm:w-auto px-5 py-3 sm:px-8 sm:py-4 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-xl shadow-[#ED78A8]/40 mx-auto flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Reserve Studio Session
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT ACCORDION FAQS SECTION */}
      <section className="pt-8 pb-14 sm:py-20 bg-[#FFFDFB] border-t border-[#FFF0F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-4 py-1.5 rounded-full border border-[#ED78A8]/20 max-w-full text-center leading-normal">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
              Frequently Asked Questions About Our Studio
            </h2>
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
                >
                  <button
                    type="button"
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