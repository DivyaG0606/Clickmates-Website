import { X, ShieldCheck, FileText } from 'lucide-react'
import { brandDetails } from '../data/photographyData'

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null

  const isPrivacy = type === 'privacy'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in font-body">
      <div className="bg-[#FFFDFB] text-[#242424] w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative shadow-2xl border border-[#FFF0F6] max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 pr-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0F6] text-[#ED78A8] flex items-center justify-center border border-[#ED78A8]/20 shrink-0">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242424]">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h2>
              <p className="text-xs text-[#666666]">
                ClickMates Photography Studio • Effective 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-[#FFF0F6] text-slate-500 hover:text-[#ED78A8] transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto py-6 space-y-5 text-xs text-slate-600 leading-relaxed pr-2 font-body">
          {isPrivacy ? (
            <>
              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">1. Information Collection</h3>
                <p>
                  ClickMates Photography collects personal data provided voluntarily when booking a session or submitting an enquiry (e.g. parent name, phone number, email address, baby age, shoot location).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">2. How We Use Your Information</h3>
                <p>
                  Collected details are exclusively utilized to coordinate your photoshoot, issue session guidelines, send WhatsApp notifications, and deliver high-resolution digital photo galleries.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">3. Client Privacy & Portfolio Usage</h3>
                <p>
                  We deeply respect your family’s privacy. While ClickMates Photography showcases selected client portraits in our official portfolio to demonstrate art quality, parents retain full rights to request non-publication or private gallery handling prior to or following the shoot.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">4. Data Protection & Security</h3>
                <p>
                  We maintain strict technical and administrative safeguards to protect client contact details and digital imagery against unauthorized access or disclosure.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">5. Studio Contact Details</h3>
                <p>
                  For any privacy inquiries or gallery permissions, contact us at <strong>{brandDetails.email}</strong> or call <strong>{brandDetails.phone}</strong>.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">1. Booking & Reservation Advance</h3>
                <p>
                  A non-refundable booking deposit is required to lock your session date and studio time slot. The remaining balance is payable on or before the day of the photoshoot.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">2. Rescheduling & Cancellation</h3>
                <p>
                  We understand baby routines and health can be unpredictable. You may request session rescheduling up to 48 hours prior to your shoot slot without penalty, subject to studio availability.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">3. Image Delivery & Editing</h3>
                <p>
                  Final edited, color-graded high-resolution photos will be delivered via a private online digital gallery within 14–21 working days following final image selection. Unedited RAW files are studio intellectual property and are not shared by default.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">4. Copyright & Personal Use</h3>
                <p>
                  Clients are granted personal print and social sharing rights for all delivered edited images. Commercial reproduction or unauthorized third-party resale requires explicit written consent from ClickMates Photography.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-sm font-bold text-[#242424]">5. Studio Safety & Props</h3>
                <p>
                  Child safety is our highest priority. All newborn props, wraps, and studio surfaces are sanitized before every session. Parents must supervise young children throughout the shoot.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            {brandDetails.fullAddress}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  )
}
