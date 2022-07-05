import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useSplashInfo = () => {
  const data = useStaticQuery(graphql`
  query Splash {
    allFile(filter: {sourceInstanceName: {eq: "splash"}}) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            splash_tagline
            splash_body
            splash_advantages
            splash_photo_alt
            splash_photo {
              id
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
  const splashInfo = data?.allFile?.nodes[0]?.childMarkdownRemark?.frontmatter
  return {
    splashInfo,
  }
}