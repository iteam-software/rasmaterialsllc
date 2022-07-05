import React from "react"
import { css } from "@emotion/core"
import { Formik, Field } from "formik"
import { useSettings } from "../context/settings"
import QuoteFormValidationSchema from "../schema/QuoteFormValidationSchema"
import { handleNetlifyFormSubmit } from "../utils/index"
import FormError from "./FormError"
import SuccessToast from "./SuccessToast"
const Form = () => {
  const { hash, pathname, location } = useSettings()
  let formSubmitted = hash.includes("#success")
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={QuoteFormValidationSchema}
      onSubmit={handleNetlifyFormSubmit}
    >
      {props => (
        <form
          id="form"
          name="quote"
          onReset={props.handleReset}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="flex px-8 pt-8 flex-col w-72 lg:absolute lg:right-0 relative bg-quaternary-red m-5 lg:m-0"
          css={css`
          @media (min-width: 1024px) {
            top: 13%;
            transform: translateX(75%);
            }
            @media (min-width: 1250px) {
              top: 20%;
            }
          `}
        >
        <input type="hidden" name="form-name" value="quote" />
          <h1 className="text-center uppercase text-white font-extrabold text-2xl">
            Get a FREE quote
          </h1>
          <label className="my-3" htmlFor="name">
            <Field
              disabled={formSubmitted}
              className="placeholder-white text-white bg-quinary-red font-semibold pl-3 py-2 w-full"
              type="text"
              name="name"
              placeholder="Full Name *"
            />
            <FormError
              errors={props.errors}
              errorColor="text-white"
              field="name"
            />
          </label>
          <label className="my-3" htmlFor="email">
            <Field
              disabled={formSubmitted}
              className="placeholder-white text-white bg-quinary-red font-semibold pl-3 py-2 w-full"
              type="text"
              name="email"
              placeholder="Email *"
            />
            <FormError
              errors={props.errors}
              errorColor="text-white"
              field="email"
            />
          </label>
          <label className="my-3" htmlFor="phone">
            <Field
              disabled={formSubmitted}
              className="placeholder-white text-white bg-quinary-red font-semibold pl-3 py-2 w-full"
              type="text"
              name="phone"
              placeholder="Phone Number *"
            />
            <FormError
              errors={props.errors}
              errorColor="text-white"
              field="phone"
            />
          </label>
          <label className="my-3" htmlFor="message">
            <Field
              component="textarea"
              disabled={formSubmitted}
              className="placeholder-white text-white bg-quinary-red font-semibold pl-3 py-2 w-full"
              name="message"
              placeholder="How can we help? *"
            />
            <FormError
              errors={props.errors}
              errorColor="text-white"
              field="message"
            />
          </label>
          {!formSubmitted ? (
            <div
              className="mx-auto flex justify-center w-full"
              css={css`
                transform: translateY(40%);
              `}
            >
              <button
                disabled={!(props.dirty && props.isValid)}
                className={`text-gray-800 hover:text-red-600 p-3 font-extrabold relative shadow-lg ${props.dirty && !props.isValid
                  ? "cursor-not-allowed bg-gray-500"
                  : "bg-submit"
                  }`}
                css={css`
                  animation-name: wiggle;
                  animation-duration: 0.55s;
                  animation-delay: 0.75s;
                  border: 1px solid transparent;
                  filter: brightness(1.15); 
                  &:hover {
                    transition: all .25s ease-in-out;
                      transition: all .25s ease-in-out;
                      border: 1px solid black;
                    }
                `}
                type="submit"
              >
                Get a FREE Quote{" "}
              </button>
            </div>
          ) : (
              <div className="flex justify-center">
                <SuccessToast message="We appreciate you contacting RAS Materials. We will get in touch with you soon!" />
              </div>
            )}
        </form>
      )}
    </Formik>
  )
}

export default Form
