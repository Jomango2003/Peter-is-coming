import React from 'react'
import redPointer from '../images/redPointer.png'

export function TravelCard(props){
    return(
        <div className='travel-card-container'>
            <div>
                 <img className='travel-card-image' src={props.item.imageUrl}/>
            </div>
            <div className='travel-card-content'>
                <div className='line'>
                <img src={redPointer}/>
                <p className='travel-card-location'>{props.item.location}</p>
                <a className='travel-card-maps-link'
                href={props.item.googleMapsUrl}>View on Google maps</a>
                </div>
                <h1 className='travel-card-title'>{props.item.title}</h1>
                <p className='travel-card-dates'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='travel-card-description'>{props.item.description}</p>
            </div>
      </div>
    );
}