import * as Yup from "yup"

import { phoneRegExp } from "../utils"

const QuoteFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is Required!"),
  email: Yup.string()
    .email("Enter a Valid Email!")
    .required("Email is Required!"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required!"),
  message: Yup.string().required("Message is Required!"),
})

export default QuoteFormValidationSchema
