import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2 } from 'lucide-react'
import { brandDetails } from '../data/photographyData'
import SEOHead from '../components/SEOHead'

// Import real photography background asset
import e30 from '../assets/e30.jpg'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'baby-photography',
    date: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const contactFaqs = [
    {
      q: "What is the exact physical address of ClickMates Photography Studio in Pune?",
      a: "ClickMates Photography Studio is located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038, India."
    },
    {
      q: "What are the phone numbers to contact ClickMates Photography Studio?",
      a: "You can reach our studio directly at +91 96999 45608 or +91 90213 80417 for bookings, package details, and date availability."
    },
    {
      q: "Can I send a WhatsApp message to enquire about a photoshoot in Kothrud, Pune?",
      a: "Yes, send a WhatsApp message to +91 96999 45608 for instant responses regarding session packages and available slots."
    },
    {
      q: "What are the studio operating hours for ClickMates Photography?",
      a: "ClickMates Photography Studio is open Monday through Sunday from 9:30 AM to 8:00 PM. Studio visits are by prior appointment."
    },
    {
      q: "Is ClickMates Studio easily accessible from Paud Road and surrounding Pune areas?",
      a: "Yes, located right on Paud Road in Left Bhusari Colony, Kothrud, our studio is easily reachable from Erandwane, Karve Nagar, Deccan, Bavdhan, Shivajinagar, Baner, and Wakad."
    },
    {
      q: "How do I get Google Maps directions to ClickMates Photography Studio?",
      a: "Search 'Clickmates Photography Studio Kothrud Pune' on Google Maps, or click the Google Maps location link on our contact page."
    },
    {
      q: "Is advance booking required for studio shoots at ClickMates?",
      a: "Yes, advance reservation is required to ensure the studio is climate-controlled, sanitized, and prepared with your chosen theme props before arrival."
    },
    {
      q: "What is the official email address for ClickMates Photography?",
      a: "You can email our team at clickmates.studio@gmail.com for business queries, collaborations, and formal shoot proposals."
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      const text = `Hi ClickMates Photography!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nMessage: ${formData.message}`
      window.open(`https://wa.me/${brandDetails.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
    }, 1000)
  }

  return (
    <div className="pt-20 pb-20 bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title="Contact ClickMates Photography Studio in Kothrud, Pune"
        description="Contact ClickMates Photography studio in Kothrud, Pune. Located at Left Bhusari Colony, Paud Road. Call +91 96999 45608 or WhatsApp to book your photoshoot."
        keywords="Contact ClickMates Photography, Photography Studio Kothrud Address, Photo Studio Paud Road, Photography Studio Phone Pune, Book Baby Shoot Pune"
        canonicalUrl={`https://${brandDetails.domain}/contact`}
        faqs={contactFaqs}
      />

      {/* Image-Driven Contact Hero Banner */}
      <section className="relative py-32 sm:py-44 bg-[#111111] text-white text-center overflow-hidden">
        <img
          src={e30}
          alt="ClickMates Photography Contact Banner Kothrud Pune"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 shadow-lg">
            GET IN TOUCH
          </span>
          <h1 className="font-heading text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">
            Let's Create Something Beautiful Together.
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Have questions or ready to reserve your date? Connect with us via WhatsApp, phone, or enquiry form.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#FFF0F6] shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">BOOKING ENQUIRY</span>
              <h2 className="font-heading text-3xl font-bold text-[#242424]">Send Us a Message</h2>
              <p className="text-[#666666] text-sm font-light">
                Fill in your details below and our team will get back to you within 2 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#FFF0F6] border border-[#ED78A8]/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#ED78A8] mx-auto animate-bounce" />
                <h3 className="font-heading text-xl font-bold text-[#242424]">Thank You!</h3>
                <p className="text-sm text-[#666666]">
                  Redirecting to WhatsApp to complete your reservation...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-nav text-xs font-medium">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#242424]">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#ED78A8] bg-[#FFFDFB]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[#242424]">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#ED78A8] bg-[#FFFDFB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#242424]">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#ED78A8] bg-[#FFFDFB]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[#242424]">Select Photography Service *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#ED78A8] bg-[#FFFDFB]"
                    >
                      <option value="baby-photography">Baby Photography</option>
                      <option value="newborn-photography">Newborn Photography</option>
                      <option value="maternity-photography">Maternity Photography</option>
                      <option value="family-photography">Family Photography</option>
                      <option value="pet-photography">Pet Photography</option>
                      <option value="baby-milestone-photography">Milestone & Cake Smash</option>
                      <option value="event-photography">Event Photography</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#242424]">Preferred Shoot Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#ED78A8] bg-[#FFFDFB]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#242424]">Additional Details or Questions</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your shoot ideas, themes, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#ED78A8] bg-[#FFFDFB]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white bg-[#ED78A8] hover:bg-[#D9578D] transition font-semibold uppercase tracking-wider shadow-lg shadow-[#ED78A8]/20 cursor-pointer"
                >
                  Submit Booking Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#111111] text-white space-y-6 shadow-xl">
              <h3 className="font-heading text-2xl font-bold border-b border-white/10 pb-4">
                Studio Contact Details
              </h3>

              <div className="space-y-5 text-xs text-slate-300 font-body">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ED78A8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Physical Studio Address</h4>
                    <p className="leading-relaxed">{brandDetails.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#ED78A8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Phone Numbers</h4>
                    <p>
                      <a href={`tel:${brandDetails.phone}`} className="hover:text-[#ED78A8] transition">{brandDetails.phone}</a>
                      <span className="mx-2">•</span>
                      <a href={`tel:${brandDetails.phone2}`} className="hover:text-[#ED78A8] transition">{brandDetails.phone2}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#ED78A8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Email Address</h4>
                    <a href={`mailto:${brandDetails.email}`} className="hover:text-[#ED78A8] transition">{brandDetails.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#ED78A8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Studio Hours</h4>
                    <p>{brandDetails.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${brandDetails.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full text-center text-xs font-semibold tracking-wider uppercase font-nav text-white bg-emerald-600 hover:bg-emerald-700 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Google Map Section */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">VISIT OUR STUDIO</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424]">Interactive Studio Location Map</h3>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#FFF0F6] h-96 w-full">
            <iframe
              title="ClickMates Photography Pune Studio Location"
              src={brandDetails.mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* 8 CONTACT FAQS SECTION */}
        <div className="mt-16 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              DIRECT ANSWERS & FAQS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#242424]">
              Frequently Asked Questions About Contacting Us
            </h2>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-[#FFF0F6] shadow-sm space-y-2 text-left">
                <h3 className="font-heading font-bold text-lg text-[#242424] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#ED78A8]" />
                  {faq.q}
                </h3>
                <p className="text-[#666666] text-sm font-light leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
