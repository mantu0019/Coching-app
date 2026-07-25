import React from 'react'
import Heading from './Heading'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'
import QuickContact from './QuickContact'
import Faq from './Faq'

const Contact = () => {
  return (
    <div>
        <Heading/>
        <ContactCard/>
        <ContactForm/>
        <QuickContact/>
        <Faq/>
    </div>
  )
}

export default Contact