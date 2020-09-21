import React from "react";
import "./Inventory.css";

export default function ItemList(props) {
  const { userEquips, equips, handleEquip, handleUnequip } = props;

  return (
    <>
      <div id="inventory">
        <h3>Inventory</h3>
        {userEquips.map((userEquip, i) => {
          return equips.map((equip) => {
            if (userEquip.equip_id === equip.id) {
              return (
                <div id={`inventory-${i}`}>
                  <img
                    alt={`${equip.name}`}
                    src={`${equip.image}`}
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  />

                  <button
                    onClick={handleEquip}
                    id={userEquip.id}
                    style={
                      userEquip.is_equipped === true
                        ? { display: "none" }
                        : { display: "revert" }
                    }>
                    Equip
                  </button>
                  <button
                    onClick={handleUnequip}
                    id={userEquip.id}
                    style={
                      userEquip.is_equipped === true
                        ? { display: "revert" }
                        : { display: "none" }
                    }
                  >
                    Unquip
                  </button>
                  </div>
            
              );
            }
          });
        })}
      </div>
    </>
  );
}
