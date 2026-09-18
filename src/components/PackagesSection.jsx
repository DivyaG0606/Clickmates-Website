import { useState } from 'react'
import { CheckCircle2, Heart, Gift, Baby, Calendar, Sparkles, Star } from 'lucide-react'

// Import real photography assets for package cards
import baby1 from '../assets/baby/baby1.jpg'
import baby2 from '../assets/baby/baby2.jpg'
import baby3 from '../assets/baby/baby3.jpg'
import baby5 from '../assets/baby/baby5.jpg'
import baby8 from '../assets/baby/baby8.jpg'
import baby10 from '../assets/baby/baby10.jpg'
import baby12 from '../assets/baby/baby12.jpg'
import baby15 from '../assets/baby/baby15.jpg'

import m16 from '../assets/maternity/maternity13.jpg'
import m17 from '../assets/maternity/maternity14.jpg'
import m18 from '../assets/maternity/maternity15.jpg'
import m25 from '../assets/maternity/maternity18.jpg'
import m27 from '../assets/maternity/maternity20.jpg'

import e30 from '../assets/event/event1.jpg'
import e32 from '../assets/event/event4.jpg'
import e33 from '../assets/event/event5.jpg'
import e34 from '../assets/event/event6.jpg'

export default function PackagesSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('NEWBORN')

  const categories = [
    { id: 'NEWBORN', name: 'Newborn Shoot' },
    { id: 'BABY', name: 'Baby Shoot' },
    { id: 'MATERNITY', name: 'Maternity Shoot' },
    { id: 'EVENTS', name: 'Events & Parties' },
    { id: 'BUNDLE', name: 'Special Bundle (₹85,000)' }
  ]

  const newbornPackages = [
    {
      name: 'BASIC',
      price: '₹2,999',
      popular: false,
      image: baby12,
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
      image: baby10,
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
      image: baby15,
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
      image: baby8,
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
      image: baby1,
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
      image: baby2,
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
      image: baby3,
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
      image: baby5,
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
      image: m16,
      features: [
        '1 Outfit Allowed (Gowns Included)',
        '45 Min Indoor Session',
        '10 Edited (1 Effect Image) + RAW Images',
        'Inclusive of Props, Accessories & Shoes'
      ]
    },
    {
      name: 'STANDARD',
      price: '₹6,999',
      popular: false,
      image: m17,
      features: [
        '2 Outfits Allowed (Gowns Included)',
        '2.5 Hours Indoor Session',
        'Single-Time Makeup & Hairstyle Included',
        '20 Edited (2 Effect Images) + RAW Images',
        'Inclusive of Props & Tiaras'
      ]
    },
    {
      name: 'PREMIUM',
      price: '₹9,999',
      popular: true,
      image: m18,
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
      image: m25,
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
      image: m27,
      features: [
        '3 Outfits Allowed (Gowns Included)',
        '4 Hours Outdoor Session',
        'Single-Time Makeup & Hairstyle Included',
        '35 Edited Pictures + All RAW Images',
        '1 Teaser (50–60s) + 1 Instagram Reel',
        '1 Full Cinematic Video (2–3 Min)'
      ]
    }
  ]

  const eventPackages = [
    {
      name: 'PACKAGE 1 (TRADITIONAL)',
      price: '₹6,500',
      popular: false,
      image: e30,
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
      image: e32,
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
      image: e33,
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
      image: e34,
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
    <section className="pt-8 pb-14 sm:py-28 bg-[#FFF0F6]/30" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3 reveal-on-scroll">
          <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20 shadow-sm max-w-full text-center leading-normal">
            CLICKMATES STUDIO KOTHRUD PUNE — PACKAGES & INVESTMENT
          </span>
          <h2 className="font-heading text-2xl sm:text-5xl font-bold text-[#242424]">
            Official Photography Packages
          </h2>
          <p className="text-[#666666] text-xs sm:text-base font-body font-light">
            Transparent pricing for newborn, baby, maternity, and celebration photoshoots.
          </p>
        </div>

        {/* Category Tabs Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12 font-nav text-[11px] sm:text-xs font-semibold reveal-on-scroll reveal-delay-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 uppercase tracking-wider cursor-pointer ${activeCategory === cat.id
                ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/25 scale-105'
                : 'bg-white text-[#242424] hover:bg-[#FFF0F6] border border-[#ED78A8]/20'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* NEWBORN PACKAGES */}
        {activeCategory === 'NEWBORN' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[320px] sm:max-w-none mx-auto">
            {newbornPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden border flex flex-col justify-between relative transition-all duration-300 ${pkg.popular
                  ? 'border-[#ED78A8] shadow-2xl ring-2 ring-[#ED78A8]/30'
                  : 'border-[#FFF0F6] shadow-sm hover:shadow-md'
                  }`}
              >
                {pkg.popular && (
                  <span className="absolute top-2.5 right-2.5 z-10 bg-[#ED78A8] text-white px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md">
                    Most Popular
                  </span>
                )}

                {/* Card Image Banner */}
                <div className="h-36 sm:h-48 overflow-hidden relative">
                  <img
                    src={pkg.image}
                    alt={`${pkg.name} Newborn Photography Package at ClickMates Pune`}
                    title={`${pkg.name} Newborn Shoot - ClickMates Studio`}
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3.5 text-white">
                    <h3 className="font-heading text-base sm:text-lg font-bold">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ED78A8]">{pkg.price}</div>

                    <ul className="space-y-1.5 sm:space-y-2 text-xs text-[#242424] border-t border-slate-100 pt-2.5 sm:pt-3 font-body font-light">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-2.5 sm:py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md cursor-pointer"
                    >
                      Book Newborn Shoot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BABY PACKAGES */}
        {activeCategory === 'BABY' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[320px] sm:max-w-none mx-auto">
            {babyPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden border flex flex-col justify-between relative transition-all duration-300 ${pkg.popular
                  ? 'border-[#ED78A8] shadow-2xl ring-2 ring-[#ED78A8]/30'
                  : 'border-[#FFF0F6] shadow-sm hover:shadow-md'
                  }`}
              >
                {pkg.popular && (
                  <span className="absolute top-2.5 right-2.5 z-10 bg-[#ED78A8] text-white px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md">
                    Most Popular
                  </span>
                )}

                {/* Card Image Banner */}
                <div className="h-36 sm:h-48 overflow-hidden relative">
                  <img
                    src={pkg.image}
                    alt={`${pkg.name} Baby Photography Package at ClickMates Pune`}
                    title={`${pkg.name} Baby Shoot - ClickMates Studio`}
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3.5 text-white">
                    <h3 className="font-heading text-base sm:text-lg font-bold">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ED78A8]">{pkg.price}</div>

                    <ul className="space-y-1.5 sm:space-y-2 text-xs text-[#242424] border-t border-slate-100 pt-2.5 sm:pt-3 font-body font-light">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-2.5 sm:py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md cursor-pointer"
                    >
                      Book Baby Shoot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MATERNITY PACKAGES */}
        {activeCategory === 'MATERNITY' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[320px] sm:max-w-none mx-auto">
            {maternityPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden border flex flex-col justify-between relative transition-all duration-300 ${pkg.popular
                  ? 'border-[#ED78A8] shadow-2xl ring-2 ring-[#ED78A8]/30'
                  : 'border-[#FFF0F6] shadow-sm hover:shadow-md'
                  }`}
              >
                {pkg.popular && (
                  <span className="absolute top-2.5 right-2.5 z-10 bg-[#ED78A8] text-white px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md">
                    Most Popular
                  </span>
                )}

                {/* Card Image Banner */}
                <div className="h-36 sm:h-52 overflow-hidden relative">
                  <img
                    src={pkg.image}
                    alt={`${pkg.name} Maternity Photography Package at ClickMates Pune`}
                    title={`${pkg.name} Maternity Shoot - ClickMates Studio`}
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3.5 text-white">
                    <h3 className="font-heading text-base sm:text-xl font-bold">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ED78A8]">{pkg.price}</div>

                    <ul className="space-y-1.5 sm:space-y-2 text-xs text-[#242424] border-t border-slate-100 pt-2.5 sm:pt-3 font-body font-light">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-2.5 sm:py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md cursor-pointer"
                    >
                      Book Maternity Shoot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EVENTS PACKAGES */}
        {activeCategory === 'EVENTS' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[320px] sm:max-w-none mx-auto">
            {eventPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden border flex flex-col justify-between relative transition-all duration-300 ${pkg.popular
                  ? 'border-[#ED78A8] shadow-2xl ring-2 ring-[#ED78A8]/30'
                  : 'border-[#FFF0F6] shadow-sm hover:shadow-md'
                  }`}
              >
                {pkg.popular && (
                  <span className="absolute top-2.5 right-2.5 z-10 bg-[#ED78A8] text-white px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest font-nav shadow-md">
                    Most Popular
                  </span>
                )}

                {/* Card Image Banner */}
                <div className="h-36 sm:h-48 overflow-hidden relative">
                  <img
                    src={pkg.image}
                    alt={`${pkg.name} Event Coverage at ClickMates Pune`}
                    title={`${pkg.name} Event Package - ClickMates Studio`}
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3.5 text-white">
                    <h3 className="font-heading text-base sm:text-lg font-bold">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ED78A8]">{pkg.price}</div>

                    <ul className="space-y-1.5 sm:space-y-2 text-xs text-[#242424] border-t border-slate-100 pt-2.5 sm:pt-3 font-body font-light">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-2.5 sm:py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md cursor-pointer"
                    >
                      Book Event Coverage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BUNDLE PACKAGES */}
        {activeCategory === 'BUNDLE' && (
          <div className="bg-gradient-to-br from-[#FFF0F6] to-white p-8 sm:p-10 rounded-3xl border-2 border-[#ED78A8] shadow-2xl space-y-6">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ED78A8] text-white text-xs font-semibold uppercase tracking-widest font-nav">
                ALL-IN-ONE MILESTONE BUNDLE — CLICKMATES STUDIO PUNE
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#242424]">
                CLICKMATES SPECIAL SHOOT PACKAGE
              </h3>
              <div className="text-4xl sm:text-5xl font-black text-[#ED78A8]">₹85,000</div>
              <p className="text-xs text-[#666666] font-body font-light">
                From Maternity to 1st Birthday — 6 Precious Milestones Included
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="p-3 bg-white rounded-xl text-center border border-[#ED78A8]/20 shadow-xs space-y-1">
                <Heart className="w-5 h-5 text-[#ED78A8] mx-auto" />
                <div className="font-bold text-[11px]">1. Maternity</div>
              </div>
              <div className="p-3 bg-white rounded-xl text-center border border-[#ED78A8]/20 shadow-xs space-y-1">
                <Gift className="w-5 h-5 text-[#ED78A8] mx-auto" />
                <div className="font-bold text-[11px]">2. Baby Shower</div>
              </div>
              <div className="p-3 bg-white rounded-xl text-center border border-[#ED78A8]/20 shadow-xs space-y-1">
                <Baby className="w-5 h-5 text-[#ED78A8] mx-auto" />
                <div className="font-bold text-[11px]">3. Newborn</div>
              </div>
              <div className="p-3 bg-white rounded-xl text-center border border-[#ED78A8]/20 shadow-xs space-y-1">
                <Calendar className="w-5 h-5 text-[#ED78A8] mx-auto" />
                <div className="font-bold text-[11px]">4. Monthly</div>
              </div>
              <div className="p-3 bg-white rounded-xl text-center border border-[#ED78A8]/20 shadow-xs space-y-1">
                <Sparkles className="w-5 h-5 text-[#ED78A8] mx-auto" />
                <div className="font-bold text-[11px]">5. Pre-Birthday</div>
              </div>
              <div className="p-3 bg-white rounded-xl text-center border border-[#ED78A8]/20 shadow-xs space-y-1">
                <Star className="w-5 h-5 text-[#ED78A8] mx-auto" />
                <div className="font-bold text-[11px]">6. 1st Birthday</div>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-lg cursor-pointer"
              >
                Reserve Special ₹85,000 Journey Package
              </button>
            </div>
          </div>
        )}

        {/* ADDITIONAL CHARGES & ADD-ONS */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#FFF0F6] shadow-lg space-y-4">
          <h3 className="font-heading text-xl font-bold text-center text-[#242424]">Additional Charges & Add-ons</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs text-[#242424] text-center">
            <div className="p-3 rounded-xl bg-[#FFF0F6]/50 border border-[#ED78A8]/20">
              <div className="font-bold text-[#ED78A8]">Makeup & Hair</div>
              <div className="text-xs font-extrabold mt-0.5">₹1,500</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF0F6]/50 border border-[#ED78A8]/20">
              <div className="font-bold text-[#ED78A8]">Outdoor Fee</div>
              <div className="text-xs font-extrabold mt-0.5">₹700</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF0F6]/50 border border-[#ED78A8]/20">
              <div className="font-bold text-[#ED78A8]">Extra Member</div>
              <div className="text-xs font-extrabold mt-0.5">₹700</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF0F6]/50 border border-[#ED78A8]/20">
              <div className="font-bold text-[#ED78A8]">Insta Reel</div>
              <div className="text-xs font-extrabold mt-0.5">₹1,500</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF0F6]/50 border border-[#ED78A8]/20">
              <div className="font-bold text-[#ED78A8]">Saree Draping</div>
              <div className="text-xs font-extrabold mt-0.5">₹300</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF0F6]/50 border border-[#ED78A8]/20">
              <div className="font-bold text-[#ED78A8]">Printed Album</div>
              <div className="text-xs font-extrabold mt-0.5">₹6,500</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}