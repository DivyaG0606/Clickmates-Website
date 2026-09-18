import { useParams, Link } from 'react'
import { Calendar, Clock, ArrowLeft, User, MapPin, Share2, MessageCircle } from 'lucide-react'
import { brandDetails } from '../data/photographyData'
import { blogPosts } from '../data/blogData'
import SEOHead from '../components/SEOHead'

export default function BlogPostPage({ onOpenBooking }) {
  const { slug } = useParams()

  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0]
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` }
  ]

  return (
    <div className="pt-20 pb-24 bg-[#FFFDFB] text-[#242424] font-body selection:bg-[#ED78A8] selection:text-white min-h-screen">
      <SEOHead
        title={post.seoTitle || `${post.title} | Clickmates Studio Pune`}
        description={post.seoDescription || post.shortDesc}
        keywords={post.seoKeywords || "baby photoshoot tips Pune, Clickmates Studio blog"}
        canonicalUrl={`https://${brandDetails.domain}/blog/${post.slug}`}
        breadcrumbs={breadcrumbs}
      />

      {/* ARTICLE HEADER */}
      <section className="py-12 sm:py-16 border-b border-[#ED78A8]/20 bg-gradient-to-b from-[#FFF0F6] via-[#FFFDFB] to-[#FFFDFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest font-nav text-[#555555] hover:text-[#ED78A8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO ALL BLOGS</span>
            </Link>
          </div>

          <div className="space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest font-nav text-[#ED78A8] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#ED78A8]/20">
              {post.category}
            </span>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#242424] leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#666666] font-nav pt-2">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#ED78A8]" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#ED78A8]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#ED78A8]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE CONTENT */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Cover Image */}
        <div className="rounded-3xl overflow-hidden border border-[#ED78A8]/20 shadow-lg max-h-[450px]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content (Rendering HTML string with internal backlinks) */}
        <div
          className="prose prose-lg max-w-none text-[#444444] text-base sm:text-lg font-light leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* AUTHOR & STUDIO BOX */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ED78A8]/20 shadow-md space-y-4">
          <h3 className="font-heading text-lg font-bold text-[#242424] flex items-center gap-2">
            <User className="w-5 h-5 text-[#ED78A8]" />
            About Clickmates Studio Pune
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
            Clickmates Studio is a premier professional photography studio based on main Paud Road near Bhusari Colony in Kothrud, Pune. We specialize in baby photography, certified newborn safety shoots, maternity portraits, family photography, and event coverage across Pune, Maharashtra.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-nav text-xs font-bold">
            <div className="flex items-center gap-2 text-[#555555]">
              <MapPin className="w-4 h-4 text-[#ED78A8]" />
              <span>Left Bhusari Colony, 38 Paud Road, Kothrud, Pune</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full text-white bg-[#ED78A8] hover:bg-[#D9578D] transition-all cursor-pointer uppercase tracking-wider"
            >
              Book Studio Shoot
            </button>
          </div>
        </div>

        {/* RELATED ARTICLES */}
        {relatedPosts.length > 0 && (
          <div className="pt-8 border-t border-[#FFF0F6] space-y-6">
            <h3 className="font-heading text-2xl font-bold text-[#242424]">
              Related Photography Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="p-6 rounded-2xl bg-white border border-[#ED78A8]/20 shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ED78A8] font-nav">
                    {rel.category}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-[#242424]">
                    <Link to={`/blog/${rel.slug}`} className="hover:text-[#ED78A8] transition-colors">
                      {rel.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-[#555555] font-light line-clamp-2">
                    {rel.shortDesc}
                  </p>
                  <Link
                    to={`/blog/${rel.slug}`}
                    className="inline-block text-xs font-bold text-[#ED78A8] uppercase font-nav pt-1"
                  >
                    Read Article →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
