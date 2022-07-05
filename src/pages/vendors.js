import React from "react"
import { useVendors } from "../hooks/useVendors"
import FlipTile from "../components/FlipTile"
const Vendors = () => {
  const { vendors } = useVendors()
  const vendorTiles = vendors.map((vendor, i) => {
    const vendorInfo = vendor?.childMarkdownRemark?.frontmatter
    return (
      <FlipTile key={i} tileInfo={vendorInfo} height="208px" width="584px" />
    )
  })
  return (
    <div className="container mx-auto">
      <h1 className="font-montserrat font-bold uppercase text-4xl text-center my-5">
        Our Vendors
      </h1>
      <p className="text-center md:text-lg mx-3 my-5">
        RAS Materials is proud to work with our vendors. Check back often, we
        are always adding more vendors.
      </p>
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center">
        {vendorTiles}
      </div>
    </div>
  )
}

export default Vendors
