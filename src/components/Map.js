import React from "react"
import { css } from "@emotion/core"
import { encodeForGoogle } from "../utils"
const Map = ({address, maxWidth = "340px", height = "200px",  ...props}) => {
  let urlString = encodeForGoogle(address)
  return (
    <a
    css={css`
    background-image: url("https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDjlt_jp92OXdVP7Bl90c4dGKfWZxmRbaw&size=540x300&zoom=14&style=&markers=size:mid|${urlString}&style=feature:administrative|visibility:off&style=feature:all");
    background-position: center;
    background-size: cover;
    border-radius: 3px;
    display: inline-block;
    max-width: ${maxWidth};
    height: ${height};
    position: relative;
    width: 100%;
    `}
    href={`https://www.google.com/maps/place/${urlString}`}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
    />
  )
}

export default Map
