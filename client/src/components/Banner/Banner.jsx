import React from 'react';

export default function Banner(props) {

  return (
    <header>
      <h1>Ruby Dungeon</h1>
      <div>
        <button onClick={props.handleLogout}>Exit</button>

        </div> 
    </header>
  )
}