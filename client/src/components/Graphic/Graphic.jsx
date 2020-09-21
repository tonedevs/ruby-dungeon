import React, { useState }from "react";
import "./Graphic.css";

import {rooms} from '../../utils/rooms'

export default function Graphic(props) {

  const buggy = props.buggy
  const id = props.id

  
  return (
    <>
      <div id="graphic">
        <img
          id="interior"
          src="https://i.imgur.com/6nbERt5.png"
        />

    
        <img id={id}
          src={buggy ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97bd7da9-f4b0-4d0b-9367-7be490d5d2cd/dhpb4e-d6d817d6-dcf3-4144-87e8-89596170e40e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTdiZDdkYTktZjRiMC00ZDBiLTkzNjctN2JlNDkwZDVkMmNkXC9kaHBiNGUtZDZkODE3ZDYtZGNmMy00MTQ0LTg3ZTgtODk1OTYxNzBlNDBlLmdpZiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.ppQg4DLKcYhXLK2ZABN6KbHyhogY2LPRHpdTJMXGGVI" : "https://i.pinimg.com/originals/73/91/6d/73916db3017ab3592dac3eb3500b7aa1.gif"}
          style={
            buggy ? {
              width: '85%',
              marginTop: '10%',
              // marginLeft: '20%'
            } : {
              width: '10vw',
              marginLeft: '30%' }
          } />
        
        
        
      </div>
    </>
  );
}
