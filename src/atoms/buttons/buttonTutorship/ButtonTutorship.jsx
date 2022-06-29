import React from 'react'
import './ButtonTutorship.scss'

const ButtonTutorship = ({action ,text}) => {
    return (
        <button className="buttonTutorship" type="submit" onClick={action}>
            <span className="text">{text}</span>
            <i className="icon">✓</i>
        </button>
    )
}

export default ButtonTutorship