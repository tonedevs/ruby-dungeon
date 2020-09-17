import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import RoomContent from "../components/PlayerNavigation/RoomContent/RoomContent";
import ExploreOptions from "../components/PlayerNavigation/ExploreOptions/ExploreOptions";

import { rooms } from "../utils/rooms";

export default function MainContainer(props) {
const history = useHistory()
  const currentRoom = window.location.pathname.slice(-1)

  const [southwestLock, setSouthwestLock] = useState(true);
  const [southeastLock, setSoutheastLock] = useState(true);
  const [northLock, setNorthLock] = useState(true);

  // case?
  function checkLock(e) {
    history.push(`/rooms/${currentRoom}`)
    
    if (
      (currentRoom === "1" && southwestLock && e.target.id === "west") ||
      (currentRoom === "1" && southeastLock && e.target.id === "east") ||
      (currentRoom === "4" && northLock && e.target.id === "north")
    )
     {
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
  }
  return rooms.map((room, i) => {
    return (
      <Route path={`/rooms/${i}`}>
        <RoomContent roomName={room.name} roomBody={room.body} />
        <ExploreOptions
          northLinkTo={`/rooms/${i + 3}`}
          eastLinkTo={`/rooms/${i + 1}`}
          southLinkTo={`/rooms/${i - 3}`}
          westLinkTo={`/rooms/${i - 1}`}
          onClick={checkLock}
        />
      </Route>
    );
  });
}
