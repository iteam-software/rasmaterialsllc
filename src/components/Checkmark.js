import React from 'react'
import { css } from "@emotion/core"
const Checkmark = () => {
    return (
        <span
        className="mr-3"
        css={css`
          color: #76F935;
          font-weight: 700;
        `}
      >
        ✓
      </span>
    )
}

export default Checkmark
