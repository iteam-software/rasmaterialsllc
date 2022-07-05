import React from "react"
import { css } from "@emotion/core"
const Callout = ({ phone }) => {
  return (
    <div
      className="inline-flex p-5 items-center uppercase font-extrabold text-3xl text-yellow-500 justify-start md:pl-56 bg-deep-purple-400"
      css={css`
        width: 100%;
        min-height: 94px;
        background-color: #6b0624;
      `}
    >
      <a
        css={css`
          &:hover {
            filter: brightness(1.15);
            transition: filter 0.25s ease-in;
            animation: wiggle .5s 1;
          }
        `}
        href={`tel:1${phone}`}
      >
        Call us now at {phone}
      </a>
    </div>
  )
}

export default Callout
