import { useParams, Link, Navigate } from 'react'
import { Calendar, Clock, ArrowLeft, User, CheckCircle2, MessageCircle } from 'lucide-react'
import { blogPosts } from '../data/blogData'
import { brandDetails } from '../data/photographyData'
import SEOHead from '../components/SEOHead'

export default function BlogDetailPage({ onOpenBooking }) {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` }
  ]

  return (
    <div className="pt-24 pb-20 bg-[#FFFDFB] text-[#242424] font-body" itemScope itemType="https://schema.org/BlogPosting">
      <SEOHead
        title={`${post.title} | ClickMates Photography Pune`}
        description={post.excerpt}
        keywords={`${post.category} Pune, Baby Photography Tips Pune, ${post.title}`}
        canonicalUrl={`https://${brandDetails.domain}/blog/${post.slug}`}
        faqs={post.faqs || []}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Header */}
      <section className="bg-[#FFF0F6]/40 py-16 sm:py-24 border-b border-[#FFF0F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-nav text-[#ED78A8] bg-white px-4 py-2 rounded-full border border-[#ED78A8]/20 shadow-xs hover:bg-[#FFF0F6] transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>

          <span className="block text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]" itemProp="articleSection">
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[#242424] leading-tight" itemProp="headline">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#777777] font-nav pt-2">
            <span className="flex items-center gap-1.5" itemProp="author" itemScope itemType="https://schema.org/Person">
              <User className="w-4 h-4 text-[#ED78A8]" />
              <span itemProp="name">{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#ED78A8]" />
              <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#ED78A8]" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Article Featured Image & Body Content */}
      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="rounded-3xl overflow-hidden shadow-xl h-80 sm:h-112 w-full border border-[#ED78A8]/20">
          <img
            src={post.image}
            alt={post.alt || `${post.title} - ClickMates Photography Pune Studio`}
            className="w-full h-full object-cover"
            itemProp="image"
          />
        </div>

        <div
          className="prose prose-lg max-w-none text-[#333333] space-y-6 font-light leading-relaxed
            prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#242424]
            prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-8 prose-h2:mb-4
            prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
          itemProp="articleBody"
        />

        {/* FAQs inside Article */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="pt-8 border-t border-[#FFF0F6] space-y-6">
            <h3 className="font-heading text-2xl font-bold text-[#242424]">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-[#FFF0F6] shadow-xs space-y-2">
                  <h4 className="font-heading font-bold text-base text-[#242424] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#ED78A8] shrink-0" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-[#666666] text-sm font-light leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] text-white text-center space-y-6 shadow-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest font-nav text-[#ED78A8]">
            READY FOR YOUR SHOOT?
          </span>
          <h3 className="font-heading text-3xl font-bold">
            Plan Your Shoot With ClickMates Photography
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light">
            Located in Kothrud, Pune. Let's create beautiful, timeless photographs for your family.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-nav text-xs font-semibold">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition shadow-lg shadow-[#ED78A8]/30 cursor-pointer"
            >
              Book Your Photoshoot
            </button>
            <a
              href={`https://wa.me/${brandDetails.whatsapp}?text=Hi%20ClickMates!%20I'd%20like%20to%20enquire%20about%20a%20photoshoot.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}