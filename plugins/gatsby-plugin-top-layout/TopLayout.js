import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

import Page from '../../src/components/Page'

import 'aos/dist/aos.css'

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <meta charSet="utf-8" />
        <meta name="title" content="Electrolysis Hair Removal - Napa Valley Electrology & Skin Care"/>
        <meta name="description" content="Best Electrolysis hair removal. FDA approved. Providing care for men, women, and teens. Transgender hair removal."/>
        <meta name="keywords" content="Napa, skin care, electrolysis, hair removal, facial, dermaplane"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:site_name" content="Napa Valley Electrology & Skin Care" />
        <meta name="og:type" content="website" />
        <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>
      </Helmet>
      <Page>{props.children}</Page>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}
