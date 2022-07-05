import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { useAffiliates } from "../hooks/useAffiliates"
const EndorsementBanner = () => {
  const { affiliates } = useAffiliates()
  const logos = affiliates
    .filter(
      el =>
        el.childMarkdownRemark.frontmatter.affiliate_name !== "dummy_content"
    )
    .map(el => {
      return (
        <Img
          fixed={
            el.childMarkdownRemark?.frontmatter?.affiliate_logo?.childImageSharp
              ?.fixed
          }
          alt={el?.childMarkdownRemark?.frontmatter?.affiliate_name}
        />
      )
    })
  return (
    <>
      {logos.length >= 1 && (
        <div className="md:my-20 lg:mx-16 uppercase bg-offwhite flex flex-col mx-auto md:flex-row md:justify-around font-montserrat font-extrabold p-2">
          <div className="my-5 text-md md:w-2/6 flex justify-center md:block">
            Trusted By Top Industry Organizations
          </div>
          <div className="text-3xl flex justify-center">{logos}</div>
        </div>
      )}
    </>
  )
}

export default EndorsementBanner
