import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Lightbox from 'react-images'

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
            <ul className="actions">
              <li>
                <a
                  href="/Valle_Manuel_Amaro_CV.pdf"
                  target="_blank"
                  className="button"
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <h3>building...</h3>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Please contact me through
              <a
                target="_blank"
                href="https://www.linkedin.com/in/manuel-amaro-valle"
              >
                {' '}
                Linkedin
              </a>{' '}
              or send me an email:{' '}
              <a href="mailto:manuelvalle@vallerem.com">
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
