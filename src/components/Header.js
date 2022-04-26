import React from 'react'
import peter from '../images/PETER.png'

export default function Header(){
    return(
        <div className='header'>
            <img className="peter"src={peter}/> 
            <p>Peter the Ant Eater's Destinations for Destruction</p>
        </div>
    )
}
