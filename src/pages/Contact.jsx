import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactMap from '../components/Contact/Contactmap'
import ContactSection from '../components/Contact/ContactForm'

const Contact = () => {
  return (
    <>
    <ContactHero title="Contact" breadcrumb="Contact"/>
    <ContactMap/>
    <ContactSection/>
    </>
  )
}

export default Contact