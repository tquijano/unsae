import React from 'react'
import RegisterBienestar from '../../organism/register/registerBienestar/RegisterBienestar'
import RegisterStudent from '../../organism/register/registerStudent/RegisterStudent'
import RegisterTeacher from '../../organism/register/registerTeacher/RegisterTeacher'

const Bienestar = () => {
  return (
    <div>
        <RegisterStudent/>
        <RegisterTeacher/>
        <RegisterBienestar/>
    </div>
  )
}

export default Bienestar