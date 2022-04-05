import React from 'react'
import "./BackButton.scss"
import back from '../../assets/svg/go-back-arrow-svgrepo-com.svg'


export default function BackButton({text, click}) {
  return (
    <img className='backButton' src={back}></img>
  )
}
