import React from 'react'
const Seo = ({location, params, data, pageContext = {}}) => {
  const {title, description, image} = pageContext
  const siteUrl = `https://napavalleyelectrology.com`
  const defaultTitle = 'Napa Valley Electrology & Skin Care'
  const defaultDescription =
    'Permanent hair removal via electrolysis and clinical skin care treatments. Gender Affirming and surgery prep services provided with compassion and understanding.'
  const defaultImage = `${siteUrl}/napa-valley-electrology.jpg`
  console.log(defaultImage)
  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="og:title" content={title || defaultTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="og:description" content={description || defaultDescription} />
      <meta name="twitter:url" content={`${siteUrl}${location.pathname}`} />
      <meta name="og:image" content={image || defaultImage} />
    </>
  )
}
export default Seo
