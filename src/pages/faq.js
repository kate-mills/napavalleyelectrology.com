import React from 'react'
import Faq from 'views/Faq'

import Seo from 'components/Seo'

const FaqPage = () => {
  return <Faq />
}

export default FaqPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'FAQ - Napa Valley Electrology & Skin Care',
        description: 'Learn more about electrolysis with Hilary Molloy in Napa Valley. Permanent hair removal via electrolysis + clinical skin care treatments. Gender affirming /surg prep welcome',
      }}
    />
  )
}
