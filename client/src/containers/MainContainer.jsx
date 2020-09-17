import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import RoomContent from '../components/PlayerNavigation/RoomContent/RoomContent'
import ExploreOptions from '../components/PlayerNavigation/ExploreOptions/ExploreOptions'

import { rooms } from '../utils/rooms'

export default function MainContainer(props) {
  const [southwestLock, setSouthwestLock] = useState(true)
  const [southeastLock, setSoutheastLock] = useState(true)
  const [NorthwestLock, setNorthwestLock] = useState(true)
  const [NortheastLock, setNortheastLock] = useState(true)

  return (
        rooms.map((room, i) => {
          return (
            <Route path={`/rooms/${i}`}>
              <RoomContent
                roomName={room.name}
                roomBody={room.body} />
              <ExploreOptions
                northLinkTo={`/rooms/${i + 3}`}
                eastLinkTo={`/rooms/${i + 1}`}
                southLinkTo={`/rooms/${i - 3}`}
                westLinkTo={`/rooms/${i - 1}`}
              />
            </Route>
          );
        })
)}