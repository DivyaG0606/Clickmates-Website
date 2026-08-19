import { useState } from 'react'
import { CheckCircle2, MessageCircle, Sparkles, Heart, Gift, Baby, Calendar, Camera, Star, ChevronDown } from 'lucide-react'
import { brandDetails } from '../data/photographyData'
import SEOHead from '../components/SEOHead'
import baby15 from '../assets/baby15.jpg'

export default function PackagesPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('NEWBORN')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const packageFaqs = [
    {
      q: "What are the starting prices for photography packages at ClickMates Photography in Pune?",
      a: "ClickMates Photography offers transparent, budget-friendly packages starting from ₹2,999 for essential newborn and baby milestone shoots in Kothrud, up to all-inclusive 6-milestone journey bundles across Pune."
    },
    {
      q: "Where is ClickMates Photography Studio located for package shoots in Pune?",
      a: "All studio package sessions take place at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038—conveniently located for families in Kothrud, Karve Nagar, Bavdhan, and Baner."
    },
    {
      q: "What is included in the ClickMates ₹85,000 Special Journey Package?",
      a: "The ₹85,000 Special Shoot Package is a complete 6-milestone journey covering Maternity, Baby Shower (Dohale Jevan), Newborn, Monthly Growth Shoots, Pre-Birthday, and 1st Birthday with full RAW files, retouched prints, and video reels."
    },
    {
      q: "Are all digital photos delivered in high resolution with package bookings?",
      a: "Yes! Every session package includes professionally color-graded, high-resolution digital portraits delivered via a password-protected private online gallery."
    },
    {
      q: "Are props, backdrops, tiaras, and wraps included in baby shoot packages?",
      a: "Yes, all baby and newborn packages include complete access to our 100% sanitized wooden props, baskets, theme backdrops, tiaras, and specialized baby wraps at no extra charge."
    },
    {
      q: "Can parents, partners, and siblings join package photoshoots without extra cost?",
      a: "Absolutely! Immediate family participation (parents, partner, siblings) is included in all ClickMates session packages at zero additional fee."
    },
    {
      q: "How do I make a payment or lock in a package booking date in Kothrud, Pune?",
      a: "You can reserve your preferred session date with a nominal advance booking deposit via Google Pay, UPI, bank transfer, or cash at our Kothrud studio."
    },
    {
      q: "What is the turnaround time for receiving edited photos from ClickMates Studio?",
      a: "Digital previews are shared within 3–5 days, and final fully retouched high-resolution images are delivered within 7–14 working days."
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
        '3 Hours Studio Session',
        'Indoor Studio Only',
        'Full Props & Wraps Included'
      ]
    }
  ]

  const babyPackages = [
    {
      name: 'BASIC',
      price: '₹2,999',
      popular: false,
      features: [
        '1 Theme Setup',
        'All RAW Pictures Provided',
        '8–10 High-Res Edited Pictures',
        '30–45 Min Studio Session',
        'Indoor Studio Only',
        'Props & Outfits Included'
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
        'Props & Outfits Included'
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
        'Props & Outfits Included'
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
        '3 Hours Studio Session',
        'Indoor Studio Only',
        'Full Props & Outfits Included'
      ]
    }
  ]

  const maternityPackages = [
    {
      name: 'BASIC',
      price: '₹4,999',
      popular: false,
      features: [
        '1 Theme Setup',
        'All RAW Pictures Provided',
        '10 High-Res Edited Pictures',
        'Indoor Studio Only',
        'Props & Gowns Included',
        'Couple & Solo Shots'
      ]
    },
    {
      name: 'STANDARD',
      price: '₹7,999',
      popular: true,
      features: [
        '2 Themes + Couple Photos',
        'All RAW Pictures Provided',
        '15 High-Res Edited Pictures',
        'Indoor Studio Only',
        'Designer Gowns Included',
        'Makeup & Hairstyling Support'
      ]
    },
    {
      name: 'PREMIUM',
      price: '₹11,999',
      popular: false,
      features: [
        '3 Themes + Couple Photos',
        'All RAW Pictures Provided',
        '25 High-Res Edited Pictures',
        'Indoor Studio + Outdoor',
        'Designer Gowns Included',
        'Full Styling & Retouching'
      ]
    }
  ]

  const eventPackages = [
    {
      name: 'PACKAGE 1 (BASIC PHOTO)',
      price: '₹4,500',
      popular: false,
      features: [
        '1 Traditional Photographer',
        'All RAW Pictures Provided',
        '30 High-Res Edited Pictures',
        '2 Hours Event Coverage',
        'Suitable for Small Gatherings'
      ]
    },
    {
      name: 'PACKAGE 2 (STANDARD PHOTO)',
      price: '₹8,500',
      popular: true,
      features: [
        '1 Traditional + 1 Candid Photographer',
        'All RAW Pictures Provided',
        '50 High-Res Edited Pictures',
        '3–4 Hours Event Coverage',
        'Ideal for Baby Showers & Birthdays'
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
    <div className="bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title="Photography Packages & Pricing in Pune | ClickMates Photography Kothrud"
        description="Explore official ClickMates Photography packages and pricing in Kothrud, Pune for Baby shoots, Newborn photography, Maternity sessions, and Event coverage."
        keywords="Photography Packages Pune, Baby Photoshoot Charges Pune, Newborn Shoot Cost Kothrud, Maternity Shoot Pricing Pune, ClickMates Photography Packages"
        canonicalUrl={`https://${brandDetails.domain}/packages`}
        faqs={packageFaqs}
      />

      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-36 bg-[#111111] text-white text-center overflow-hidden">
        <img
          src={baby15}
          alt="ClickMates Photography Packages Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-5">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/20 backdrop-blur-md px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full border border-white/30 shadow-lg max-w-full text-center leading-normal">
            TRANSPARENT VALUE & INVESTMENT
          </span>
          <h1 className="font-heading text-3xl sm:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
            Photography Collections & Pricing
          </h1>
          <p className="text-slate-200 text-sm sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
            Capturing Memories, Creating Timeless Treasures. Explore our official newborn, baby, maternity, and event collections.
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-[#FFF0F6]/60 border-b border-[#ED78A8]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-nav text-xs font-semibold">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 uppercase tracking-wider whitespace-nowrap cursor-pointer text-[11px] sm:text-xs font-bold ${
                  activeCategory === cat.id
                    ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/30'
                    : 'bg-white text-[#242424] hover:bg-[#FFF0F6] border border-[#ED78A8]/20 shadow-xs'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeCategory === 'NEWBORN' && (
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#ED78A8]">NEWBORN SHOOT PACKAGES</h2>
              <p className="text-xs sm:text-sm text-[#242424] font-medium">Tiny Moments, Timeless Memories (Ideal for 5 to 30 Days Old)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[340px] sm:max-w-none mx-auto">
              {newbornPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between transform hover:-translate-y-1 ${
                    pkg.popular ? 'ring-2 ring-[#ED78A8]/40' : ''
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ED78A8] text-white px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-4">
                    <div className="text-center pt-2">
                      <h3 className="font-heading text-xl font-bold text-[#242424]">{pkg.name}</h3>
                      <div className="text-3xl font-extrabold text-[#ED78A8] mt-1">{pkg.price}</div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#242424] border-t border-[#FFF0F6] pt-4 font-nav">
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
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-md shadow-[#ED78A8]/30 cursor-pointer"
                    >
                      Book Newborn Shoot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'BABY' && (
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#ED78A8]">BABY SHOOT PACKAGES</h2>
              <p className="text-xs sm:text-sm text-[#242424] font-medium">Cherish Today, Treasure Forever (3 to 12 Months)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[340px] sm:max-w-none mx-auto">
              {babyPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between transform hover:-translate-y-1 ${
                    pkg.popular ? 'ring-2 ring-[#ED78A8]/40' : ''
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ED78A8] text-white px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-4">
                    <div className="text-center pt-2">
                      <h3 className="font-heading text-xl font-bold text-[#242424]">{pkg.name}</h3>
                      <div className="text-3xl font-extrabold text-[#ED78A8] mt-1">{pkg.price}</div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#242424] border-t border-[#FFF0F6] pt-4 font-nav">
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
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-md shadow-[#ED78A8]/30 cursor-pointer"
                    >
                      Book Baby Shoot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'MATERNITY' && (
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#ED78A8]">MATERNITY SHOOT PACKAGES</h2>
              <p className="text-xs sm:text-sm text-[#242424] font-medium">Celebrating the Beautiful Journey to Motherhood</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[340px] sm:max-w-none mx-auto">
              {maternityPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between transform hover:-translate-y-1 ${
                    pkg.popular ? 'ring-2 ring-[#ED78A8]/40' : ''
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ED78A8] text-white px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-4">
                    <div className="text-center pt-2">
                      <h3 className="font-heading text-xl font-bold text-[#242424]">{pkg.name}</h3>
                      <div className="text-3xl font-extrabold text-[#ED78A8] mt-1">{pkg.price}</div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#242424] border-t border-[#FFF0F6] pt-4 font-nav">
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
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-md shadow-[#ED78A8]/30 cursor-pointer"
                    >
                      Book Maternity Shoot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'EVENTS' && (
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#ED78A8]">EVENTS & CELEBRATION PACKAGES</h2>
              <p className="text-xs sm:text-sm text-[#242424] font-medium">Birthdays, Baby Showers, Naming Ceremonies & Celebrations</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[340px] sm:max-w-none mx-auto">
              {eventPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between transform hover:-translate-y-1 ${
                    pkg.popular ? 'ring-2 ring-[#ED78A8]/40' : ''
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ED78A8] text-white px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-4">
                    <div className="text-center pt-2">
                      <h3 className="font-heading text-lg font-bold text-[#242424]">{pkg.name}</h3>
                      <div className="text-3xl font-extrabold text-[#ED78A8] mt-1">{pkg.price}</div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#242424] border-t border-[#FFF0F6] pt-4 font-nav">
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
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-md shadow-[#ED78A8]/30 cursor-pointer"
                    >
                      Book Event Coverage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'BUNDLE' && (
          <div className="bg-gradient-to-br from-[#FFF0F6] via-white to-[#FFFDFB] p-6 sm:p-12 rounded-3xl border-2 border-[#ED78A8] shadow-2xl space-y-8 max-w-[340px] sm:max-w-none mx-auto">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#ED78A8] text-white text-xs font-bold uppercase tracking-widest font-nav shadow-md">
                EXCLUSIVE ALL-IN-ONE MILESTONE BUNDLE
              </span>
              <h2 className="font-heading text-2xl sm:text-5xl font-extrabold text-[#242424]">
                CLICKMATES SPECIAL SHOOT PACKAGE
              </h2>
              <div className="text-4xl sm:text-6xl font-black text-[#ED78A8]">₹85,000</div>
              <p className="text-[#242424] text-sm sm:text-base font-body font-normal">
                From Maternity to 1st Birthday — A Complete 6-Milestone Journey Captured Forever
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-4">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-[#242424] font-nav">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>All RAW Images Provided in High-Res</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>Professionally Retouched Photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>Custom Props, Tiaras & Accessories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>Single-Time Makeup & Hairstyle</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>Immediate Family Participation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ED78A8] shrink-0" />
                  <span>Complete Keepsake Memories for Life</span>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={onOpenBooking}
                  className="w-[270px] sm:w-auto px-6 py-3.5 sm:px-10 sm:py-4 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-xl shadow-[#ED78A8]/40 mx-auto flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Reserve Special ₹85,000 Journey Package
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ADDITIONAL SERVICES & ADD-ONS SECTION */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF0F6]/40 border-t-4 border-t-[#ED78A8] border border-[#ED78A8]/20 shadow-xl space-y-6 max-w-[340px] sm:max-w-none mx-auto">
          <div className="text-center space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold font-nav uppercase tracking-wider text-[#ED78A8] bg-[#FFF0F6] border border-[#ED78A8]/20">
              CUSTOM OPTIONS & STYLING
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424]">Additional Charges & Styling Add-ons</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ED78A8]/25 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#ED78A8] space-y-2 flex flex-col justify-between">
              <div className="font-nav font-bold text-xs sm:text-sm text-[#242424]">Additional Makeup & Hairstyle</div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#ED78A8] text-xs font-extrabold border border-[#ED78A8]/20 w-fit">
                ₹1,500 <span className="font-normal text-[10px] text-[#444444]">/ person</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ED78A8]/25 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#ED78A8] space-y-2 flex flex-col justify-between">
              <div className="font-nav font-bold text-xs sm:text-sm text-[#242424]">Outdoor Location Fee</div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#ED78A8] text-xs font-extrabold border border-[#ED78A8]/20 w-fit">
                ₹700 <span className="font-normal text-[10px] text-[#444444]">/ session</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ED78A8]/25 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#ED78A8] space-y-2 flex flex-col justify-between">
              <div className="font-nav font-bold text-xs sm:text-sm text-[#242424]">Extended Family Members</div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#ED78A8] text-xs font-extrabold border border-[#ED78A8]/20 w-fit">
                ₹700 <span className="font-normal text-[10px] text-[#444444]">/ person</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ED78A8]/25 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#ED78A8] space-y-2 flex flex-col justify-between">
              <div className="font-nav font-bold text-xs sm:text-sm text-[#242424]">Instagram Reel (1 Min Cut)</div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#ED78A8] text-xs font-extrabold border border-[#ED78A8]/20 w-fit">
                ₹1,500 <span className="font-normal text-[10px] text-[#444444]">/ reel</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ED78A8]/25 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#ED78A8] space-y-2 flex flex-col justify-between">
              <div className="font-nav font-bold text-xs sm:text-sm text-[#242424]">Saree Draping Support</div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#ED78A8] text-xs font-extrabold border border-[#ED78A8]/20 w-fit">
                ₹300 <span className="font-normal text-[10px] text-[#444444]">/ saree</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ED78A8]/25 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#ED78A8] space-y-2 flex flex-col justify-between">
              <div className="font-nav font-bold text-xs sm:text-sm text-[#242424]">Premium Printed Album (10 Sheets)</div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#ED78A8] text-xs font-extrabold border border-[#ED78A8]/20 w-fit">
                ₹6,500 <span className="font-normal text-[10px] text-[#444444]">/ album</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-4 py-1.5 rounded-full border border-[#ED78A8]/20 max-w-full text-center leading-normal">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#242424]">
              Frequently Asked Questions About Packages & Pricing
            </h2>
          </div>

          <div className="space-y-3 max-w-[340px] sm:max-w-none mx-auto">
            {packageFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
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
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#ED78A8] text-white rotate-180' : 'bg-[#FFF0F6] text-[#ED78A8]'
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

        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-[#111111] text-white space-y-6 shadow-2xl max-w-[340px] sm:max-w-none mx-auto">
          <h3 className="font-heading text-2xl font-bold text-center">Studio Policies & Booking Terms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-200">
            <div className="space-y-2">
              <h4 className="font-bold uppercase tracking-wider font-nav text-[#ED78A8]">1. BOOKING CONFIRMATION</h4>
              <p className="leading-relaxed font-body">Bookings are confirmed upon advance deposit. Remaining balance is cleared on the day of shoot before receiving RAW image files.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold uppercase tracking-wider font-nav text-[#ED78A8]">2. EDITING TIMELINE</h4>
              <p className="leading-relaxed font-body">Digital previews within 3–5 days. Fully retouched images delivered within 7 to 14 working days from final selection.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold uppercase tracking-wider font-nav text-[#ED78A8]">3. SAFETY & SANITIZATION</h4>
              <p className="leading-relaxed font-body">All newborn props, wraps, tiaras, and studio surfaces are 100% sanitized before every shoot for total baby safety.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <a
              href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates!%20I'd%20like%20to%20enquire%20about%20your%20photography%20packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-[270px] sm:w-auto px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all duration-300 shadow-lg shadow-[#ED78A8]/40 whitespace-nowrap mx-auto"
            >
              <MessageCircle className="w-4 h-4" /> Enquire & Custom Package Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
