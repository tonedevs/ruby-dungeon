import React from "react";

export default function ItemList(props) {
  const { userEquips, equips, handleEquip } = props;

  return (
    <>


      {userEquips.map((userEquip) => {
        return equips.map((equip) => {
          if (userEquip.equip_id === equip.id && !userEquip.is_equipped) {
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
                <button onClick={handleEquip} id={userEquip.id}>
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
