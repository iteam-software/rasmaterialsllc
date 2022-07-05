import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useContactInfo = () => {
  const data = useStaticQuery(graphql`
    query ContactInfo {
      allFile(filter: { sourceInstanceName: { eq: "contact" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              address
              email
              phone
              contact_blurb
              contact_callout
            }
          }
        }
      }
    }
  `)
  const contactInfo = data?.allFile?.nodes[0]?.childMarkdownRemark?.frontmatter
  return {
    contactInfo,
  }
}
