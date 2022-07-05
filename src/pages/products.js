import React from "react"
import { useProducts } from "../hooks/useProducts"
import FlipTile from "../components/FlipTile"
const Products = () => {
  const { products } = useProducts()
  const productTiles = products.map((product, i) => {
    const productInfo = product?.childMarkdownRemark?.frontmatter
    return <FlipTile key={i} tileInfo={productInfo} height="208px" width="320px"/>
  })
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="font-montserrat font-bold uppercase text-4xl my-10">
          Our Products
        </h1>
        <p className="italic text-2xl">
          THE QUALITY & REPUTATION TO GET THE JOB DONE RIGHT.
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center space-x-1">
        {productTiles}
      </div>
    </div>
  )
}

export default Products
