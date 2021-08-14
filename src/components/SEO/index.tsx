import React from 'react'
import Head from 'next/head'

export interface SEOProps {
  title: string
  description: string
}

const SEO: React.FC<SEOProps> = (props) => {
  const { title, description } = props ?? {}

  return (
    <Head>
      {title && (
        <title>
          {title} | {process.env.NEXT_PUBLIC_BASE_TITLE}
        </title>
      )}
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta name="description" content={description} />
    </Head>
  )
}

export default SEO
