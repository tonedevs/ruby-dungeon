// import React, { useState } from "react";
// import { Route, useLocation } from "react-router-dom";
// import PlayerNavigation from "../../components/PlayerNavigation/PlayerNavigation";
// import RoomContent from "../../components/RoomContent/RoomContent";
// import "./Dungeon.css";

// import { rooms } from "../../utils/rooms";

// export default function Dungeon(props) {
//   const [southwestLock, setSouthwestLock] = useState(true);
//   const [southeastLock, setSoutheastLock] = useState(true);
//   const [northLock, setNorthLock] = useState(true);

//   const location = useLocation();
//   const currentRoom = location.pathname.slice(-1);

//   const handleCheckLock = (e) => {
//     if (
//       (currentRoom === "1" && southwestLock && e.target.id === "west") ||
//       (currentRoom === "1" && southeastLock && e.target.id === "east") ||
//       (currentRoom === "4" && northLock && e.target.id === "north")
//     ) {
//       e.preventDefault();
//       window.alert("It's locked from the other side.");
//     } else if (
//       (currentRoom === "6" && e.target.id === "east") ||
//       (currentRoom === "8" && e.target.id === "west")
//     ) {
//       e.preventDefault();
//       window.alert("The lock is broken. I can't open the door.");
//     } else if (currentRoom === "0" && southwestLock && e.target.id === "east") {
//       setSouthwestLock(false);
//       window.alert("You unlocked the gate.");
//     } else if (currentRoom === "2" && southeastLock && e.target.id === "west") {
//       setSoutheastLock(false);
//       window.alert("You unlocked the gate.");
//     } else if (currentRoom === "7" && northLock && e.target.id === "south") {
//       setNorthLock(false);
//       window.alert("You unlocked the gate.");
//     }
//   };

//   return (
//     <>
//       {rooms.map((room, i) => {
//         return (
//           <Route path={`/rooms/${i}`} key={i}>
//             <div id="player-nav">
//               <RoomContent
//                 currentRoom={currentRoom}
//                 roomName={room.name}
//                 roomBody={room.body}
//                 onClick={props.testClick}
//               />
//             </div>

//             <div id="directions">
//               <PlayerNavigation
//                 northLinkTo={`/rooms/${i + 3}`}
//                 eastLinkTo={`/rooms/${i + 1}`}
//                 southLinkTo={`/rooms/${i - 3}`}
//                 westLinkTo={`/rooms/${i - 1}`}
//                 onClick={handleCheckLock}
//               />
//             </div>
//           </Route>
//         );
//       })}
//     </>
//   );
// }
