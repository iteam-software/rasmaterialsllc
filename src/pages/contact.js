import React from "react"
import Map from "../components/Map"
import ContactForm from "../components/ContactForm"
import { useContactInfo } from "../hooks/useContactInfo"
const Contact = () => {
  const contactInfo = useContactInfo()
  return (
    <>
      <div className="text-center pt-20">
        <h1 className="font-montserrat text-3xl lg:text-5xl font-bold uppercase text-center">
          Contact
        </h1>
        <p className="mx-5">
          {contactInfo.contact_blurb}
          <span className="font-extrabold block">
            {contactInfo.contact_callout}
          </span>
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly my-10">
        {/* <Map className="mx-auto md:mx-0" maxWidth="550px" height="350px" address={address} /> */}
        <ContactForm />
      </div>
    </>
  )
}

export default Contact
