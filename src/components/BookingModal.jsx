import { useState, useEffect } from 'react'
import { X, MessageCircle, CheckCircle2, Loader2, MapPin, Calendar, User, Phone, Mail, AlertCircle } from 'lucide-react'
import { brandDetails } from '../data/photographyData'
import { submitLead } from '../services/leadService'

export default function BookingModal({ isOpen, onClose, isFirstVisit = false }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    city: 'Pune',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [leadResult, setLeadResult] = useState(null)

  // Today's date string for date picker min attribute
  const todayDateStr = new Date().toISOString().split('T')[0]

  // Reset state when modal opens & handle Escape key press
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      setLeadResult(null)
      setErrors({})
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {}

    // 1. Full Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // 2. Phone validation (10 to 12 digits after stripping spaces/country codes)
    const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10,12}$/.test(cleanPhone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number'
    }

    // 3. Email validation (Optional, but if filled must be valid)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address'
    }

    // 4. Shoot Type validation
    if (!formData.service) {
      newErrors.service = 'Please select a shoot type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for field as user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Run validation check before submitting
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Submit lead locally + dispatch to Google Sheet Webhook if configured
      const res = await submitLead({ ...formData, isFirstVisit })
      setLeadResult(res)
      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting lead:', err)
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpenWhatsApp = () => {
    const offerText = isFirstVisit ? ' (Claiming 10% First Visit Offer)' : ''
    const text = `Hi ClickMates Photography! I just submitted a booking request on your website${offerText}.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*City:* ${formData.city}\n*Preferred Date:* ${formData.date || 'TBD'}\n*Notes:* ${formData.message || 'None'}`
    window.open(`https://wa.me/${brandDetails.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleResetAndClose = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-backdrop-fade overflow-y-auto no-scrollbar cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFFDFB] text-[#242424] w-full max-w-lg rounded-3xl p-5 sm:p-6 relative shadow-2xl border border-[#FFF0F6] my-auto max-h-[96vh] overflow-y-auto no-scrollbar cursor-default animate-modal-pop"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-full bg-slate-100 hover:bg-[#FFF0F6] text-slate-500 hover:text-[#ED78A8] transition shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-5 sm:py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#FFF0F6] text-[#ED78A8] flex items-center justify-center mx-auto border border-[#ED78A8]/30 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#242424]">
              Details Received!
            </h3>
            <p className="text-xs text-[#666666] max-w-sm mx-auto leading-relaxed">
              Thank you <strong className="text-[#242424]">{formData.name}</strong>! Your shoot request has been recorded into our system.
            </p>

            <div className="p-3.5 bg-[#FFF5F8] rounded-2xl border border-[#ED78A8]/20 text-left text-xs space-y-1.5 text-[#444]">
              <div className="flex justify-between border-b border-pink-100 pb-1.5">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-[#ED78A8] capitalize">{formData.service.replace(/-/g, ' ')}</span>
              </div>
              <div className="flex justify-between border-b border-pink-100 pb-1.5">
                <span className="text-slate-500">Phone:</span>
                <span className="font-semibold text-slate-800">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Lead Status:</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  ✓ Recorded & Saved
                </span>
              </div>
            </div>

            <div className="pt-1 space-y-2">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Connect on WhatsApp for Instant Confirmation
              </button>
              <button
                onClick={handleResetAndClose}
                className="w-full py-2 rounded-full text-xs font-semibold uppercase font-nav text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition"
              >
                Done / Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider font-nav text-[#ED78A8] mb-1.5">
              ClickMates Studio Reservation
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424] mb-1">
              Book Your Shoot
            </h2>
            <p className="text-xs text-[#666666] mb-3.5 leading-relaxed">
              Let's create timeless memories together. Fill in your details below and our team will get in touch promptly.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-2.5 font-body text-xs">
              {/* Full Name */}
              <div>
                <label className="block text-[#242424] font-semibold mb-0.5 font-nav flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#ED78A8]" /> Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ananya & Rajesh"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3.5 py-2 rounded-xl border outline-none transition bg-white text-xs ${
                    errors.name
                      ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                      : 'border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20'
                  }`}
                />
                {errors.name && (
                  <p className="text-rose-500 text-[11px] mt-1 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[#242424] font-semibold mb-0.5 font-nav flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#ED78A8]" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl border outline-none transition bg-white text-xs ${
                      errors.phone
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-rose-500 text-[11px] mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[#242424] font-semibold mb-0.5 font-nav flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#ED78A8]" /> Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl border outline-none transition bg-white text-xs ${
                      errors.email
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-rose-500 text-[11px] mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Photography Type & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[#242424] font-semibold mb-0.5 font-nav flex items-center gap-1.5">
                    Shoot Type *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border outline-none transition bg-white text-xs font-semibold ${
                      formData.service ? 'text-slate-800' : 'text-slate-400'
                    } ${
                      errors.service
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20'
                    }`}
                  >
                    <option value="" disabled hidden>
                      Select Shoot Type
                    </option>
                    <option value="model-shoot">Model Shoot / Portfolio</option>
                    <option value="baby-photography">Baby Photography</option>
                    <option value="maternity-photography">Maternity Photography</option>
                    <option value="newborn-photography">Newborn Photography</option>
                    <option value="family-photography">Family Photography</option>
                    <option value="pet-photography">Pet Photography</option>
                    <option value="event-photography">Event Photography</option>
                    <option value="baby-milestone-photography">Baby Milestone</option>
                    <option value="pre-wedding-shoot">Pre-Wedding Shoot</option>
                  </select>
                  {errors.service && (
                    <p className="text-rose-500 text-[11px] mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.service}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[#242424] font-semibold mb-0.5 font-nav flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ED78A8]" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    min={todayDateStr}
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20 outline-none transition bg-white text-xs"
                  />
                </div>
              </div>

              {/* City / Location */}
              <div>
                <label className="block text-[#242424] font-semibold mb-0.5 font-nav flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ED78A8]" /> City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pune, Kothrud, Mumbai, PCMC..."
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20 outline-none transition bg-white text-xs"
                />
              </div>

              {/* Special Notes / Message */}
              <div>
                <label className="block text-[#242424] font-semibold mb-0.5 font-nav">
                  Special Requests / Vision
                </label>
                <textarea
                  rows="2"
                  placeholder="Baby's age, color preferences, studio vs outdoor location..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-3.5 py-1.5 rounded-xl border border-slate-200 focus:border-[#ED78A8] focus:ring-2 focus:ring-[#ED78A8]/20 outline-none transition bg-white text-xs resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-lg shadow-[#ED78A8]/25 flex items-center justify-center gap-2 mt-3 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting Lead...
                  </>
                ) : (
                  'Book Your Shoot Now'
                )}
              </button>

              <p className="text-[10px] text-center text-slate-400 mt-1">
                Your privacy is safe. We never spam.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
