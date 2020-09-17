import React from 'react'
import Banner from '../components/Banner/Banner.jsx'

export default function Layout(props) {
  return (
    <>
      <Banner
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <main>
        {props.children}
      </main>
    </>
  )
}