require('dotenv').config()
require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
const siteUrl = `https://napavalleyelectrology.com/`

module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Napa Valley Electrology & Skin Care`,
        short_name: `Napa Valley Electrology`,
        lang: `en`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `browser`,
        crossOrigin: `use-credentials`
      }
    }
  ],


  siteMetadata: {
    title: `Napa Valley Electrology & Skin Care`,
    description: `An integrated approach to skin health. Permanent hair removal via electrolysis + clinical skin care treatments. Gender Affirming and surgery prep services provided with compassion and understanding.`,
    dateModified: `${new Date().toISOString()}`,
    author: `Hilary Molloy`,
    twitterUsername: `@itsHilaryMolloy`,
    image: `/product.jpg`,
    url: `https://napavalleyelectrology.com`,
    baseUrl: `https://napavalleyelectrology.com`,
    siteUrl: `https://napavalleyelectrology.com`,
    defaultImage: `https://napavalleyelectrology.com/product.jpg`,
    organization: {
      address: {
        street: `1812 Jefferson St`,
        city: `Napa`,
        state: `CA`,
        zip: `94559`,
        country: `USA`,
      },
      email: `hilary@napavalleyelectrology.com`,
      name: `Napa Valley Electrology & Skin Care`,
      url: `https://napavalleyelectrology.com`,
      logo: `https://michelecorleyclinicalskincare.com/logo.jpg`,
      telephone: `707-315-3329`,
      priceRange: `$$`,
      sameAs: [
        `https://www.facebook.com/skincarebyhilary`,
        `https://instagram.com/napavalleyelectrology`,
        `https://www.yelp.com/biz/napa-valley-electrology-and-skin-care-napa`,
      ],
    },
  },

}
