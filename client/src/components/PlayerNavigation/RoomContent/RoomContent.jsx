import React from 'react'

export default function RoomContent(props) {
  return (
    <div>
      <h3>{props.roomName}</h3>
      <p>{props.roomBody}</p>
    </div>
  )
}
