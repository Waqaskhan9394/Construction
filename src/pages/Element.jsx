import React from 'react'
import ElementHero from '../components/Element/ElementHero'
import Newsletter from '../components/Element/NewsLetter'
import SampleButtons from '../components/Element/Buttons'

import Elements from '../components/Element/ElementContent'

import FlagTable from '../components/Element/Elementflag'

import ElementGallery from '../components/Element/ElemenGallery'
import ElementsLists from '../components/Element/ElementList'

import ElementListstwo from '../components/Element/ElementListSection'

const Element = () => {
  return (
   <>
   <ElementHero title="Our element" breadcrumb="element"/>
   <Newsletter/>
   <SampleButtons/>
   
   <Elements/>
   <FlagTable/>
   <ElementGallery/>
   <ElementsLists/>
  
  <ElementListstwo/>
   </>
  )
}

export default Element