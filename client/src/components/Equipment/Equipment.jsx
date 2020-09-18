import React from "react";

export default function Equipment(props) {

  const allEquipment = props.allEquipment;
  const equipped = props.equipped;

  return (
    <>
      <h3>Equipment</h3>
      {equipped.map((userEquipment) => {
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
                  Unequip
                </button>
              </>
            );
          }
        });
      })}
    </>
  );
}

