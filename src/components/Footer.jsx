import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { brandDetails, logoImg } from '../data/photographyData'
import { InstagramIcon, FacebookIcon } from './SocialIcons'
import LegalModal from './LegalModal'

export default function Footer() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' })

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-24 md:pb-12 border-t border-[#242424] font-body relative overflow-hidden">
      {/* Decorative subtle accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ED78A8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info & Entity Description */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="inline-block bg-white p-3.5 rounded-2xl border border-[#FFF0F6] shadow-md transition-transform hover:scale-105">
              <img
                src={logoImg}
                alt="ClickMates Photography Logo Kothrud Pune"
                className="h-16 sm:h-20 lg:h-22 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              ClickMates Photography is a photography studio based in Kothrud, Pune, specializing in professional photography services.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={brandDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ED78A8] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={brandDetails.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ED78A8] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${brandDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ED78A8] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-nav text-xs font-semibold uppercase tracking-wider text-[#ED78A8]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-nav">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About Our Studio</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">Photography Services</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition">Packages & Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Book a Shoot</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Photography Specialties */}
          <div className="space-y-4">
            <h4 className="font-nav text-xs font-semibold uppercase tracking-wider text-[#ED78A8]">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-nav">
              <li>
                <Link to="/services/baby-photography" className="hover:text-white transition">Baby Photography Pune</Link>
              </li>
              <li>
                <Link to="/services/newborn-photography" className="hover:text-white transition">Newborn Photography Pune</Link>
              </li>
              <li>
                <Link to="/services/maternity-photography" className="hover:text-white transition">Maternity Photography Pune</Link>
              </li>
              <li>
                <Link to="/services/family-photography" className="hover:text-white transition">Family Photography Pune</Link>
              </li>
              <li>
                <Link to="/services/event-photography" className="hover:text-white transition">Event Photography Pune</Link>
              </li>
              <li>
                <Link to="/services/baby-milestone-photography" className="hover:text-white transition">Milestone Photography Pune</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Studio Info */}
          <div className="space-y-4">
            <h4 className="font-nav text-xs font-semibold uppercase tracking-wider text-[#ED78A8]">
              Studio Location & Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{brandDetails.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#ED78A8] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${brandDetails.phone}`} className="hover:text-white transition">{brandDetails.phone}</a>
                  <a href={`tel:${brandDetails.phone2}`} className="hover:text-white transition">{brandDetails.phone2}</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ED78A8] shrink-0" />
                <a href={`mailto:${brandDetails.email}`} className="hover:text-white transition">{brandDetails.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-nav">
          <p>© 2026 ClickMates Photography. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal({ isOpen: true, type: 'terms' })}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modal Popup */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
      />
    </footer>
  )
}
