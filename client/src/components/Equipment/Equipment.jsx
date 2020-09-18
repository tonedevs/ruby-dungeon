import React from "react";
import './Equipment.css'

export default function Equipment(props) {
  const { userEquips, equips, handleUnequip } = props;

  return (
   <div id="equip-list">
      {
        equips.map((equip) => {
        return <img src={equip.image} />
      })
      }
  </div>
   
  )
}
