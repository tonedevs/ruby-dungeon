import React from 'react'

export default function RoomContent(props) {
  return (
    <div id ="room-content">
        <h3>{props.roomName}</h3>
        <p>{props.roomBody}</p>
      </div>
  )
}
