import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  lang?: string
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  pathname?: string
}

interface SeoWithDataProps extends SeoProps {
  data: SeoQuery
}

export interface SeoQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string[]
      baseUrl: string
      contentType: 'website' | 'article'
      socials: {
        twitter: string
        facebook: string
      }
    }
  }
}

export const PureSeo = ({
  lang = 'en',
  title,
  description,
  keywords,
  image,
  pathname,
  data,
}: SeoWithDataProps) => {
  const defaults = data.site.siteMetadata

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    keywords: keywords || defaults.keywords,
    url: pathname && `${defaults.baseUrl}${pathname}`,
    contentType: defaults.contentType,
    twitter: defaults.socials.twitter && `@${defaults.socials.twitter}`,
    facebook: defaults.socials.facebook,
    image: image && `${defaults.baseUrl}${image}`,
  }

  return (
    <Helmet>
      <html lang={lang} />
      <title>{seo.title}</title>
      {seo.url && <link rel="canonical" href={seo.url} />}
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      {seo.image && <meta name="image" content={seo.image} />}

      <meta name="og:type" content={seo.contentType} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.image && (
        <>
          <meta property="og:image" content={seo.image} />
          <meta property="og:image:alt" content={seo.description} />
        </>
      )}
      {seo.facebook && <meta property="og:site_name" content={seo.facebook} />}

      <meta
        name="twitter:card"
        content={seo.image ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.url && <meta property="twitter:url" content={seo.url} />}
      {seo.image && (
        <>
          <meta name="twitter:image" content={seo.image} />
          <meta name="twitter:image:alt" content={seo.description} />
        </>
      )}
      {seo.twitter && <meta name="twitter:creator" content={seo.twitter} />}
    </Helmet>
  )
}

const Seo = (props: SeoProps) => {
  const data: SeoQuery = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          keywords
          baseUrl
          contentType
          socials {
            twitter
            facebook
          }
        }
      }
    }
  `)

  return <PureSeo data={data} {...props} />
}

export default Seo
