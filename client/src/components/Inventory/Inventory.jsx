import React from "react";
import './Inventory.css'

export default function ItemList(props) {
  const { userEquips, equips, handleEquip } = props;

  return (
    <div id="inventory">
  <h3>Inventory</h3>

      {userEquips.map((userEquip) => {
        return equips.map((equip) => {
          if (userEquip.equip_id === equip.id && !userEquip.is_equipped) {
            return (
              <>
                <img
                  alt={`${equip.name}`}
                  src={`${equip.image}`}
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <button onClick={handleEquip} id={userEquip.id}>
                  Equip
                </button>
              </>
            );
          }
        });
      })}
    </div>
  );
}
