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
          src={buggy ? "https://bogleech.com/scrapbook/beelzebub-shinmegami.gif" : "https://i.pinimg.com/originals/73/91/6d/73916db3017ab3592dac3eb3500b7aa1.gif"}
          style={
            buggy ? {
              width: '58%',
              marginLeft: '20%'
            } : {
              width: '10vw',
              marginLeft: '30%' }
          } />
      </div>
    </>
  );
}
