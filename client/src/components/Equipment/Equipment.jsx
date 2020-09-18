import React from "react";
import './Equipment.css'

export default function Equipment(props) {
  const { userEquips, equips, handleUnequip } = props;

  return (
    <>
      <h4>Equipment</h4>

      {userEquips.map((userEquip) => {
        return equips.map((equip) => {
          if (userEquip.equip_id === equip.id && userEquip.is_equipped) {
            console.log(equip);
            return (
              <>
                <img
                  src={`${equip.image}`}
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <button onClick={handleUnequip} id={userEquip.id}>
                  Uneuip
                </button>
              </>
            );
          }
        });
      })}
    </>
  );
}
