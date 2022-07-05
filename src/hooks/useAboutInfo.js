import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useAboutInfo = () => {
  const data = useStaticQuery(graphql`
    query About {
      allFile(filter: { sourceInstanceName: { eq: "about" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              about_title
              about_body
              about_photo_alt
              about_photo {
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
  const aboutInfo = data?.allFile?.nodes[0]?.childMarkdownRemark?.frontmatter
  return {
    aboutInfo,
  }
}

