import React from 'react'
import { Button } from 'react-bootstrap'

const Card = ({ img, link, text }) => (
  <div className="card-project">
    <a className="link-project" href={link} target="_blank">
      <img className="img-project" src={img} alt={img} />
    </a>
    <div className="text-project">{text}</div>
  </div>
)

export default Card
