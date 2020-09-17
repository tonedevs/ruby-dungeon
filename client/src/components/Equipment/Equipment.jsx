import React from "react";

export default function Equipment(props) {

  const equipment = props.equipment

  return (
    <>
      <h3>Equipment</h3>

      {equipment.map((equip) => {
        return <img src={`${equip.image}`}
          style={{
            width: '50px',
            height: '50px'}} />
      })}
      
    </>
  )
}
