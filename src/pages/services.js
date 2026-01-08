import React from 'react'
import ServicesView from 'views/ServicesView'

import Seo from 'components/Seo'

const ServicesPage = () => {
  return <ServicesView />
}

export default ServicesPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'Services Offered - Napa Valley Electrology + Skin Care',
        description: 'Learn more about the services Hilary Molloy offers in Napa Valley. Permanent hair removal via electrolysis + clinical skin care treatments. Gender affirming /surg prep welcome',
      }}
    />
  )
}
