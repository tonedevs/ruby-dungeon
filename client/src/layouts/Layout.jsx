import React from 'react'
import './Layout.css'

import Banner from '../components/Banner/Banner.jsx'

export default function Layout(props) {
  return (

    <>
      <main>
        <Banner />
        {props.children}
      </main>
    </>
  )
}