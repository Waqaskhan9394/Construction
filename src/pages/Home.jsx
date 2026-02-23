import React from 'react'
import Hero from '../components/Home/Hero'



import ContactSection from '../components/Home/Contact'
import TeamSection from '../components/Home/Team'
import Testimonial from '../components/Home/Testimonial'
import BlogSection from '../components/Home/OurBlog'
import AboutSection from '../components/Home/About'
import ProjectSection from '../components/Home/Project'
import ServicesSection from '../components/Home/Services'



export const Home = () => {
  return (
    <>
    <Hero/>
    <ServicesSection/>
   <AboutSection/>
  <ProjectSection/>
    <ContactSection/>
    <TeamSection/>
    <Testimonial/>
    <BlogSection/>
  

    </>
  )
}
