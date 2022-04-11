import React from 'react'
import "./BackButton.scss"
import back from '../../assets/svg/left-arrow-svgrepo-com.svg'


export default function BackButton({text, click}) {
  return (
    <img className='backButton' onClick={click} src={back}></img>
  )
}
