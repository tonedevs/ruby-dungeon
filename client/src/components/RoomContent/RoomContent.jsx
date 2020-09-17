import React from 'react'

export default function RoomContent(props) {
  return (
    <div>
        <h2>{props.roomName}</h2>
        <p>{props.roomBody}</p>
      </div>
  )
}
