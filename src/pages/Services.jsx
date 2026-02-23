import React from 'react'
import ServicesSection from '../components/Home/Services'
import ServicesHero from '../components/Services/ServicesHero'

const Services = () => {
  return (
    <>
    <ServicesHero title="Services"breadcrumb="services" />
    <ServicesSection/>
    </>
  )
}

export default Services
