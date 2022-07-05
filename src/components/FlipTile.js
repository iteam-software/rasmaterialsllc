import React from "react"
import { css } from "@emotion/core"
const FlipTile = ({ tileInfo, height, width }) => {
  const { title, photo, description, website, name, photo_alt } = tileInfo
  return (
    <div
      className="flip-card my-5"
      css={css`
        width: 320px;
        height: 208px;
        perspective: 1000px;
        &:hover {
          .flip-card-inner {
            transform: rotateY(180deg);
          }
        }
        @media (min-width: 768px) {
          width: ${width};
          height: ${height};
        }
      `}
    >
      <div
        className="flip-card-inner"
        css={css`
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        `}
      >
        <div
          name="flip-card-front"
          className="flex items-center justify-center text-gray-300 uppercase font-bold"
          css={css`
            background-color: #bbb;
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0) 0%,
                #801c2e 100%
              ),
              url("${photo?.childImageSharp?.fluid?.src || '/assets/placeholder.png'}") no-repeat;
            background-size: contain;
            background-position: center;
            perspective: 1000px;
          `}
        >
          {title}
        </div>
        <div
          className="flip-card-back flex flex-col justify-center uppercase"
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background-color: #1c1717;
            color: white;
            transform: rotateY(180deg);
          `}
        >
          <h1 className="font-bold">{title || name}</h1>
          <p>{description || <a href={`https://${website}`} className="underline hover:font-bold" target="_blank" rel="noopener noreferrer">{website}</a>}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipTile
