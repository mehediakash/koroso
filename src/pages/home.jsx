import React from 'react'
import Banner from '../components/Banner/Banner'
import MissionVision from '../components/MissionVision/MissionVision'
import Programs from '../components/Programs/Programs'
import CounterSection from '../components/CounterSection/CounterSection'
import PartnersSection from '../components/PartnersSection/PartnersSection'
import EventsSection from '../components/EventsSection/EventsSection'
import FAQSection from '../components/FAQSection/FAQSection'
import JoinSection from '../components/JoinSection/JoinSection'
import TeamMembers from '../components/TeamMembers/TeamMembers'
import { Helmet } from 'react-helmet'

const home = () => {
  return (
    <>
     <Helmet>
        <title>OTIS | Home</title>
        <meta
          name="description"
          content="OTIS connects students, professionals, and organizations through mentorship, events, and community programs."
        />
        <meta
          name="keywords"
          content="OTIS, Oromo Tech, mentorship, events, community, summit, hackathon"
        />
      </Helmet>
    <Banner/>
    <MissionVision/>
    <Programs/>
    <TeamMembers/>
    <CounterSection/>
    <PartnersSection/>
    <EventsSection/>
    <FAQSection/>
    <JoinSection/>
    </>
  )
}

export default home