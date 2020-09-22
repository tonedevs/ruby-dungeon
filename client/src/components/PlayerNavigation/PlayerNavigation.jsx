import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ExploreOptions(props) {
  const location = useLocation();
  const currentRoom = location.pathname.slice(-1);

  let north;
  let east;
  let south;
  let west;

  console.log(currentRoom)

  if (currentRoom === "6" || currentRoom === "7" || currentRoom === "8") {
    north = <button id="north" disabled>N</button>;
  } else {
    north = (
      
        <Link to={props.northLinkTo} onClick={props.onClick} id="north"><button id="north">N</button></Link>
      
    );
  }
  if (currentRoom === "2" || currentRoom === "5" || currentRoom === "8" || currentRoom === "7") {
    east = <button id="east" class="left-right" disabled>E</button>
  } else {
    east = (
      
        <Link to={props.eastLinkTo} onClick={props.onClick} id="east"><button id="east">E </button></Link>
     
    );
  }
  if (currentRoom === "0" || currentRoom === "1" || currentRoom === "2") {
    south = <button id="south" disabled>S</button>;
  } else {
    south = (
      
        <Link to={props.southLinkTo} onClick={props.onClick} id="south"><button id="south">S</button></Link>
      
    );
  }
  if (currentRoom === "0" || currentRoom === "3" || currentRoom === "6" || currentRoom === "7") {
    west = <button id="west" disabled>W</button>;
  } else {
    west = (
      
        <Link to={props.westLinkTo} onClick={props.onClick} id="west"><button id="west">W </button></Link>
     
    );
  }
  return (
    <>
      {north}
      {east}
      {south}
      {west}
    </>
  );
}
