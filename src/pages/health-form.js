import React from 'react'
import HealthFormView from 'views/HealthForm'


import Seo from 'components/Seo'

const HealthFormPage = () => {
  return <HealthFormView />
}

export default HealthFormPage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'Health Form - Napa Valley Electrology & Skin Care',
        description: 'An integrated approach to skin health by Hilary Molloy in Napa Valley. Permanent hair removal via electrolysis + clinical skin care treatments. Gender affirming /surg prep welcome',
      }}
    />
  )
}
