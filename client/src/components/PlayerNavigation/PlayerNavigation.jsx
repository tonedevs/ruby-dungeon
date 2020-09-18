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
    north = <button id="north" class="up-down" disabled />;
  } else {
    north = (
      <button id="north" class="up-down" onClick={props.onClick}>
        <Link to={props.northLinkTo} >North</Link>
      </button>
    );
  }
  if (currentRoom === "2" || currentRoom === "5" || currentRoom === "8") {
    east = <button id="east" class="left-right" disabled />;
  } else {
    east = (
      <button id="east" class="left-right" onClick={props.onClick}>
        <Link to={props.eastLinkTo}>East</Link>
      </button>
    );
  }
  if (currentRoom === "0" || currentRoom === "1" || currentRoom === "2") {
    south = <button id="south" class="up-down" disabled />;
  } else {
    south = (
      <button id="south" class="up-down" onClick={props.onClick}>
        <Link to={props.southLinkTo}>South</Link>
      </button>
    );
  }
  if (currentRoom === "0" || currentRoom === "3" || currentRoom === "6") {
    west = <button id="west" class="left-right" disabled />;
  } else {
    west = (
      <button id="west" class="left-right" onClick={props.onClick}>
        <Link to={props.westLinkTo}>West</Link>
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
