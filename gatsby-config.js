module.exports = {
  pathPrefix: "/gatsby-starter-dimension",
  siteMetadata: {
    title: 'MYH Portfolio',
    author: 'MYH',
    description: 'MYH Portfolio website',
    keywords: 'portfolio, 3D model, artstation',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MYH Portfolio`,
        short_name: `MYH`,
        description: `MYH's portfolio`,
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MYH Portfolio`,
        short_name: `MYH`,
        description: `MYH's portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },

  ],
}
