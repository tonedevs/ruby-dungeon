import React, { useState } from 'react'
import './Enter.css'
import Map from '../../components/Map/Map'

export default function Register(props) {

  const [formData, setFormData] = useState({
    username: ''
  })
  const { username } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <> 
      <div id="entrance-map">
      <Map />
      </div>

      <div id="enter" >
      <h3>You are a weary and hardened adventurer. An unfulfilled promise has led you to the entrance of this cursed and ancient mine. Danger awaits beyond the rails!</h3>
          <br/>
        <h3>Enlist aid from the four guardian sages and find your way to the back end of the dungeon to retrieve its payload.</h3>
        
        <form onSubmit={(e) => {
          e.preventDefault();
          props.registerSubmit(formData)
        }}>
        
      <label>WHAT IS YOUR NAME?
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          autofocus='true' />
      </label>
      
      <button type="submit">Enter</button>
        </form>
        </div>
      </>
  )
}