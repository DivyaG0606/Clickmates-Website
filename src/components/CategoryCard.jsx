import { Link } from 'react-router-dom'
import { 
  ArrowUpRight, 
  Baby, 
  Heart, 
  Users, 
  Sparkles, 
  Camera, 
  Award, 
  User, 
  HeartHandshake 
} from 'lucide-react'

const categoryIcons = {
  'baby-photography': Baby,
  'newborn-photography': Heart,
  'maternity-photography': Sparkles,
  'family-photography': Users,
  'kids-photography': Award,
  'event-photography': Camera,
  'portrait-photography': User,
  'couple-photography': HeartHandshake
}

export default function CategoryCard({ category }) {
  const { slug, title, subtitle, description, badge, images } = category
  const photoCount = images ? images.length : category.count || 0
  const IconComponent = categoryIcons[slug] || Camera

  return (
    <Link
      to={`/portfolio/${slug}`}
      className="group relative rounded-3xl p-6 sm:p-8 bg-white border border-[#ED78A8]/20 hover:border-[#ED78A8] shadow-md hover:shadow-xl hover:shadow-[#ED78A8]/15 transition-all duration-500 flex flex-col justify-between space-y-6 transform hover:-translate-y-1 block cursor-pointer overflow-hidden"
    >
      {/* Subtle Rose Ambient Hover Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFF0F6] rounded-full blur-2xl group-hover:bg-[#ED78A8]/20 transition-colors duration-500 pointer-events-none" />

      {/* Top Header: Icon & Count */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] border border-[#ED78A8]/30 flex items-center justify-center text-[#ED78A8] group-hover:bg-[#ED78A8] group-hover:text-white transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-[#ED78A8] bg-[#FFF0F6] px-3 py-1 rounded-full border border-[#ED78A8]/20">
            {photoCount} Photos
          </span>
        </div>

        <span className="inline-block text-[10px] sm:text-xs font-extrabold tracking-widest uppercase font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1 rounded-full border border-[#ED78A8]/20">
          {badge}
        </span>
      </div>

      {/* Content: Title & Description */}
      <div className="relative z-10 space-y-2 flex-grow">
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#242424] tracking-tight group-hover:text-[#ED78A8] transition-colors duration-300">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm font-semibold text-[#555555]">
            {subtitle}
          </p>
        )}
        <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Action CTA */}
      <div className="relative z-10 pt-4 border-t border-[#ED78A8]/15 flex items-center justify-between text-xs font-bold uppercase tracking-widest font-nav text-[#242424] group-hover:text-[#ED78A8] transition-colors">
        <span>VIEW PHOTO GALLERY</span>
        <div className="w-8 h-8 rounded-full bg-[#FFF0F6] group-hover:bg-[#ED78A8] group-hover:text-white text-[#ED78A8] flex items-center justify-center transition-all shadow-xs">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  )
}

