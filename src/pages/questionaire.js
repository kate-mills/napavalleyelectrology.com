import React from 'react'
import QuestionaireView from 'views/Questionaire'


import Seo from 'components/Seo'

const QuestionairePage = () => {
  return <QuestionaireView />
}

export default QuestionairePage

export const Head = ({location}) => {
  return (
    <Seo
      location={location}
      pageContext={{
        title: 'Napa Valley Electrology & Skin Care',
        description: 'An integrated approach to skin health by Hilary Molloy in Napa Valley. Permanent hair removal via electrolysis + clinical skin care treatments. Gender affirming /surg prep welcome',
      }}
    />
  )
}
