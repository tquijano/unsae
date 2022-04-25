import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../molecules/cards/Card'
import Login from '../../organism/login/Login'
import { types } from '../../types/types'
import './Home.scss'

const Home = () => {

  return (
    <>
      <div>
        <br/>
        <br/>


        <br/>
        <Login/>
        <Card/>

        {/* <button className="buttonHome"
         onClick={handleLogin}>
          Login
        </button> */}
      </div>
    
    </>
  )
}

export default Home