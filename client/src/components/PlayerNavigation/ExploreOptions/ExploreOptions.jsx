import React from 'react'
import { Link } from 'react-router-dom'

export default function ExploreOptions(props) {
  return (
    <div>
      <Link to={props.northLinkTo}><button id="north" onClick={props.onClick}>North</button></Link>
      <Link to={props.southLinkTo}><button id="south" onClick={props.onClick}>South</button></Link>
      <Link to={props.eastLinkTo}><button id="east" onClick={props.onClick}>East</button></Link>
      <Link to={props.westLinkTo}><button id="west" onClick={props.onClick}>West</button></Link>
    </div>
  )
}