import { useState } from 'react'
import { X, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react'
import { brandDetails } from '../data/photographyData'

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'baby-photography',
    date: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // Auto build WhatsApp enquiry message
      const text = `Hi ClickMates Photography! I would like to book a shoot.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nMessage: ${formData.message}`
      window.open(`https://wa.me/${brandDetails.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
    }, 1200)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="bg-[#FFFDFB] text-[#242424] w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl border border-[#FFF0F6] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-[#FFF0F6] text-slate-500 hover:text-[#ED78A8] transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FFF0F6] text-[#ED78A8] flex items-center justify-center mx-auto border border-[#ED78A8]/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#242424]">Enquiry Sent!</h3>
            <p className="text-sm text-[#666666] max-w-xs mx-auto">
              Thank you for reaching out to ClickMates Photography. We are redirecting you to WhatsApp for instant confirmation.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold uppercase font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-nav text-[#ED78A8] mb-2">
              <Sparkles className="w-4 h-4" /> ClickMates Studio Reservation
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424] mb-2">
              Book Your Shoot
            </h2>
            <p className="text-xs text-[#666666] mb-6">
              Let's create timeless memories together. Fill in your details below and our team will get in touch promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-body text-xs">
              <div>
                <label className="block text-[#242424] font-semibold mb-1 font-nav">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya & Rajesh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20 outline-none transition bg-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#242424] font-semibold mb-1 font-nav">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 96999 45608 / +91 90213 80417"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20 outline-none transition bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[#242424] font-semibold mb-1 font-nav">Email Address</label>
                  <input
                    type="email"
                    placeholder="clickmates.studio@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20 outline-none transition bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#242424] font-semibold mb-1 font-nav">Photography Type *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20 outline-none transition bg-white text-sm"
                  >
                    <option value="baby-photography">Baby Photography</option>
                    <option value="maternity-photography">Maternity Photography</option>
                    <option value="newborn-photography">Newborn Photography</option>
                    <option value="family-photography">Family Photography</option>
                    <option value="event-photography">Event Photography</option>
                    <option value="baby-milestone-photography">Baby Milestone Photography</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#242424] font-semibold mb-1 font-nav">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20 outline-none transition bg-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#242424] font-semibold mb-1 font-nav">Special Requests / Vision</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your baby's age, preferred color themes, or event details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20 outline-none transition bg-white text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-lg shadow-[#ED78A8]/25 flex items-center justify-center gap-2 mt-4"
              >
                <MessageCircle className="w-4 h-4" />
                Send Enquiry via WhatsApp
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
