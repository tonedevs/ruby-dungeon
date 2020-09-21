import React from "react";
import "./Equipment.css";

export default function Equipment(props) {
  const { userEquips, equips, handleUnequip } = props;

  return (
    <>
      
      
      {/* {equips.map((equip) => {

        return userEquips.map((userEquip) => {

          if (userEquip.equip_id === equip.id) {

            return (
              <img
                src={equip.image}
                style={
                  userEquip.is_equipped === true
                    ? { opacity: "100%" }
                    : { opacity: "30%" }
                }
              />
            );
          }
        });
      })} */}
    </>
  );
}
