import PropTypes from 'prop-types'
import React from 'react'
import Work from './Work'
import Grid from './Grid'
import portfolios from '../portfolios'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPortfolioVisible: false,
      isGridVisible: true,
      currentPortfolio: '',
    }
    this.handleClickThumbnail = this.handleClickThumbnail.bind(this);
    this._renderPortfolio = this._renderPortfolio.bind(this);
  }

  handleClickThumbnail(portfolioName) {
    this.setState(
      {
        isGridVisible: false, isPortfolioVisible: true, currentPortfolio: portfolioName
      }
    )
  }

  _renderPortfolio(id) {
    portfolios.total.map((folio) => {
      if (folio.title === id) {
        console.log(`뭐지 ${JSON.stringify(folio, null, 2)}`)
        return (
          <Work portfolio={folio} article={this.props.article} articleTimeout={this.props.articleTimeout} />
        )
      }
    })
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.setState((prev) => {
            return {
              ...prev,
              ...{isGridVisible: true, isPortfolioVisible: false}
            }
          })
          this.props.onCloseArticle()
        }}
      ></div>
    )
    let closeAtPortfolio = (
      <div
        className="close"
        onClick={() => {
          this.setState((prev) => {
            return {
              ...prev,
              ...{isGridVisible: true, isPortfolioVisible: false}
            }
          })
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {this.state.isGridVisible && (
            <Grid portfolios={portfolios.total} onClickItem={this.handleClickThumbnail} />
          )}
          {this.state.isPortfolioVisible && portfolios.total.map((folio) => {
            if (folio.title === this.state.currentPortfolio) {
              console.log(`뭐지 ${JSON.stringify(folio, null, 2)}`)
              return (
                <Work portfolio={folio} article={this.props.article} articleTimeout={this.props.articleTimeout} />
              )
            }
          })}
          {this.state.isGridVisible? close : closeAtPortfolio}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
