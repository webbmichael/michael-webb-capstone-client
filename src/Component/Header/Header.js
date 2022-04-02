import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <h1 className='header__title'>Journey Through <br/><mark className="white">Space</mark></h1>
        <Link to='/earth'>
          <p className='header__link'>Earth</p>
        </Link>
        <Link to='/earth'>
          <p className='header__link'>Asteroids</p>
        </Link>
        <Link to='/mars'>
          <p className='header__link'>Mars</p>
        </Link>
      
     

    </div>
  )
}
