import React from 'react'
import './Map.css'

export default function Map() {

  const array = [...Array(10).keys()].reverse()

  return (
    <div id="map">

      {array.map((key) => {
        
        return <div id={`map-${key+1}`} />
      })}
      
    </div>
  )
}
