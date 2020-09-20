import React, { useState }from "react";
import "./Graphic.css";

export default function Graphic(props) {

  const buggy = props.buggy

  
  return (
    <>
      <div id="graphic">
        <img
          id="interior"
          src="https://raw.githubusercontent.com/ajmonda/ruby-dungeon/development/client/src/assets/images/dungeon-bg.gif"
        />
        <img id="bug"
          src={buggy ? "https://bogleech.com/scrapbook/beelzebub-shinmegami.gif" : "https://i.pinimg.com/originals/73/91/6d/73916db3017ab3592dac3eb3500b7aa1.gif"}
          style={
            buggy ? {
              width: '50%',
              marginLeft: '20%'
            } : {
              width: '10vw',
              marginLeft: '30%' }
          }/>
        
      </div>
      {/* <div id="figure">
        <img id="bug" src="https://bogleech.com/scrapbook/beelzebub-shinmegami.gif" />
        </div> */}
    </>
  );
}
