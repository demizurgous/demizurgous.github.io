import PropTypes from 'prop-types'
import React from 'react'
import Work from './Work'
import Grid from './Grid'
import portfolios from '../portfolios'
import thumbnail from '../images/about_thumbnail.png'

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
    this.props.onOpenPortfolio()
    return setTimeout(() => {this.setState(
      {
        isGridVisible: false, isPortfolioVisible: true, currentPortfolio: portfolioName
      }
    )}, 100)
  }

  _renderPortfolio(id) {
    const folio = portfolios.total.find((folio) => 
      (folio.title === id) )
    return (
      <Work key={id} portfolio={folio} article={this.props.article} articleTimeout={this.props.articleTimeout} timeout={this.props.timeout} />
    )
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
          this.props.onClosePortfolio()
          setTimeout(()=>{this.setState((prev) => {
            return {
              ...prev,
              ...{isGridVisible: true, isPortfolioVisible: false}
            }
          })}, 200)
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
          style={{ display: 'none', paddingTop: '36px' }}
        >
          {this.state.isGridVisible && (
            <Grid portfolios={portfolios.total} onClickItem={this.handleClickThumbnail} />
          )}
          {this.state.isPortfolioVisible && this._renderPortfolio(this.state.currentPortfolio)}
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
          <div id="avatar" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <img style={{borderRadius: '50%', width: '150px', height: '150px', marginBottom: '30px'}} src={thumbnail} />
          </div>
          <div style={{textAlign: 'center', fontSize: '22px'}}>
            <p><span style={{fontSize: '30px', letterSpacing: '0.3rem', fontWeight: 1000}}>Min Yeonhong</span><br/> 3D Character Artist<br/>   
            Seoul, South Korea</p>   
          </div>
          <div style={{textAlign: 'center', fontSize: '20px'}}>
            <span style={{fontSize: '18px'}}>demizurgous@gmail.com</span><br/>
            <p>Looking for a job</p>
          </div>
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
          <form method="get" action="mailto:demizurgous@gmail.com" encType="text/plain">
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
              <textarea name="body" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Email" className="special" />
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
  onClosePortfolio: PropTypes.func,
  onOpenPortfolio: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
