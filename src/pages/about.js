import React from "react"
import { useAboutInfo } from "../hooks/useAboutInfo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const { aboutInfo } = useAboutInfo();
  return (
    <div className="py-20">
      <h1 className="font-montserrat text-3xl lg:text-5xl font-bold uppercase text-center">
        {aboutInfo.about_title}
      </h1>
      <div className="flex flex-col md:flex-row container mx-auto py-5 lg:py-10 justify-between">
        <div className="mt-5 md:mt-0 mx-10 text-md lg:text-xl w-5/6">
          {aboutInfo.about_body}
        </div>
        <div className="mx-5 mt-10 lg:w-full">
          <Img fluid={aboutInfo?.about_photo?.childImageSharp?.fluid} alt={aboutInfo?.about_photo_alt}/>
        </div>
      </div>
    </div>
  )
}

export default About
