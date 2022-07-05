import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useVendors = () => {
  const data = useStaticQuery(graphql`
    query Vendors {
      allFile(filter: { sourceInstanceName: { eq: "vendors" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              name
              website
              photo_alt
              photo {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const vendors = data?.allFile?.nodes
  return {
    vendors,
  }
}
