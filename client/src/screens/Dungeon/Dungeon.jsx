import React, { useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import PlayerNavigation from "../../components/PlayerNavigation/PlayerNavigation";
import RoomContent from "../../components/RoomContent/RoomContent";
import Inventory from "../../components/Inventory/Inventory";
import Equipment from "../../components/Equipment/Equipment";

import { getAllEquipment, getAllUserEquipment } from "../../services/equipment";
import { rooms } from "../../utils/rooms";

export default function Dungeon(props) {
  const [equips, setEquips] = useState([]);
  const [userEquips, setUserEquips] = useState([]);

  const currentUser = props.currentUser;
  const location = useLocation();
  const currentRoom = location.pathname.slice(-1);

  // ASK FOR HELP: can't access 'id' of null on currentUser
  // console.log(currentUser.id)

  useEffect(() => {
    const fetchEquipment = async () => {
      const equipData = await getAllEquipment();
      setEquips(equipData);
    };
    fetchEquipment();
  }, []);

  useEffect(() => {
    const fetchUserEquipment = async () => {
      const userEquipData = await getAllUserEquipment(1);
      setUserEquips(userEquipData);
    };
    fetchUserEquipment();
  }, []);

  // compares user equipment table with equipment table
  // renders equipment associated with player
  const userEquipment = [];
  const userInventory = [];
  userEquips.map((userEquip) => {
    equips.map((equip) => {
      if (userEquip.equip_id === equip.id && userEquip.is_equipped === false) {
        userInventory.push(equip);
      } else if (
        userEquip.equip_id === equip.id &&
        userEquip.is_equipped === true
      ) {
        userEquipment.push(equip);
      }
    });
  });

  // determines if a path is locked or unlocked
  const [southwestLock, setSouthwestLock] = useState(true);
  const [southeastLock, setSoutheastLock] = useState(true);
  const [northLock, setNorthLock] = useState(true);

  // check if the attempted path is locked
  // unlock the path if conditions are met
  const handleClick = (e) => {
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
        // room map is visualized as a 3 x 3 grid
        // maps over the integers to determine directional path by value increment/decriment
        return (
          <Route path={`/rooms/${i}`} key={i}>
            <RoomContent roomName={room.name} roomBody={room.body} />
            <PlayerNavigation
              northLinkTo={`/rooms/${i + 3}`}
              eastLinkTo={`/rooms/${i + 1}`}
              southLinkTo={`/rooms/${i - 3}`}
              westLinkTo={`/rooms/${i - 1}`}
              onClick={handleClick}
            />
          </Route>
        );
      })}
      <Inventory inventory={userInventory} />
      <Equipment equipment={userEquipment} />
    </>
  );
}
