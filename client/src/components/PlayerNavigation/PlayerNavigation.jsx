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
    north = null;
  } else {
    north = (
      <Link to={props.northLinkTo}>
        <button id="north" onClick={props.onClick}>
          North
        </button>
      </Link>
    );
  }

  if (currentRoom === "2" || currentRoom === "5" || currentRoom === "8") {
    east = null;
  } else {
    east = (
      <Link to={props.eastLinkTo}>
        <button id="east" onClick={props.onClick}>
          East
        </button>
      </Link>
    );
  }

  if (currentRoom === "0" || currentRoom === "1" || currentRoom === "2") {
    south = (null);
  } else {
    south = (
      <Link to={props.southLinkTo}>
        <button id="south" onClick={props.onClick}>
          South
        </button>
      </Link>
    );
  }

  if (currentRoom === "0" || currentRoom === "3" || currentRoom === "6") {
    west = null;
  } else {
    west = (
      <Link to={props.westLinkTo}>
        <button id="west" onClick={props.onClick}>
          West
        </button>
      </Link>
    );
  }

  return (
    <>
      <div>
        <h3>{props.roomName}</h3>
        <p>{props.roomBody}</p>
      </div>

      <div>
        {north}
        {east}
        {south}
        {west}
      </div>
    </>
  );
}