// Import user real images from src/assets
import m16 from '../assets/m16.jpg'
import m18 from '../assets/m18.jpg'
import baby12 from '../assets/baby12.jpg'
import baby1 from '../assets/baby1.jpg'
import baby15 from '../assets/baby15.jpg'
import e32 from '../assets/e32.jpg'
import pet from '../assets/pet.jpg'

export default function MilestoneJourneyCarousel({ onOpenBooking }) {
  const journeyShoots = [
    {
      id: "maternity-shoot",
      title: "MATERNITY SHOOT",
      subtitle: "",
      desc: "Celebrate the beauty of motherhood and the joy of new beginnings.",
      image: m16,
      link: "/services/maternity-photography"
    },
    {
      id: "baby-shower-shoot",
      title: "BABY SHOWER SHOOT",
      subtitle: "",
      desc: "A celebration of love, blessings and the little one on the way.",
      image: m18,
      link: "/services/event-photography"
    },
    {
      id: "newborn-shoot",
      title: "NEWBORN SHOOT",
      subtitle: "",
      desc: "Tiny fingers, tiny toes, big emotions captured forever.",
      image: baby12,
      link: "/services/newborn-photography"
    },
    {
      id: "baby-monthly-shoot",
      title: "BABY MONTHLY SHOOT",
      subtitle: "(1 TO 11 MONTHS)",
      desc: "Every month, a new smile, a new milestone, a new memory.",
      image: baby1,
      link: "/services/baby-milestone-photography"
    },
    {
      id: "pre-birthday-shoot",
      title: "PRE-BIRTHDAY SHOOT",
      subtitle: "",
      desc: "A special shoot to celebrate the little one before their big day.",
      image: baby15,
      link: "/services/baby-milestone-photography"
    },
    {
      id: "1st-birthday-shoot",
      title: "1ST BIRTHDAY SHOOT",
      subtitle: "",
      desc: "The grand celebration of the first milestone full of joy and laughter.",
      image: e32,
      link: "/services/event-photography"
    },
    {
      id: "pet-family-shoot",
      title: "PET & FAMILY SHOOT",
      subtitle: "",
      desc: "Capturing adorable moments with your beloved furry family members.",
      image: pet,
      link: "/services/family-photography"
    }
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#FFF0F6]/40 border-b border-[#ED78A8]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#242424] tracking-tight">
            • ONE JOURNEY. SEVEN PRECIOUS MILESTONES. •
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-body">
            From belly to baby's first birthday & furry companions, we preserve every step of your family's story.
          </p>
        </div>

        {/* 3 Cards Per Row Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {journeyShoots.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 border-2 border-[#ED78A8]/30 shadow-md hover:shadow-2xl hover:border-[#ED78A8] transition-all duration-500 flex flex-col justify-between text-center group transform hover:-translate-y-1"
            >
              {/* Card Image (Large & Prominent) */}
              <div className="h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden relative shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
              </div>

              {/* Card Details */}
              <div className="pt-6 pb-2 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#ED78A8] tracking-wider uppercase">
                    • {item.title} •
                  </h3>
                  {item.subtitle && (
                    <span className="block text-xs font-semibold text-[#ED78A8] font-nav mt-1 tracking-widest">
                      {item.subtitle}
                    </span>
                  )}
                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed mt-2.5 font-body px-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-nav text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-md shadow-[#ED78A8]/20"
                  >
                    Book This Shoot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
