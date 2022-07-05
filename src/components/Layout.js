import React from "react"
import Splash from "./Splash"
import Footer from "./Footer"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { pageRegex } from "../utils"
import SEO from "./SEO"
import { SettingsProvider } from "../context/settings"
import { css } from "@emotion/core"
import { startCase } from 'lodash'
const AlternateNav = () => (
  <div className="container mx-auto">
    <DesktopNav />
    <MobileNav />
  </div>
)

const Layout = ({ children, location }) => {
  let pathname = location?.pathname
  let isAboutOrContact = pageRegex.test(pathname)
  let pageName = startCase(pathname.replace('/', '')) || 'Home'
  const pageTitle = 'RAS Materials - ' + pageName;
  return (
    <div
      className="font-open-sans"
      css={css`
        animation: fadeInAnimation ease 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      `}
    >
      <SettingsProvider location={location} pathname={pathname}>
        <SEO
          pageTitle={pageTitle}
          canonical_url={pathname}
          description="Providing concrete accessories for the construction industry throughout New Mexico."
        />
        {!isAboutOrContact ? <Splash /> : <AlternateNav />}
        {children}
        <Footer />
      </SettingsProvider>
    </div>
  )
}

export default Layout
