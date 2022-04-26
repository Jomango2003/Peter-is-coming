import React from 'react'
import data from '../data/Data'
import { TravelCard } from './TravelCard';

export default function Content(){
    const travelPlaces = data.map(place => {
        return <TravelCard 
            key={place.key}
            item={place}/>
    });
    return (
        <div>
            {travelPlaces}
        </div>
    );
}