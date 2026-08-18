import { MessageCircle, Phone, Calendar } from 'lucide-react'
import { brandDetails } from '../data/photographyData'

export default function MobileStickyCTA({ onOpenBooking }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111111]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 shadow-2xl flex items-center justify-around gap-2 font-nav text-xs font-semibold uppercase tracking-wider">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates%20Team,%20I%20want%20to%20enquire%20about%20a%20shoot!`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-2 rounded-xl bg-emerald-600/90 text-white flex items-center justify-center gap-1.5 active:scale-95 transition"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${brandDetails.phone}`}
        className="flex-1 py-2 px-2 rounded-xl bg-slate-800 text-white border border-slate-700 flex items-center justify-center gap-1.5 active:scale-95 transition"
      >
        <Phone className="w-4 h-4 text-[#ED78A8]" />
        <span>Call</span>
      </a>

      {/* Book Now Button */}
      <button
        onClick={onOpenBooking}
        className="flex-1 py-2 px-2 rounded-xl bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/30 flex items-center justify-center gap-1.5 active:scale-95 transition"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Now</span>
      </button>
    </div>
  )
}
