import React, { useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import {
  getAllEquipment,
  getAllUserEquipment,
  putUserEquipment,
  getOneUserEquipment,
  postUserEquipment,
} from "../services/equipment";
import PlayerNavigation from "../components/PlayerNavigation/PlayerNavigation";
import RoomContent from "../components/RoomContent/RoomContent";
import Ruby from "../components/Ruby/Ruby";
import Inventory from "../components/Inventory/Inventory";
import Equipment from "../components/Equipment/Equipment";
import Graphic from "../components/Graphic/Graphic";
import "../screens/Dungeon/Dungeon.css";
import { rooms } from "../utils/rooms";

export default function ItemsContainer(props) {
  const [equips, setEquips] = useState([]);
  const [userEquips, setUserEquips] = useState([]);
  const [equippedValue, setEquippedValue] = useState(null);

  const [southwestLock, setSouthwestLock] = useState(true);
  const [southeastLock, setSoutheastLock] = useState(true);
  const [northLock, setNorthLock] = useState(true);

  const [buggy, setBuggy] = useState(false);

  // help
  const currentUser = props.currentUser;
  const userId = 1;

  const location = useLocation();
  const currentRoom = location.pathname.slice(-1);

  const handleCheckLock = (e) => {
    if (
      (currentRoom === "1" && southwestLock && e.target.id === "west") ||
      (currentRoom === "1" && southeastLock && e.target.id === "east") ||
      (currentRoom === "4" && northLock && e.target.id === "north")
    ) {
      e.preventDefault();
      window.alert("It's locked from the other side.");
    } else if (
      (currentRoom === "6" && e.target.id === "east") ||
      (currentRoom === "8" && e.target.id === "west")
    ) {
      e.preventDefault();
      window.alert("The lock is broken. I can't open the door.");
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

  const checkEquipId = () => {
    let equipId;
    if (currentRoom === "0") {
      equipId = "1";
    } else if (currentRoom === "2") {
      equipId = "2";
    } else if (currentRoom === "6") {
      equipId = "3";
    } else if (currentRoom === "8") {
      equipId = "4";
    }
    return equipId;
  };

  const fightBug = () => {
    setBuggy(!buggy);
  };

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
    const equipId = checkEquipId();
    const data = {
      user_id: userId,
      equip_id: equipId,
    };
    const newJoin = await postUserEquipment(userId, data);
    setUserEquips((prevState) => [...prevState, newJoin]);
  };

  return (
    <>
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

      <Ruby />

      {rooms.map((room, i) => {
        return (
          <Route path={`/rooms/${i}`} key={i}>
            <div id="player-nav">
              <RoomContent
                currentRoom={currentRoom}
                roomName={room.name}
                roomBody={room.body}
                roomImage={room.image}
                createJoin={currentRoom === "4" ? fightBug : createJoin}
              />
            </div>

              <img id="guardian" src={room.image} />
            

            <div id="directions">
              <PlayerNavigation
                northLinkTo={`/rooms/${i + 3}`}
                eastLinkTo={`/rooms/${i + 1}`}
                southLinkTo={`/rooms/${i - 3}`}
                westLinkTo={`/rooms/${i - 1}`}
                onClick={handleCheckLock}
              />
            </div>

            <Graphic id={`image-${currentRoom}`} buggy={buggy} />
            <Ruby />


          </Route>
        );
      })}
    </>
  );
}
