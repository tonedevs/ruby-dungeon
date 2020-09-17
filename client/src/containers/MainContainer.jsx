import React, { useState } from "react";
import { Route, useLocation } from "react-router-dom";
import Inventory from "../components/HUD/Inventory/Inventory";
import PlayerNavigation from "../components/PlayerNavigation/PlayerNavigation";
import RoomContent from "../components/RoomContent/RoomContent";

import { rooms } from "../utils/rooms";

export default function MainContainer(props) {
  // value of integer determines conditional rendering of room contents key
  const [roomCondition, setRoomCoundition] = 0

  // determines if a path is locked or unlocked
  const [southwestLock, setSouthwestLock] = useState(true);
  const [southeastLock, setSoutheastLock] = useState(true);
  const [northLock, setNorthLock] = useState(true);

  const location = useLocation();
  const currentRoom = location.pathname.slice(-1);

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
    <div>
      <Inventory />

      {rooms.map((room, i) => {
        // room map is visualized as a 3 x 3 grid
        // maps over the integers to determine directional path by value increment/decriment
        return (
          <Route path={`/rooms/${i}`}>
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
    </div>
  );
}
