import { ShieldCheck, Award, Sparkles, CheckCircle2, Eye, Target, Heart, Camera, Clock, Shirt, MapPin, HeartHandshake } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import baby10 from '../assets/baby10.jpg'
import m16 from '../assets/m16.jpg'
import m18 from '../assets/m18.jpg'

export default function AboutPage({ onOpenBooking }) {
  const aboutFaqs = [
    {
      q: "What is the background and story behind ClickMates Photography in Pune?",
      a: "ClickMates Photography was founded in Kothrud, Pune with a passion for transforming family moments—from pregnancy glows to 1st birthday smiles—into timeless, high-resolution visual heirlooms."
    },
    {
      q: "Where is ClickMates Photography Studio based in Pune?",
      a: "ClickMates Photography is located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038."
    },
    {
      q: "What photography equipment and studio amenities does ClickMates Studio provide?",
      a: "Our Kothrud studio features soft continuous lights, handcrafted wooden props, designer maternity gowns, climate control, private nursing rooms, and sanitized newborn wraps."
    },
    {
      q: "Does ClickMates Photography provide props and outfits for baby and maternity shoots?",
      a: "Yes, we provide an extensive collection of sanitized baby props, baskets, headbands, tiaras, and designer maternity gowns for all studio sessions."
    },
    {
      q: "Why do Pune parents choose ClickMates over other photography studios?",
      a: "Pune parents choose ClickMates for our strict hygiene protocols, patient unhurried shoot pacing, artistic lighting, transparent package pricing, and emotional portraiture."
    },
    {
      q: "Are family members and siblings allowed during baby and maternity sessions?",
      a: "Absolutely! All ClickMates studio sessions encourage parent, partner, sibling, and immediate family involvement at no extra fee."
    },
    {
      q: "What is ClickMates Photography's approach to image editing and retouching?",
      a: "We focus on natural editorial retouching that enhances skin warmth and color harmony without over-smoothing or altering your family's authentic look."
    },
    {
      q: "How can clients contact or visit ClickMates Studio in Kothrud?",
      a: "You can visit our studio on Paud Road, Kothrud by appointment, call us at +91 96999 45608, or connect with us on WhatsApp."
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
    <div className="pt-20 pb-20 bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title="About ClickMates Photography Studio in Kothrud, Pune | Vision, Mission & Why Us"
        description="Discover ClickMates Photography studio story, vision, mission, and why Pune parents choose us in Kothrud, Pune. Specialized in baby, newborn, maternity, family and event photography."
        keywords="About ClickMates Photography, Why Choose ClickMates, ClickMates Vision Mission, Professional Photographer Kothrud, Photography Studio Pune Story"
        canonicalUrl="https://clickmets.in/about"
        faqs={aboutFaqs}
      />

      {/* Image-Driven Hero Header Banner */}
      <section className="relative py-32 sm:py-44 bg-[#111111] text-white text-center overflow-hidden">
        <img
          src={m18}
          alt="ClickMates Photography Studio Story Kothrud Pune"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 shadow-lg">
            OUR STORY & PHILOSOPHY
          </span>
          <h1 className="font-heading text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">
            More Than Photography. We Preserve Feelings.
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            ClickMates Photography was born out of a deep belief that every smile, tiny detail, and family milestone deserves to be frozen in time with warmth and artistic grace.
          </p>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="py-16 sm:py-24 bg-[#FFF0F6]/40 border-b border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20 shadow-xs">
              PURPOSE & DIRECTION
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
              Our Vision & Mission
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-light">
              Guided by a commitment to safety, artistic perfection, and genuine human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* VISION CARD */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#FFF0F6] shadow-sm hover:shadow-xl transition-all duration-300 space-y-6 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8]">
                <Eye className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">
                  LOOKING FORWARD
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424]">
                  Our Vision
                </h3>
                <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                  To be Pune's most cherished and trusted specialized photography studio—setting the benchmark for turning transient family moments, from the silent heartbeat of pregnancy to 1st birthday giggles, into timeless fine-art heirlooms passed down through generations.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-nav text-[#242424]">
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
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#FFF0F6] shadow-sm hover:shadow-xl transition-all duration-300 space-y-6 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8]">
                <Target className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">
                  OUR EVERYDAY COMMITMENT
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424]">
                  Our Mission
                </h3>
                <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                  To deliver an unhurried, 100% baby-safe, and deeply personalized photography experience. We combine rigorous sanitization, continuous soft lighting, luxury theme setups, and transparent pricing to create visual stories that honor every family's authentic bond.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-nav text-[#242424]">
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
      <section className="py-20 sm:py-28 bg-[#FFFDFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              OUR DIFFERENCE & ADVANTAGE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
              Why Choose ClickMates Photography?
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-light">
              Here is why hundreds of expecting parents and families across Pune trust us with their milestone moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsReasons.map((item, index) => {
              const IconComp = item.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-white border border-[#FFF0F6] shadow-xs hover:shadow-xl transition-all duration-300 space-y-4 relative group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] flex items-center justify-center text-[#ED78A8] group-hover:bg-[#ED78A8] group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#242424]">
                    {item.title}
                  </h3>
                  <p className="text-[#666666] text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-xl shadow-[#ED78A8]/30 cursor-pointer"
            >
              Book Your Studio Session Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-16 sm:py-24 border-t border-[#FFF0F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
                Creating Comfort First, Magic Second
              </h2>
              <p className="text-[#666666] text-base leading-relaxed">
                When working with infants, pregnant mothers, and growing children, patience is our greatest tool. We design shoots around your baby's natural nap schedules and feeding needs, ensuring every session remains relaxed, unhurried, and joyful.
              </p>
              <p className="text-[#666666] text-base leading-relaxed">
                Our custom Pune photography studio in Kothrud is equipped with sanitized baby props, temperature regulation for sleepy newborn shoots, and cozy parent lounges so you feel right at home.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100 font-nav">
                <div>
                  <div className="text-3xl font-extrabold text-[#ED78A8]">100%</div>
                  <div className="text-xs text-[#666666] uppercase tracking-wider font-semibold mt-1">Baby Safety Posing</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#ED78A8]">500+</div>
                  <div className="text-xs text-[#666666] uppercase tracking-wider font-semibold mt-1">Memories Captured</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-lg h-72">
                <img
                  src={baby10}
                  alt="ClickMates Studio Newborn Detail Kothrud Pune"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-72 mt-8">
                <img
                  src={m16}
                  alt="ClickMates Maternity Photoshoot Pune"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Standards Grid */}
      <section className="py-16 sm:py-20 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">
              STUDIO GUARANTEE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">The ClickMates Promise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-[#1d1d1d] border border-white/10 space-y-4">
              <ShieldCheck className="w-8 h-8 text-[#ED78A8]" />
              <h3 className="font-heading text-xl font-bold">Sanitized & Safe Environment</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                All wraps, backdrops, props, and surfaces are thoroughly disinfected before every newborn and baby shoot.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#1d1d1d] border border-white/10 space-y-4">
              <Sparkles className="w-8 h-8 text-[#ED78A8]" />
              <h3 className="font-heading text-xl font-bold">High-End Custom Styling</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We work closely with you to curate color themes, outfit choices, and set decorations tailored to your taste.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#1d1d1d] border border-white/10 space-y-4">
              <Award className="w-8 h-8 text-[#ED78A8]" />
              <h3 className="font-heading text-xl font-bold">Editorial Quality Retouching</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Our retouching process preserves natural textures while enhancing warmth, color tones, and clarity.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-xl shadow-[#ED78A8]/30 cursor-pointer"
            >
              Reserve Your Studio Session
            </button>
          </div>
        </div>
      </section>

      {/* 8 ABOUT FAQS SECTION */}
      <section className="py-20 bg-[#FFFDFB] border-t border-[#FFF0F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              Frequently Asked Questions About Our Studio
            </h2>
          </div>

          <div className="space-y-4">
            {aboutFaqs.map((faq, index) => (
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
