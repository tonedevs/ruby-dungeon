import React from 'react'

export default function Inventory(props) {

  const equips = props.equips
  return (
    <>
      <h3>Inventory</h3>

      {equips.map((equip) => {
        return <img src={`${equip.image}`}
          style={{
            width: '50px',
            height: '50px'}} />
      })}
      
    </>
  )
}