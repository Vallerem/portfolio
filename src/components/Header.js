import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/mvalle_avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/manuel-amaro-valle/"
            className="image avatar"
          >
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Manuel Amaro Valle Redondo</strong>
          </h1>
          <h1 className="header-info">Software developer</h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
