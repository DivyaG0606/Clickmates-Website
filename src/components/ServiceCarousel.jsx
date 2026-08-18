import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { servicesData } from '../data/photographyData'

export default function ServiceCarousel() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFDFB] border-b border-[#FFF0F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
            PHOTOGRAPHY SPECIALTIES
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424]">
            Photography For Every Chapter
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-body">
            Explore our image-driven photography services tailored for growing families.
          </p>
        </div>

        {/* 3 Cards Per Row Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#FFF0F6] hover:border-[#ED78A8]/40 transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={service.cardImage}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#242424] px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest font-nav shadow-sm">
                  {service.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#242424] group-hover:text-[#ED78A8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed mt-2.5 font-body">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-nav text-[#ED78A8] group-hover:text-[#D9578D] transition"
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
