import { useState } from 'react'
import { CheckCircle2, MessageCircle, Sparkles, Heart, Gift, Baby, Calendar, Camera, Star } from 'lucide-react'
import { brandDetails } from '../data/photographyData'
import SEOHead from '../components/SEOHead'
import baby15 from '../assets/baby15.jpg'

export default function PackagesPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('NEWBORN')

  const packageFaqs = [
    {
      q: "What are the starting prices for photography packages at ClickMates Photography in Pune?",
      a: "ClickMates Photography offers transparent packages starting from ₹2,999 for essential newborn and baby shoots up to comprehensive multi-milestone journey bundles."
    },
    {
      q: "Where is ClickMates Photography Studio located for package shoots?",
      a: "Package sessions are hosted at our studio: Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038."
    },
    {
      q: "What is the ClickMates ₹85,000 Special Shoot Package?",
      a: "The ₹85,000 Special Shoot Package is an all-inclusive 6-milestone journey covering Maternity, Baby Shower, Newborn, Monthly Growth Shoots, Pre-Birthday, and 1st Birthday with full RAW files and prints."
    },
    {
      q: "Are all digital photos delivered in high resolution with package bookings?",
      a: "Yes, all package bookings include professionally color-graded, high-resolution digital files delivered via a secure private online gallery."
    },
    {
      q: "Are props, backdrops, and wraps included in baby shoot packages?",
      a: "Yes, all baby and newborn packages include complete access to our sanitized props, baskets, theme setups, tiaras, and specialized wraps."
    },
    {
      q: "Can parents and siblings join package photoshoots without extra charge?",
      a: "Yes, immediate family participation (parents, partner, siblings) is included in all ClickMates session packages at no additional cost."
    },
    {
      q: "How do I make a payment or lock in a package booking date?",
      a: "You can lock in your preferred date with a nominal advance booking deposit via UPI, bank transfer, or cash at our Kothrud studio."
    },
    {
      q: "What is the turnaround time for receiving edited photos from ClickMates?",
      a: "Digital previews are typically shared within 3–5 days, and final fully retouched high-resolution images are delivered within 7–14 days."
    }
  ]

  const categories = [
    { id: 'NEWBORN', name: 'Newborn Shoot' },
    { id: 'BABY', name: 'Baby Shoot' },
    { id: 'MATERNITY', name: 'Maternity Shoot' },
    { id: 'EVENTS', name: 'Events & Parties' },
    { id: 'BUNDLE', name: 'Special Journey Bundle (₹85,000)' }
  ]

  const newbornPackages = [
    {
      name: 'BASIC',
      price: '₹2,999',
      popular: false,
      features: [
        '1 Theme Setup',
        'All RAW Pictures Provided',
        '8–10 High-Res Edited Pictures',
        '30–45 Min Indoor Session',
        'Indoor Studio Only',
        'Wraps & Props Included'
      ]
    },
    {
      name: 'STANDARD',
      price: '₹5,999',
      popular: true,
      features: [
        '2 Themes + Family Photos',
        'All RAW Pictures Provided',
        '15 High-Res Edited Pictures',
        '1.5 Hours Studio Session',
        'Indoor Studio Only',
        'Wraps & Props Included'
      ]
    },
    {
      name: 'PREMIUM',
      price: '₹7,999',
      popular: false,
      features: [
        '3 Themes + Family Photos',
        'All RAW Pictures Provided',
        '30 High-Res Edited Pictures',
        '2.5 Hours Studio Session',
        'Indoor Studio Only',
        'Wraps & Props Included'
      ]
    },
    {
      name: 'LUXURY',
      price: '₹9,999',
      popular: false,
      features: [
        '3 Themes + Family Photos',
        'All RAW Pictures Provided',
        '30 Edited Pictures + Video Reel',
        '2.5 Hours Session',
        'Indoor & Outdoor Options',
        'Wraps & Props Included'
      ]
    }
  ]

  const babyPackages = [
    {
      name: 'BASIC',
      price: '₹3,999',
      popular: false,
      features: [
        '1 Theme Setup',
        'All RAW Pictures Provided',
        '8–10 High-Res Edited Pictures',
        '30–45 Min Indoor Session',
        'Indoor Studio Only',
        'Wraps & Props Included'
      ]
    },
    {
      name: 'STANDARD',
      price: '₹6,999',
      popular: true,
      features: [
        '2 Themes + Family Photos',
        'All RAW Pictures Provided',
        '15 High-Res Edited Pictures',
        '1.5 Hours Studio Session',
        'Indoor Studio Only',
        'Wraps & Props Included'
      ]
    },
    {
      name: 'PREMIUM',
      price: '₹8,999',
      popular: false,
      features: [
        '3 Themes + Family Photos',
        'All RAW Pictures Provided',
        '30 High-Res Edited Pictures',
        '2.5 Hours Studio Session',
        'Indoor Studio Only',
        'Wraps & Props Included'
      ]
    },
    {
      name: 'LUXURY',
      price: '₹10,999',
      popular: false,
      features: [
        '3 Themes + Family Photos',
        'All RAW Pictures Provided',
        '30 Edited Pictures + Video Reel',
        '2.5 Hours Session',
        'Indoor & Outdoor Options',
        'Wraps & Props Included'
      ]
    }
  ]

  const maternityPackages = [
    {
      name: 'BASIC',
      price: '₹3,999',
      popular: false,
      features: [
        '1 Outfit Allowed (Gowns Included)',
        '45 Min Indoor Session',
        '10 Edited (1 Effect Image) + RAW Images',
        'Inclusive of Props, Accessories, Tiaras & Shoes'
      ]
    },
    {
      name: 'STANDARD',
      price: '₹6,999',
      popular: false,
      features: [
        '2 Outfits Allowed (Gowns Included)',
        '2.5 Hours Indoor Session',
        'Single-Time Makeup & Hairstyle Included',
        '20 Edited (2 Effect Images) + RAW Images',
        'Inclusive of Props, Accessories & Tiaras'
      ]
    },
    {
      name: 'PREMIUM',
      price: '₹9,999',
      popular: true,
      features: [
        '3 Outfits Allowed (Gowns Included)',
        '3.5 Hours Indoor or Outdoor Session',
        'Single-Time Makeup & Hairstyle Included',
        '30 Edited (3 Effect Images) + RAW Images',
        'Inclusive of Props & Styling Accessories'
      ]
    },
    {
      name: 'PLATINUM',
      price: '₹15,999',
      popular: false,
      features: [
        '5 Outfits Allowed (Gowns Included)',
        '5–6 Hours Indoor + Outdoor Session',
        'Single-Time Makeup & Hairstyle Included',
        '50 Edited (5 Effect Images) + RAW Images',
        'Full Family & Partner Participation'
      ]
    },
    {
      name: 'LUXURY',
      price: '₹25,999',
      popular: false,
      features: [
        '3 Outfits Allowed (Gowns Included)',
        '4 Hours Outdoor Session',
        'Single-Time Makeup & Hairstyle Included',
        '35 Edited Pictures + All RAW Images',
        '1 Teaser (50–60s) + 1 Instagram Reel (40–50s)',
        '1 Full Cinematic Video (2–3 Min)'
      ]
    }
  ]

  const eventPackages = [
    {
      name: 'PACKAGE 1 (TRADITIONAL)',
      price: '₹6,500',
      popular: false,
      features: [
        'Traditional High-Res Photography',
        'All RAW Pictures Provided',
        '80 High-Res Edited Pictures',
        '3–4 Hours Event Coverage',
        'Full Ceremony & Guest Details'
      ]
    },
    {
      name: 'PACKAGE 2 (CANDID)',
      price: '₹8,000',
      popular: true,
      features: [
        'Candid Emotion Photography',
        'All RAW Pictures Provided',
        '100 High-Res Edited Pictures',
        '3–4 Hours Event Coverage',
        'Artistic Lighting & Framing'
      ]
    },
    {
      name: 'PACKAGE 3 (PHOTO + VIDEO)',
      price: '₹13,500',
      popular: false,
      features: [
        'Traditional Photo + Traditional Video',
        'All RAW Pictures Provided',
        '80 High-Res Edited Pictures',
        '1 Full Length Edited Event Video',
        '3–4 Hours Full Coverage'
      ]
    },
    {
      name: 'PACKAGE 4 (CANDID + CINEMATIC)',
      price: '₹22,000',
      popular: false,
      features: [
        'Candid Photo + Cinematography',
        'All RAW Pictures Provided',
        '80 High-Res Edited Pictures',
        '1 Full Cinematic Film + 1 Teaser',
        '1 Instagram Reel Cut Included',
        '3–4 Hours Coverage'
      ]
    }
  ]

  return (
    <div className="pt-20 pb-20 bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title="Photography Packages & Pricing in Pune | ClickMates Photography Kothrud"
        description="Explore official ClickMates Photography packages and pricing in Kothrud, Pune for Baby shoots, Newborn photography, Maternity sessions, and Event coverage."
        keywords="Photography Packages Pune, Baby Photoshoot Charges Pune, Newborn Shoot Cost Kothrud, Maternity Shoot Pricing Pune, ClickMates Photography Packages"
        canonicalUrl={`https://${brandDetails.domain}/packages`}
        faqs={packageFaqs}
      />

      {/* Hero Header Banner with Background Photo */}
      <section className="relative py-32 sm:py-44 bg-[#111111] text-white text-center overflow-hidden">
        <img
          src={baby15}
          alt="ClickMates Photography Packages Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 shadow-lg">
            TRANSPARENT VALUE & INVESTMENT
          </span>
          <h1 className="font-heading text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">
            Photography Collections & Pricing
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Capturing Memories, Creating Timeless Treasures. Explore our official newborn, baby, maternity, and event collections.
          </p>
        </div>
      </section>

      {/* Category Tab Selector Bar */}
      <section className="py-12 bg-[#FFF0F6]/50 border-b border-[#ED78A8]/20 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-nav text-xs font-semibold">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 sm:px-6 py-3 rounded-full transition-all duration-300 uppercase tracking-wider ${
                  activeCategory === cat.id
                    ? 'bg-[#ED78A8] text-white shadow-lg shadow-[#ED78A8]/30 scale-105'
                    : 'bg-white text-[#242424] hover:bg-[#FFF0F6] border border-[#ED78A8]/30'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Packages Display Container */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NEWBORN PACKAGES */}
        {activeCategory === 'NEWBORN' && (
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-3xl font-bold text-[#ED78A8]">• NEWBORN SHOOT PACKAGES •</h2>
              <p className="text-xs sm:text-sm text-[#666666]">Tiny Moments, Timeless Memories (Ideal for 5 to 30 Days Old)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newbornPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 border flex flex-col justify-between relative transition-all duration-300 ${
                    pkg.popular
                      ? 'border-[#ED78A8] shadow-2xl ring-2 ring-[#ED78A8]/30'
                      : 'border-[#FFF0F6] shadow-sm hover:shadow-md'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ED78A8] text-white px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-4">
                    <div className="text-center pt-2">
                      <h3 className="font-heading text-xl font-bold text-[#242424]">{pkg.name}</h3>
                      <div className="text-3xl font-extrabold text-[#ED78A8] mt-1">{pkg.price}</div>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#242424] border-t border-slate-100 pt-4 font-body">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md"
                    >
                      Book Newborn Shoot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BABY PACKAGES */}
        {activeCategory === 'BABY' && (
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-3xl font-bold text-[#ED78A8]">• BABY SHOOT PACKAGES •</h2>
              <p className="text-xs sm:text-sm text-[#666666]">Cherish Today, Treasure Forever (3 to 12 Months)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {babyPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 border flex flex-col justify-between relative transition-all duration-300 ${
                    pkg.popular
                      ? 'border-[#ED78A8] shadow-2xl ring-2 ring-[#ED78A8]/30'
                      : 'border-[#FFF0F6] shadow-sm hover:shadow-md'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ED78A8] text-white px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-4">
                    <div className="text-center pt-2">
                      <h3 className="font-heading text-xl font-bold text-[#242424]">{pkg.name}</h3>
                      <div className="text-3xl font-extrabold text-[#ED78A8] mt-1">{pkg.price}</div>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#242424] border-t border-slate-100 pt-4 font-body">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md"
                    >
                      Book Baby Shoot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MATERNITY PACKAGES */}
        {activeCategory === 'MATERNITY' && (
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-3xl font-bold text-[#ED78A8]">• MATERNITY SHOOT PACKAGES •</h2>
              <p className="text-xs sm:text-sm text-[#666666]">Celebrating the Beautiful Journey to Motherhood</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {maternityPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 border flex flex-col justify-between relative transition-all duration-300 ${
                    pkg.popular
                      ? 'border-[#ED78A8] shadow-2xl ring-2 ring-[#ED78A8]/30'
                      : 'border-[#FFF0F6] shadow-sm hover:shadow-md'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ED78A8] text-white px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-4">
                    <div className="text-center pt-2">
                      <h3 className="font-heading text-xl font-bold text-[#242424]">{pkg.name}</h3>
                      <div className="text-3xl font-extrabold text-[#ED78A8] mt-1">{pkg.price}</div>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#242424] border-t border-slate-100 pt-4 font-body">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md"
                    >
                      Book Maternity Shoot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EVENTS PACKAGES */}
        {activeCategory === 'EVENTS' && (
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-3xl font-bold text-[#ED78A8]">• EVENTS & CELEBRATION PACKAGES •</h2>
              <p className="text-xs sm:text-sm text-[#666666]">Birthdays, Baby Showers, Naming Ceremonies & Celebrations</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 border flex flex-col justify-between relative transition-all duration-300 ${
                    pkg.popular
                      ? 'border-[#ED78A8] shadow-2xl ring-2 ring-[#ED78A8]/30'
                      : 'border-[#FFF0F6] shadow-sm hover:shadow-md'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ED78A8] text-white px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-4">
                    <div className="text-center pt-2">
                      <h3 className="font-heading text-lg font-bold text-[#242424]">{pkg.name}</h3>
                      <div className="text-3xl font-extrabold text-[#ED78A8] mt-1">{pkg.price}</div>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#242424] border-t border-slate-100 pt-4 font-body">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md"
                    >
                      Book Event Coverage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SPECIAL JOURNEY BUNDLE (₹85,000) */}
        {activeCategory === 'BUNDLE' && (
          <div className="bg-gradient-to-br from-[#FFF0F6] to-white p-8 sm:p-12 rounded-3xl border-2 border-[#ED78A8] shadow-2xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ED78A8] text-white text-xs font-semibold uppercase tracking-widest font-nav">
                EXCLUSIVE ALL-IN-ONE MILESTONE BUNDLE
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#242424]">
                CLICKMATES SPECIAL SHOOT PACKAGE
              </h2>
              <div className="text-4xl sm:text-6xl font-black text-[#ED78A8]">₹85,000</div>
              <p className="text-[#666666] text-sm sm:text-base font-body">
                From Maternity to 1st Birthday — A Complete 6-Milestone Journey Captured Forever
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
              <div className="p-4 bg-white rounded-2xl text-center border border-[#ED78A8]/20 shadow-sm space-y-2">
                <Heart className="w-6 h-6 text-[#ED78A8] mx-auto" />
                <h4 className="font-heading font-bold text-xs">1. Maternity Shoot</h4>
              </div>
              <div className="p-4 bg-white rounded-2xl text-center border border-[#ED78A8]/20 shadow-sm space-y-2">
                <Gift className="w-6 h-6 text-[#ED78A8] mx-auto" />
                <h4 className="font-heading font-bold text-xs">2. Baby Shower</h4>
              </div>
              <div className="p-4 bg-white rounded-2xl text-center border border-[#ED78A8]/20 shadow-sm space-y-2">
                <Baby className="w-6 h-6 text-[#ED78A8] mx-auto" />
                <h4 className="font-heading font-bold text-xs">3. Newborn Shoot</h4>
              </div>
              <div className="p-4 bg-white rounded-2xl text-center border border-[#ED78A8]/20 shadow-sm space-y-2">
                <Calendar className="w-6 h-6 text-[#ED78A8] mx-auto" />
                <h4 className="font-heading font-bold text-xs">4. Monthly Shoots</h4>
              </div>
              <div className="p-4 bg-white rounded-2xl text-center border border-[#ED78A8]/20 shadow-sm space-y-2">
                <Sparkles className="w-6 h-6 text-[#ED78A8] mx-auto" />
                <h4 className="font-heading font-bold text-xs">5. Pre-Birthday</h4>
              </div>
              <div className="p-4 bg-white rounded-2xl text-center border border-[#ED78A8]/20 shadow-sm space-y-2">
                <Star className="w-6 h-6 text-[#ED78A8] mx-auto" />
                <h4 className="font-heading font-bold text-xs">6. 1st Birthday</h4>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#ED78A8]/30 space-y-4">
              <h3 className="font-heading text-lg font-bold text-[#ED78A8] text-center">What's Included in the ₹85,000 Special Journey?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-body text-[#242424]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                  <span>All RAW Images Provided in High-Res</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                  <span>Professionally Retouched Photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                  <span>Custom Props, Tiaras & Accessories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                  <span>Single-Time Makeup & Hairstyle</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                  <span>Immediate Family Participation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8]" />
                  <span>Complete Keepsake Memories for Life</span>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={onOpenBooking}
                  className="px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-xl shadow-[#ED78A8]/30"
                >
                  Reserve Special ₹85,000 Journey Package
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ADDITIONAL SERVICES & ADD-ONS SECTION */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#FFF0F6] shadow-xl space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">CUSTOM OPTIONS</span>
            <h3 className="font-heading text-2xl font-bold">Additional Charges & Styling Add-ons</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-body text-[#242424]">
            <div className="p-4 rounded-2xl bg-[#FFF0F6]/40 border border-[#ED78A8]/20 space-y-1">
              <div className="font-bold text-[#ED78A8]">Additional Makeup & Hairstyle</div>
              <div className="text-sm font-extrabold">₹1,500 per person</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF0F6]/40 border border-[#ED78A8]/20 space-y-1">
              <div className="font-bold text-[#ED78A8]">Outdoor Location Fee</div>
              <div className="text-sm font-extrabold">₹700</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF0F6]/40 border border-[#ED78A8]/20 space-y-1">
              <div className="font-bold text-[#ED78A8]">Extended Family Members</div>
              <div className="text-sm font-extrabold">₹700 per person</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF0F6]/40 border border-[#ED78A8]/20 space-y-1">
              <div className="font-bold text-[#ED78A8]">Instagram Reel (1 Min)</div>
              <div className="text-sm font-extrabold">₹1,500 per reel</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF0F6]/40 border border-[#ED78A8]/20 space-y-1">
              <div className="font-bold text-[#ED78A8]">Saree Draping</div>
              <div className="text-sm font-extrabold">₹300 per saree</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF0F6]/40 border border-[#ED78A8]/20 space-y-1">
              <div className="font-bold text-[#ED78A8]">Premium Printed Album (10 Sheets)</div>
              <div className="text-sm font-extrabold">₹6,500</div>
            </div>
          </div>
        </div>

        {/* 8 PACKAGE FAQS SECTION */}
        <div className="mt-16 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#242424]">
              Frequently Asked Questions About Packages & Pricing
            </h2>
          </div>

          <div className="space-y-4">
            {packageFaqs.map((faq, index) => (
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

        {/* TERMS & STUDIO POLICIES */}
        <div className="mt-12 p-8 rounded-3xl bg-[#111111] text-white space-y-6 shadow-2xl">
          <h3 className="font-heading text-2xl font-bold text-center">Studio Policies & Booking Terms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-nav text-[#ED78A8]">1. BOOKING CONFIRMATION</h4>
              <p>Bookings are confirmed upon 50% advance payment. Remaining balance must be cleared on the day of shoot before receiving RAW images.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-nav text-[#ED78A8]">2. EDITING TIMELINE</h4>
              <p>Editing timeline is 10 to 15 working days from the date of final photo selection.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-nav text-[#ED78A8]">3. SAFETY & SANITIZATION</h4>
              <p>All newborn props, wraps, and studio surfaces are 100% sanitized before every shoot for baby safety.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <a
              href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates!%20I'd%20like%20to%20enquire%20about%20your%20photography%20packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-lg shadow-[#ED78A8]/30"
            >
              <MessageCircle className="w-4 h-4" /> Enquire & Custom Package Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
