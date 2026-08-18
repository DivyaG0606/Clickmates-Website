import { marqueeImages } from '../data/photographyData'

export default function MarqueeStrip() {
  // Duplicate array for seamless infinite scroll
  const items = [...marqueeImages, ...marqueeImages]

  return (
    <div className="py-8 bg-[#FFF0F6]/60 border-y border-[#FFF0F6] overflow-hidden relative group">
      <div className="flex gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {items.map((src, i) => (
          <div
            key={i}
            className="w-48 h-32 sm:w-64 sm:h-40 shrink-0 rounded-2xl overflow-hidden shadow-sm border border-white hover:border-[#ED78A8] transition-all duration-300 transform hover:scale-105"
            data-cursor="view"
          >
            <img
              src={src}
              alt={`ClickMates Photography showcase item ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
