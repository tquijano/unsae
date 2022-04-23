import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonCard.scss'

const ButtonCard = ({ text }) => {
  const url = "#"
  return (
    <Link to={`/${url}`}>
    {console.log('url' , url)}
    <button className="button">
      {text}
    </button>
  </Link>
  )
}

export default ButtonCard