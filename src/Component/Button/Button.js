import React from 'react'
import "./Button.scss"

export default function Button({text, click}) {
  return (
    <button className='button'onClick={click}>{text}</button>
  )
}
