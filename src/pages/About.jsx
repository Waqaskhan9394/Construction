import React from 'react'
import AboutHero from '../components/Abouts/AboutsHero'
import AboutSection from '../components/Home/About'
import TestimonialSection from '../components/Home/Testimonial'
import TeamSection from '../components/Home/Team'

const About = () => {
  return (
    <>
    <AboutHero title="ABOUT US"breadcrumb="Product"/>
    <AboutSection/>
    <TestimonialSection/>
    <TeamSection/>
    
    </>
  )
}

export default About