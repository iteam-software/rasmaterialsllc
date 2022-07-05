import React from "react"
import Checkmark from "./Checkmark"
import { css } from "@emotion/core"
const Advantage = ({ advantage, i }) => {
  return (
    <li
      className="relative"
      key={i}
      style={{ "--i": i }}
      css={css`
        @media screen and (prefers-reduced-motion: no-preference) {
          animation: slide-right 0.3s both;
          animation-delay: calc(var(--i) * 0.2s);
          z-index: -10;
        }
      `}
    >
      <Checkmark />
      {advantage}
    </li>
  )
}

export default Advantage
