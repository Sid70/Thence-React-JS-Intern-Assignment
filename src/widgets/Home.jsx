import React from 'react'
import Navbar from '../components/mainpage/Navbar'
import Carosel from '../components/mainpage/Carosel'
import Question from '../components/mainpage/Question'
import Footoor from '../components/mainpage/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Carosel />
      <Question/>
      <Footoor/>
    </>
  )
}
