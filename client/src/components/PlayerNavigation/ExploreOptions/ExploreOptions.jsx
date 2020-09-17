import React from 'react'
import { Link } from 'react-router-dom'

export default function ExploreOptions(props) {
  return (
    <div>
      <Link to={props.northLinkTo}><button>North</button></Link>
      <Link to={props.southLinkTo}><button>South</button></Link>
      <Link to={props.eastLinkTo}><button>East</button></Link>
      <Link to={props.westLinkTo}><button>West</button></Link>
    </div>
  )
}
