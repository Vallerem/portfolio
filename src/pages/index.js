import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Card from '../components/Card'

import deesa from '../assets/images/deesa.png'
import hiddo from '../assets/images/hiddo.png'
import meme from '../assets/images/meme.png'

import 'bootstrap/dist/css/bootstrap.css'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div>
        <Helmet>
          <title>Manuel Amaro Valle</title>
          <meta
            name="description"
            content="Manue Amaro Valle Redondo, microwebsite/portfolio"
          />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                <a
                  className="title-intro"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=rEq1Z0bjdwc"
                >
                  Hello there!
                </a>
              </h2>
            </header>
            <p>
              I'm Manu, I'm from Barcelona and I love exploring and broadening
              my horizons, doing things in high quality and staying tuned with
              the latest technologies. I’m an enthusiast of music, clean code
              and every kind of knowledge. Currently studying multimedia
              engineering and trying to survive the JavaScript fatigue learning
              something new everyday.
            </p>
            <p>
              I'm currently working as a software developer. Mainly with
              React/Redux, Ruby on Rails, Node.js, Jenkins, Docker, AWS and
              other front/back/DevOps technologies. I'm working in my own
              projects with Angular, React, Vue and Python, also some machine
              learning and BI when I feel brave enough.
            </p>
            <ul style={{ marginTop: 40 }} className="actions">
              <li>
                <a
                  href="/Valle_Manuel_Amaro_CV.pdf"
                  target="_blank"
                  className="button link-main"
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>
            <div className="row">
              <div className="col-12 col-sm-12 col-xl-6">
                <Card img={deesa} link="https://deesa.herokuapp.com/" />
              </div>
              <div className="col-12 col-sm-12 col-xl-6">
                <Card img={hiddo} link="https://hiddo.herokuapp.com/" />
              </div>
              <div className="col-12 col-sm-12 col-xl-6">
                <Card
                  img={meme}
                  link="https://vallerem.github.io/memerized-game/memerized.html"
                />
              </div>

              <div
                // id={window.innerWidth > 989 ? "link-100" : null }
                id="link-100"
                className="col-12 col-sm-12 col-xl-6"
              >
                <ul className="actions">
                  <li>
                    <a
                      href="https://github.com/Vallerem"
                      target="_blank"
                      className="button link-main"
                    >
                      See them in GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.<br />
                    Nashville, TN 00000<br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section> */}

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Please contact me through{' '}
              <a
                className="link-main"
                style={{ color: '#69BC9F' }}
                target="_blank"
                href="https://www.linkedin.com/in/manuel-amaro-valle"
              >
                Linkedin
              </a>{' '}
              or send me an email:{' '}
              <a
                className="link-main"
                style={{ color: '#69BC9F' }}
                href="mailto:manuelvalle@vallerem.com"
              >
                manuelvalle@vallerem.com
              </a>
            </p>

            <p>Have a nice day! 😃</p>
            <div className="copyright-mobile">
              <p>&copy; 2018 Manuel Amaro Valle Redondo</p>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
