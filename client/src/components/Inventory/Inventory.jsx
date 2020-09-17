import React from 'react'

export default function Inventory(props) {

  const inventory = props.inventory
  return (
    <>
      <h3>Inventory</h3>

      {inventory.map((item) => {
        return (
          <>
            <img src={`${item.image}`}
          style={{
            width: '50px',
            height: '50px'
          }} />
            <button onClick={props.equip}>Equip</button>
            <button>Examine</button>
          </>
        )
      })}
      
    </>
  )
}