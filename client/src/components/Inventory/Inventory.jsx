import React from "react";

export default function Inventory(props) {
  
  const allEquipment = props.allEquipment;
  const unequipped = props.unequipped;

  return (
    <>
      <h3>Inventory</h3>
      {unequipped.map((userEquipment) => {
        return allEquipment.map((equipment) => {
          if (userEquipment.equip_id === equipment.id) {
            return (
              <>
                <img
                  src={`${equipment.image}`}
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <button onClick={props.onClick} id={userEquipment.id}>
                  Equip
                </button>
              </>
            );
          }
        });
      })}
    </>
  );
}