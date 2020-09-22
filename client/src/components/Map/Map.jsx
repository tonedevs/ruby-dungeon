import React from "react";
import "./Map.css";

import MapRoom from '../MapRoom/MapRoom'

export default function Map() {

  const array = ["x", "entrance", "x", 2, 1, 0, 5, 4, 3, 8, 7, 6].reverse();
  
  return (
    <div id="map">
      {array.map((key) => {
        return (
          <MapRoom divId={`map-${key}`} id={`map-${key}`} />
        )
      })}
    </div>
  );
}