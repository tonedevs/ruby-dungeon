import React from 'react'
import Banner from '../components/Banner/Banner.jsx'

export default function Layout(props) {
  return (
    <>
      <Banner />
      <main>
        {props.children}
      </main>
    </>
  )
}