import { useEffect } from 'react'
import { brandDetails } from '../data/photographyData'

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/src/assets/Clickmates logo.webp',
  schemaType = 'LocalBusiness',
  faqs = [],
  serviceDetails = null,
  breadcrumbs = []
}) {
  useEffect(() => {
    // 1. Document Title
    const fullTitle = title 
      ? title 
      : 'ClickMates Photography | Baby, Maternity & Newborn Photography Studio in Kothrud, Pune'
    document.title = fullTitle

    // Helper to set or create meta tag
    const setMetaTag = (selector, name, attrName, content) => {
      if (!content) return
      let element = document.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attrName, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const currentUrl = canonicalUrl || window.location.href

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'description', 'name', description || 'ClickMates Photography is a professional photography studio based in Kothrud, Pune, offering baby, newborn, maternity, family, milestone, and event photography.')
    setMetaTag('meta[name="keywords"]', 'keywords', 'name', keywords || 'ClickMates Photography, Photography Studio Pune, Photographer Pune, Photography Studio Kothrud, Baby Photography Pune, Newborn Photography Pune, Maternity Photography Pune, Family Photography Pune')
    setMetaTag('meta[name="author"]', 'author', 'name', brandDetails.name)

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', currentUrl)

    // 4. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'og:title', 'property', fullTitle)
    setMetaTag('meta[property="og:description"]', 'og:description', 'property', description)
    setMetaTag('meta[property="og:type"]', 'og:type', 'property', ogType)
    setMetaTag('meta[property="og:url"]', 'og:url', 'property', currentUrl)
    setMetaTag('meta[property="og:image"]', 'og:image', 'property', ogImage.startsWith('http') ? ogImage : `https://${brandDetails.domain}${ogImage}`)

    // 5. Twitter Card Tags
    setMetaTag('meta[property="twitter:card"]', 'twitter:card', 'property', 'summary_large_image')
    setMetaTag('meta[property="twitter:url"]', 'twitter:url', 'property', currentUrl)
    setMetaTag('meta[property="twitter:title"]', 'twitter:title', 'property', fullTitle)
    setMetaTag('meta[property="twitter:description"]', 'twitter:description', 'property', description)
    setMetaTag('meta[property="twitter:image"]', 'twitter:image', 'property', ogImage.startsWith('http') ? ogImage : `https://${brandDetails.domain}${ogImage}`)

    // 6. JSON-LD Schemas Graph
    const schemaGraph = []

    // LocalBusiness / PhotographyBusiness Schema
    const baseBusinessSchema = {
      "@type": "PhotographyBusiness",
      "@id": `https://${brandDetails.domain}/#organization`,
      "name": brandDetails.name,
      "url": `https://${brandDetails.domain}/`,
      "logo": `https://${brandDetails.domain}/src/assets/Clickmates logo.webp`,
      "image": `https://${brandDetails.domain}/src/assets/Clickmates logo.webp`,
      "telephone": brandDetails.phone,
      "email": brandDetails.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": brandDetails.fullAddress,
        "addressLocality": brandDetails.city,
        "addressRegion": brandDetails.state,
        "postalCode": brandDetails.pincode,
        "addressCountry": brandDetails.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5080965",
        "longitude": "73.7874068"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:30",
          "closes": "20:00"
        }
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Kothrud" },
        { "@type": "AdministrativeArea", "name": "Paud Road" },
        { "@type": "AdministrativeArea", "name": "Bhusari Colony" },
        { "@type": "City", "name": "Pune" },
        { "@type": "State", "name": "Maharashtra" }
      ],
      "sameAs": [
        brandDetails.instagram,
        brandDetails.facebook
      ]
    }
    schemaGraph.push(baseBusinessSchema)

    // WebSite Schema
    schemaGraph.push({
      "@type": "WebSite",
      "@id": `https://${brandDetails.domain}/#website`,
      "url": `https://${brandDetails.domain}/`,
      "name": brandDetails.name,
      "publisher": { "@id": `https://${brandDetails.domain}/#organization` }
    })

    // Service Schema if provided
    if (serviceDetails) {
      schemaGraph.push({
        "@type": "Service",
        "name": serviceDetails.name || title,
        "description": serviceDetails.description || description,
        "provider": { "@id": `https://${brandDetails.domain}/#organization` },
        "areaServed": { "@type": "City", "name": "Pune" },
        "serviceType": serviceDetails.category || "Photography Service"
      })
    }

    // BreadcrumbList Schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraph.push({
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url.startsWith('http') ? crumb.url : `https://${brandDetails.domain}${crumb.url}`
        }))
      })
    }

    // FAQPage Schema if provided
    if (faqs && faqs.length > 0) {
      schemaGraph.push({
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q || faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a || faq.answer
          }
        }))
      })
    }

    // Embed Graph Script
    let scriptTag = document.getElementById('json-ld-schema')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.id = 'json-ld-schema'
      scriptTag.type = 'application/ld+json'
      document.head.appendChild(scriptTag)
    }
    scriptTag.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemaGraph
    }, null, 2)

  }, [title, description, keywords, canonicalUrl, ogType, ogImage, schemaType, faqs, serviceDetails, breadcrumbs])

  return null
}
