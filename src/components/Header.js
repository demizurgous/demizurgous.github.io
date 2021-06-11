import PropTypes from 'prop-types'
import React from 'react'
import Artstation from '../assets/svg/artstation-brands.svg'

// <span className="icon fab-artstation"></span>
const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div onClick={()=>{window.open('https://www.artstation.com/comma002c')}} className="logo" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={Artstation} style={{width:50, height: 50}} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Min YeonHong</h1>
        <p>
          PORTFOLIO WEBSITE
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
