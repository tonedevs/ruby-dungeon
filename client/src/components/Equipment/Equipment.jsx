import React from "react";
import "./Equipment.css";

export default function Equipment(props) {
  const { userEquips, equips } = props;

  return (
    
    <div id="equipment">
      {equips.map((equip) => {
        return <img src={equip.image} id={`static-equip-${equip.id}`} />;
      })}

      {userEquips.map((userEquip, i) => {
        return equips.map((equip) => {
          if (userEquip.equip_id === equip.id && userEquip.is_equipped === true)
            return <img src={equip.image} id={`equip-${equip.id}`} />;
        });
      })}
    </div>

  );
}
