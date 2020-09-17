import React from 'react'
import {Link} from 'react-router-dom'

export default function Entrance() {
  return (
    <div>
      <p>Welcome to the dungeon</p>
      <Link to="/rooms/1">Enter</Link>
    </div>
  )
}
