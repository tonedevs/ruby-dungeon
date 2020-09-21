import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ExploreOptions(props) {
  const location = useLocation();
  const currentRoom = location.pathname.slice(-1);

  let north;
  let east;
  let south;
  let west;

  if (currentRoom === "6" || currentRoom === "7" || currentRoom === "8") {
    north = <button id="north" class="up-down" disabled>N</button>;
  } else {
    north = (
      <button id="north">
        <Link to={props.northLinkTo} onClick={props.onClick} id="north">N</Link>
      </button>
    );
  }
  if (currentRoom === "2" || currentRoom === "5" || currentRoom === "8" || currentRoom === "7") {
    east = <button id="east" class="left-right" disabled>E</button>
  } else {
    east = (
      <button id="east">
        <Link to={props.eastLinkTo} onClick={props.onClick} id="east">E</Link>
      </button>
    );
  }
  if (currentRoom === "0" || currentRoom === "1" || currentRoom === "2") {
    south = <button id="south" disabled>S</button>;
  } else {
    south = (
      <button id="south">
        <Link to={props.southLinkTo} onClick={props.onClick} id="south">S</Link>
      </button>
    );
  }
  if (currentRoom === "0" || currentRoom === "3" || currentRoom === "6" || currentRoom === "7") {
    west = <button id="west" disabled>W</button>;
  } else {
    west = (
      <button id="west">
        <Link to={props.westLinkTo} onClick={props.onClick} id="west">W</Link>
      </button>
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
