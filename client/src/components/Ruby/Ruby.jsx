import React from 'react'
import './Ruby.css'

export default function Ruby(props) {
  return (
    <div id="ruby">

      <img src="https://raw.githubusercontent.com/ajmonda/ruby-dungeon/master/client/src/assets/images/ruby.png" alt=""
        style={!props.hasRuby ? { opacity: '.5' } : { opacity: '100%' }}/>
      
    </div>
  )
}
