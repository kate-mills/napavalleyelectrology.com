import React from 'react'
import {Helmet} from 'react-helmet'

export default React.memo(({description, title, image}) => {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://napavalleyelectrology.com',
      description,
      email: 'hilary@napavalleyelectrology.com',
      image,
      logo: 'https://napavalleyelectrology.com/logo.png',
      name: title,
      sameAs: [
        `https://www.facebook.com/skincarebyhilary`,
        `https://instagram.com/napavalleyelectrology`,
        `https://www.yelp.com/biz/napa-valley-electrology-and-skin-care-napa`
      ],
      telephone: '+17073153329',
      priceRange: "$$",
      url: 'https://napavalleyelectrology.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressLocality: 'Napa',
        addressRegion: 'CA',
        name: 'Napa Valley Electrology & Skin Care',
        postalCode: '94559',
        streetAddress: '1812 Jefferson St'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '38.304154657145645',
        longitude: '-122.29415223206453'
      }
    }
  ]
  return (
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Helmet>
  )
})
