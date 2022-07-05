import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useAffiliates = () => {
  const data = useStaticQuery(graphql`
    query Affiliates {
      allFile(filter: { sourceInstanceName: { eq: "affiliates" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              affiliate_name
              affiliate_logo {
                id
                childImageSharp {
                  fixed(width: 450) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const affiliates = data?.allFile?.nodes
  return {
    affiliates,
  }
}
