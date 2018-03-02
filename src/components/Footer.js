import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/manuel-amaro-valle"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/Vallerem"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/vallerem_"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:manuelvalle@vallerem.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; 2018 Manuel Amaro Valle Redondo</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
