import React from 'react'
import './Layout.css'

import Header from '../components/Header/Header.jsx'

export default function Layout(props) {
  return (

    <>
      <main>
        <Header />
        {props.children}
      </main>
    </>
  )
}