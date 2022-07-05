import React from "react"
import { css } from "@emotion/core"

const FormError = ({ errors, field, errorColor = "text-red-500" }) => (
  <span
    className={`${errorColor} text-xs italic absolute block mb-2`}
  >
    {errors[field] && errors[field]}
  </span>
)

export default FormError
