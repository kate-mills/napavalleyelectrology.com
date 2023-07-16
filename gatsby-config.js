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
        icon: `src/images/icon-512x512.png`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `browser`,
        crossOrigin: `use-credentials`
      }
    }
    /*{ resolve: 'gatsby-plugin-web-font-loader', options: { google: { families: ['Shadows Into Light'] } } }*/
  ],
  siteMetadata: {
    title: 'Napa Valley Electrology',
    siteUrl
  }
}
