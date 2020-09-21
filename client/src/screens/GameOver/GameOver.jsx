import React from 'react'
import {Link} from 'react-router-dom'
import './GameOver.css'

export default function GameOver() {
  return (
    <div id="game-over">
      
      <h1>YOU DIED</h1>
     <Link to="/">RETRY?</Link>
      
    </div>
  )
}