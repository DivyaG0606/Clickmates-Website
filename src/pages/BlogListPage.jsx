import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ChevronRight, User, BookOpen, MapPin, Search } from 'lucide-react'
import { brandDetails } from '../data/photographyData'
import { blogPosts } from '../data/blogData'
import SEOHead from '../components/SEOHead'

export default function BlogListPage({ onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  const categories = ['ALL', 'BABY PHOTOGRAPHY TIPS', 'MATERNITY GUIDE', 'NEWBORN CARE & SAFETY']

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const blogFaqs = [
    {
      q: "What topics are covered in the Clickmates Studio photography blog?",
      a: "Our blog covers expert advice on baby photoshoot preparation, newborn safety guidelines, maternity gown styling tips, family portrait planning, milestone ideas, and local photography guidance in Pune."
    },
    {
      q: "Where can I book a photoshoot session recommended in the blog posts?",
      a: "You can book a shoot directly at our studio located on main Paud Road, Left Bhusari Colony, Kothrud, Pune, or by calling +91 96999 45608."
    }
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" }
  ]

  return (
    <div className="pt-20 pb-24 bg-[#FFFDFB] text-[#242424] font-body selection:bg-[#ED78A8] selection:text-white min-h-screen">
      <SEOHead
        title="Photography Blog & Parents Guide Pune | Clickmates Studio"
        description="Read expert baby photography tips, newborn care guidelines, maternity photoshoot advice, and family portrait ideas from Clickmates Studio in Kothrud, Pune."
        keywords="Photography Blog Pune, baby photoshoot tips Pune, newborn photography guide Pune, maternity shoot guide Kothrud, Clickmates Studio blog, photographer in Kothrud Pune"
        canonicalUrl={`https://${brandDetails.domain}/blog`}
        faqs={blogFaqs}
        breadcrumbs={breadcrumbs}
      />

      {/* HERO BANNER SECTION (H1) */}
      <section className="relative py-16 sm:py-24 border-b border-[#ED78A8]/20 text-center overflow-hidden bg-gradient-to-b from-[#FFF0F6] via-[#FFFDFB] to-[#FFFDFB]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ED78A8]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-nav text-[#ED78A8] bg-white px-4 py-1.5 rounded-full border border-[#ED78A8]/30 shadow-xs">
            PHOTOGRAPHY & PARENTING BLOG
          </span>

          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#242424] tracking-tight leading-tight">
            Clickmates Studio Blog & Guides
          </h1>

          <p className="text-[#555555] text-sm sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Expert photography tips, baby safety advice, maternity gown styling guides, and family milestone ideas from our professional team in Kothrud, Pune.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-[#FFF0F6]/60 border border-[#ED78A8]/20 shadow-xs">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-nav uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#ED78A8] text-white shadow-md shadow-[#ED78A8]/30'
                    : 'bg-white text-[#555555] hover:text-[#ED78A8] border border-[#ED78A8]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#ED78A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full text-xs font-body bg-white border border-[#ED78A8]/30 focus:outline-none focus:ring-2 focus:ring-[#ED78A8]"
            />
          </div>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#ED78A8]/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#ED78A8] text-[10px] font-bold uppercase tracking-widest font-nav px-3 py-1 rounded-full border border-white/20">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-[#777777] font-nav">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#ED78A8]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#ED78A8]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl font-bold text-[#242424] group-hover:text-[#ED78A8] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed line-clamp-3">
                    {post.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase font-nav text-[#ED78A8] hover:text-[#D9578D] transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STUDIO LOCATION FOOTNOTE */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF0F6]/50 p-6 sm:p-8 rounded-3xl border border-[#ED78A8]/20 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[#ED78A8] font-bold">
            <MapPin className="w-5 h-5" />
            <span>Clickmates Studio Location (Paud Road, Kothrud, Pune):</span>
          </div>
          <p className="text-[#444444] font-light leading-relaxed">
            Ishana II, Office No. 2, Sr. No. 77/2, Left Bhusari Colony, 38 Paud Road, Kothrud, Pune, Maharashtra 411038. Clickmates Photography Studio
          </p>
        </div>
      </section>
    </div>
  )
}
