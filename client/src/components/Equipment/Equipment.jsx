import React from "react";
import "./Equipment.css";

export default function Equipment(props) {
  const { userEquips, equips, handleUnequip } = props;

  return (
    <>
      {equips.map((equip) => {
        return <img src={equip.image} alt={equip.name} />;
      })}
    </>
  );
}
