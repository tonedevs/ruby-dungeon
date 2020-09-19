import React, { useState, useEffect } from "react";
import {
  getAllEquipment,
  getAllUserEquipment,
  putUserEquipment,
  getOneUserEquipment,
} from "../services/equipment";
import Inventory from '../components/Inventory/Inventory'
import Equipment from '../components/Equipment/Equipment'

export default function ItemsContainer(props) {
  const [equips, setEquips] = useState([]);
  const [userEquips, setUserEquips] = useState([]);
  const [equippedValue, setEquippedValue] = useState(null);

  const currentUser = props.currentUser;
  const userId = 1;

  useEffect(() => {
    const fetchEquipment = async () => {
      const equipData = await getAllEquipment();
      setEquips(equipData);
    };
    fetchEquipment();
  }, []);

  useEffect(() => {
    const fetchUserEquipment = async () => {
      const userEquipData = await getAllUserEquipment(userId);
      setUserEquips(userEquipData);
    };
    fetchUserEquipment();
  }, []);

  const handleEquip = async (e) => {
    const id = e.target.id;
    const oneUserEquip = await getOneUserEquipment(userId, id);

    setEquippedValue(oneUserEquip);
    const data = {
      ...equippedValue,
      is_equipped: true,
    };
    await putUserEquipment(id, userId, data);
    setEquippedValue(null);
  };

  const handleUnequip = async (e) => {
    const id = e.target.id;
    const oneUserEquip = await getOneUserEquipment(userId, id);

    setEquippedValue(oneUserEquip);
    const data = {
      ...equippedValue,
      is_equipped: false,
    };
    await putUserEquipment(id, userId, data);
    setEquippedValue(null);
  };

  return (
    <>
      <div id="inventory">
      <Inventory
        equips={equips}
        userEquips={userEquips}
        handleEquip={handleEquip}
      />
      </div>
      <div id="equipment">
      <Equipment
        equips={equips}
        userEquips={userEquips}
        handleUnequip={handleUnequip}
      />
      </div>
    
      </>
  )
}
