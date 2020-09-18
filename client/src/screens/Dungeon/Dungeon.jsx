import React, { useState, useEffect, Component } from "react";
import { Route, useLocation } from "react-router-dom";
import PlayerNavigation from "../../components/PlayerNavigation/PlayerNavigation";
import RoomContent from "../../components/RoomContent/RoomContent";
import Inventory from "../../components/Inventory/Inventory";
import Equipment from "../../components/Equipment/Equipment";

import { getAllEquipment, getAllUserEquipment, putUserEquipment, getOneUserEquipment} from "../../services/equipment";
import { rooms } from "../../utils/rooms";

export default function Dungeon(props) {
  const [equips, setEquips] = useState([]);
  const [userEquips, setUserEquips] = useState([]);
  const [equippedValue, setEquippedValue] = useState(null)
  const [unequippedArray, setUnequippedArray] = useState([])
  

  const [southwestLock, setSouthwestLock] = useState(true);
  const [southeastLock, setSoutheastLock] = useState(true);
  const [northLock, setNorthLock] = useState(true);

  const currentUser = props.currentUser;
  const location = useLocation();
  const currentRoom = location.pathname.slice(-1);

  // ASK FOR HELP: can't access 'id' of null on currentUser
  // console.log(currentUser.id)

  const userId = 1

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

  const handleEquipUnequip = async (e) => {

    const id = e.target.id
    const oneUserEquip = await getOneUserEquipment(userId, id)
    
    setEquippedValue(oneUserEquip)
    const data = {
        ...equippedValue,
        is_equipped: true
    }
    await putUserEquipment(id, userId, data)
    setEquippedValue(null)
  }


  const unequipped = [];
  const equipped = [];
  
  userEquips.map((userEquip) => {
    equips.map((equip) => {
      if (userEquip.equip_id === equip.id && userEquip.is_equipped === false) {
        unequipped.push(userEquip)
      } else if (
        userEquip.equip_id === equip.id &&
        userEquip.is_equipped === true
      ) {
        equipped.push(userEquip);
      }
    });
  });

  const handleCheckLock = (e) => {
    if (
      (currentRoom === "1" && southwestLock && e.target.id === "west") ||
      (currentRoom === "1" && southeastLock && e.target.id === "east") ||
      (currentRoom === "4" && northLock && e.target.id === "north")
    ) {
      e.preventDefault();
      window.alert("It's locked from the other side.");
    } else if (currentRoom === "0" && southwestLock && e.target.id === "east") {
      setSouthwestLock(false);
      window.alert("You unlocked the gate.");
    } else if (currentRoom === "2" && southeastLock && e.target.id === "west") {
      setSoutheastLock(false);
      window.alert("You unlocked the gate.");
    } else if (currentRoom === "7" && northLock && e.target.id === "south") {
      setNorthLock(false);
      window.alert("You unlocked the gate.");
    }
  };

  return (
    <>
      {rooms.map((room, i) => {
        return (
          <Route path={`/rooms/${i}`} key={i}>
            <RoomContent roomName={room.name} roomBody={room.body} />
            <PlayerNavigation
              northLinkTo={`/rooms/${i + 3}`}
              eastLinkTo={`/rooms/${i + 1}`}
              southLinkTo={`/rooms/${i - 3}`}
              westLinkTo={`/rooms/${i - 1}`}
              onClick={handleCheckLock}
            />
          </Route>
        );
      })}
      <Inventory unequipped={unequipped}
        allEquipment={equips}
        onClick={handleEquipUnequip} />
      <Equipment equipped={equipped}
        allEquipment={equips}
        onClick={handleEquipUnequip} />
    </>
  );
}