import React from 'react'
import ButtonCard from '../../atoms/buttons/buttonCard/ButtonCard'
import './Card.scss'

const Card = () => {
  return (
    <div className='card'>
      <div className="card_side card_side--front">
        <div className="card_img">
          <div className="blur"></div>
          
        </div>
        <div className="card_heading">
          Información general
        </div>
      </div>
      <div className="card_side card_side--back">
        <br/>
        <br/>
        <br/>

        <ButtonCard text='Ver Más'/>
      </div>
    </div>
  )
}

export default Card