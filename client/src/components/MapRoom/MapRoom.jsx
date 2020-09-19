import React from "react";
import { useLocation } from "react-router-dom";

export default function MapRoom(props) {
  const location = parseInt(useLocation().pathname.slice(-1));
  console.log(location);
  console.log(props.divId.slice(-1));

  return (
    <div
      id={props.id}
      divId={props.divId}
      style={
        location === parseInt(props.divId.slice(-1))
          ? {
            backgroundColor: "#E21216",
            border: '.05px solid black',
            
          }
          : {
            backgroundColor: "#BC8034",
            border: '.05px solid black'
          }
      }
    />
  );
}
