import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
       <Link to='.'>
        <h1 className='header__title'>Journey Through <br/><mark className="space">SPACE</mark></h1>
       </Link>
        <div className='header__pages'>
        
        <Link to='/earth'>
          <p className='header__link'>EARTH</p>
        </Link>
        <Link to='/asteroid'>
          <p className='header__link'>ASTEROIDS</p>
        </Link>
        <Link to='/mars'>
          <p className='header__link'>MARS</p>
        </Link>
        <Link to='/login'>
          <p className='header__link'>LOGIN</p>
        </Link>
        </div>
      
     

    </div>
  )
}
