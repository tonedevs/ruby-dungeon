import React from "react";

export default function RoomContent(props) {
  return (
    <div id="room-content">
      <h3>{props.roomName}</h3>
      <p>{props.roomBody}</p>

      <button
        id={`room${props.currentRoom}-button`}
        onClick={props.createJoin}
      >
        Take Item
      </button>
    </div>
  );
}
