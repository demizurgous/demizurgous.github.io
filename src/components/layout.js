import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: 'portfolio, 3D model, artstation' },
            ]}
          >
            <meta property="og:url" content="https://demizurgous.github.io/portfolio" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="MYH's portfolio" />
            <meta property="og:description" content={data.site.siteMetadata.description} />
            <meta property="og:image" content="https://cdna.artstation.com/p/assets/covers/images/038/851/374/smaller_square/min-yeonhong-min-yeonhong-08.jpg?1624268378" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="Yeonhong Min" />
            <meta name="twitter:title" content="MYH's portfolio" />
            <meta name="twitter:description" content="portfolio, 3D model, artstation" />
            <meta charSet="utf-8" />
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
