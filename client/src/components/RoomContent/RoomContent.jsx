import React from 'react'

export default function RoomContent(props) {



  return (
    <div id ="room-content">
        <h3>{props.roomName}</h3>
      <p>{props.roomBody}</p>
      <button id={props.currentRoom}
        onClick={props.testClick}
        // onClick={props.onClick}
      >Take Item</button>
      </div>
  )
  }