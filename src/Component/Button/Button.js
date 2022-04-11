import React from 'react'
import "./Button.scss"

export default function Button({text, click}) {
  return (
    <button className='button'onClick={click}>{text}</button>
  )
}
function ButtonNext({text, click}) {
  return (
    <button className='button buttonNext'onClick={click}>{text}</button>
  )
}
export{
  ButtonNext,
}