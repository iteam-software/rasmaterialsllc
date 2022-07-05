import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useProducts = () => {
  const data = useStaticQuery(graphql`
  query Products {
    allFile(filter: { sourceInstanceName: { eq: "products" } }) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            description
            title
            photo_alt
            photo {
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
  const products = data?.allFile?.nodes
  return {
    products,
  }
}
