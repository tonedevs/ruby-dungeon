import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom'
import {
  getAllEquipment,
  getAllUserEquipment,
  putUserEquipment,
  getOneUserEquipment,
  postUserEquipment
} from "../services/equipment";
import Dungeon from '../screens/Dungeon/Dungeon'
import Inventory from '../components/Inventory/Inventory'
import Equipment from '../components/Equipment/Equipment'

export default function ItemsContainer(props) {
  const [equips, setEquips] = useState([]);
  const [userEquips, setUserEquips] = useState([]);
  const [equippedValue, setEquippedValue] = useState(null);
  const [equipId, setEquipId] = useState("")

  // help
  const location = useLocation();
  const currentRoom = location.pathname.slice(-1);
  const currentUser = props.currentUser;
  const userId = 1;

  const checkEquipId = () => {
    if (currentRoom === "0") {
      setEquipId("1");
    } else if (currentRoom === "2") {
      setEquipId("2");
    } else if (currentRoom === "6") {
      setEquipId("3");
    } else if (currentRoom === "8") {
      setEquipId("4");
    }
    console.log(equipId)
  };

  const testClick = () => {
    console.log("clicky")
  }

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

  const createJoin = async () => {
    checkEquipId()
    const newJoin = await postUserEquipment(userId, data);
    const data = {
      user_id: userId,
      equip_id: equipId,
    };
    setUserEquips((prevState) => [...prevState, newJoin]);
  };

  return (
    <>
      <Dungeon
        onClick={testClick} />
      
      <Inventory
        equips={equips}
        userEquips={userEquips}
        handleEquip={handleEquip}
      />

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
