import React from 'react'
import IndexView from 'views/IndexView'

import Seo from 'components/Seo'
import SeoImg from 'images/product.jpg'

const IndexPage = () => {
  return <IndexView />
}

export default IndexPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'Napa Valley Electrology & Skin Care',
        description: 'An integrated approach to skin health by Hilary Molloy in Napa Valley. Permanent hair removal via electrolysis + clinical skin care treatments. Gender affirming /surg prep welcome',
        image: SeoImg
      }}
    />
  )
}
