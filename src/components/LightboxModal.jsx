import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react'

export default function LightboxModal({ item, onClose, onPrev, onNext, onOpenBooking }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-fade-in text-white">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#ED78A8] text-white transition z-50 border border-white/10"
        aria-label="Close fullscreen view"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#ED78A8] text-white transition z-50 border border-white/10 hidden sm:flex"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#ED78A8] text-white transition z-50 border border-white/10 hidden sm:flex"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Modal Container */}
      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row items-center bg-[#111111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Fullscreen Image Preview */}
        <div className="w-full md:w-2/3 h-[50vh] md:h-[75vh] bg-black flex items-center justify-center relative overflow-hidden">
          <img
            src={item.image}
            alt={item.alt || item.title}
            className="w-full h-full object-contain select-none"
          />
        </div>

        {/* Details & CTA Column */}
        <div className="w-full md:w-1/3 p-6 sm:p-8 flex flex-col justify-between h-auto md:h-[75vh] bg-[#161616]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider font-nav bg-[#ED78A8]/10 text-[#ED78A8] border border-[#ED78A8]/30">
              <Tag className="w-3.5 h-3.5" />
              {item.category}
            </div>

            <h3 className="font-heading text-2xl font-bold text-white leading-tight">
              {item.title}
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-body">
              {item.caption || 'Captured with genuine emotion and artistic lighting by ClickMates Photography studio.'}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                onClose()
                onOpenBooking()
              }}
              className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-lg shadow-[#ED78A8]/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Similar Shoot
            </button>

            <div className="flex items-center justify-between text-xs text-slate-500 font-nav px-1">
              <span>Use ← → keys to navigate</span>
              <span>ClickMates Photography</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
