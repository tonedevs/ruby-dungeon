import React from "react";

export default function RoomContent(props) {
  return (
    <div id="room-content">
      <h3>{props.roomName}</h3>
      <p>{props.roomBody}</p>

      <button
        id={`room${props.currentRoom}-button`}
        onClick={props.createJoin}
        style={props.roomName === "Main Corridor" ? { display: "none" } : null}
      >
        {props.currentRoom === "4"? "Attack the bug!" : "Take Item"}
      </button>
    </div>
  );
}
