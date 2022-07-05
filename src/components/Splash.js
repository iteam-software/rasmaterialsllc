import React from "react"
import Img from "gatsby-image"
import QuoteForm from "./QuoteForm"
import Callout from "./Callout"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import Advantage from "./Advantage"
import { useContactInfo } from "../hooks/useContactInfo"
import { useSplashInfo } from "../hooks/useSplashInfo"
const Splash = () => {
  const { contactInfo } = useContactInfo()
  const { splashInfo } = useSplashInfo()
  const advantages = splashInfo.splash_advantages.map((advantage, i) => (
    <Advantage key={i} i={i} advantage={advantage} />
  ))
  return (
    <>
      <div
        className="bg-primary-red flex flex-col md:block relative overflow-hidden font-montserrat pb-10"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-primary-red relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="#9c0328"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <DesktopNav />
            <MobileNav />
            <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="leading-10 uppercase text-white font-extrabold sm:leading-none md:text-5xl">
                  {splashInfo.splash_tagline}
                </h2>
                <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:mr-32">
                  {splashInfo.splash_body}
                </p>
                <div className="ml-0 md:ml-5 text-white mt-5 sm:mt-8 flex justify-center lg:justify-start">
                  {/* Advantages list here */}
                  <ul>{advantages}</ul>
                </div>
              </div>
            </main>
            <QuoteForm />
          </div>
        </div>
        <div className="hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Img fluid={splashInfo?.splash_photo?.childImageSharp?.fluid} alt={splashInfo.splash_photo_alt} />
        </div>
      </div>
      <Callout phone={contactInfo.phone} />
    </>
  )
}
export default Splash
