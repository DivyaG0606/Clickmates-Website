import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { servicesData } from '../data/photographyData'

export default function ServiceCarousel() {
  return (
    <section className="pt-8 pb-16 sm:py-28 bg-[#FFFDFB] border-b border-[#FFF0F6]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-3 reveal-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20 shadow-xs">
            CLICKMATES STUDIO KOTHRUD PUNE — PHOTOGRAPHY SPECIALTIES
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
            Photography For Every Chapter
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-body font-light">
            Explore our image-driven photography services tailored for growing families across Pune.
          </p>
        </div>

        {/* 3 Cards Per Row Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 max-w-sm md:max-w-none mx-auto reveal-scale">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#FFF0F6] hover:border-[#ED78A8]/40 transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-72 lg:h-80 overflow-hidden bg-slate-100">
                <img
                  src={service.cardImage}
                  alt={service.alt || `${service.title} at ClickMates Studio Kothrud Pune`}
                  title={`${service.title} - ClickMates Photography Studio Pune`}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 space-y-2.5 sm:space-y-3 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#242424] group-hover:text-[#ED78A8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed mt-1.5 sm:mt-2.5 font-body font-light">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-nav text-[#ED78A8] group-hover:text-[#D9578D] transition cursor-pointer"
                  >
                    <span>Explore Specialty</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}