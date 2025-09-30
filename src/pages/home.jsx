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
import DynamicSEO from '../components/DynamicSEO'

const home = () => {
  const jsonLdData = {
    "@context": "https://otis.org",
    "@type": "Organization",
    "name": "Oromo Tech & Innovation Society",
    "url": "https://otis.org",
    "logo": "https://i.ibb.co.com/0jNkxs2P/logo.png"
  }
  return (
    <>
      <DynamicSEO
        title="Oromo Tech & Innovation Society – Home"
        description="Oromo Tech & Innovation Society promotes innovation, leadership and entrepreneurship through sustainable programs."
        keywords="Oromo Tech, Innovation, Leadership, Entrepreneurship, OTIS"
        image="https://i.ibb.co.com/0jNkxs2P/logo.png"
        url="https://otis.org"
      />
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