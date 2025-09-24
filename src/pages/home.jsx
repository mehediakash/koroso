import React from 'react'
import Banner from '../components/Banner/Banner'
import MissionVision from '../components/MissionVision/MissionVision'
import Programs from '../components/Programs/Programs'
import CounterSection from '../components/CounterSection/CounterSection'

const home = () => {
  return (
    <>
    <Banner/>
    <MissionVision/>
    <Programs/>
    <CounterSection/>
    </>
  )
}

export default home