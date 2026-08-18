import { Link } from 'react-router-dom'
import { Calendar, Clock, ChevronRight, User, BookOpen } from 'lucide-react'
import { blogPosts } from '../data/blogData'
import { brandDetails } from '../data/photographyData'
import SEOHead from '../components/SEOHead'

export default function BlogPage() {
  const blogFaqs = [
    {
      q: "What topics are covered in the ClickMates Photography blog?",
      a: "Our blog offers expert preparation guides for newborn shoots, maternity gown styling tips, 1st birthday cake smash ideas, and baby milestone photography advice in Pune."
    },
    {
      q: "Where is ClickMates Photography studio located for blog shoot queries?",
      a: "Our studio is located at Office No. 2, Ishana II, Sr.No.77/2, Left Bhusari Colony, 38, Paud Road, Kothrud, Pune, Maharashtra 411038."
    }
  ]

  return (
    <div className="pt-24 pb-20 bg-[#FFFDFB] text-[#242424] font-body">
      <SEOHead
        title="Photography Tips & Guides Blog | ClickMates Photography Pune"
        description="Read professional photography guides, baby shoot preparation tips, maternity styling advice, and cake smash ideas by ClickMates Photography in Kothrud, Pune."
        keywords="Baby Photography Tips Pune, Newborn Shoot Guide, Maternity Photography Ideas, Cake Smash Tips Pune, ClickMates Blog"
        canonicalUrl={`https://${brandDetails.domain}/blog`}
        faqs={blogFaqs}
      />

      {/* Hero Banner */}
      <section className="bg-[#FFF0F6]/40 py-16 sm:py-24 border-b border-[#FFF0F6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
            KNOWLEDGE & INSPIRATION
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-[#242424]">
            Photography Guides & Inspiration
          </h1>
          <p className="text-[#666666] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Expert advice on preparing for newborn sessions, maternity styling, baby milestone choices, and celebration shoots in Pune.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-[#FFF0F6] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#ED78A8] font-nav font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#777777] font-nav">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#ED78A8]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#ED78A8]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl font-bold text-[#242424] group-hover:text-[#ED78A8] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-[#666666] text-sm font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-nav text-[#ED78A8] hover:text-[#D9578D] transition"
                >
                  <span>Read Full Article</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
