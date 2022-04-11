import React from 'react'
import './PreviousImages.scss'


export default function PreviousImages(images) {
    console.log(images)
    console.log(images.images.earth)
  return (
    <div className='previous'>
        <p className='previous__text'>{images.images.date} </p>
       <img className="previous__old" src={images.images.earth}></img>
       <img className="previous__old" src={images.images.mars}></img>
    </div>
  )
}
