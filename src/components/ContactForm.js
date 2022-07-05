import React from "react"
import { Formik, Field } from "formik"
import { useSettings } from "../context/settings"
import FormError from "./FormError"
import { handleNetlifyFormSubmit } from "../utils/index"
import ContactFormValidationSchema from "../schema/ContactFormValidationSchema"
const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={ContactFormValidationSchema}
      onSubmit={handleNetlifyFormSubmit}
    >
      {props => (
        <form
          className="lg:w-full max-w-lg font-montserrat bg-off-white p-4 shadow-md mx-5"
          name="contactForm"
          onReset={props.handleReset}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="name"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Name<span className="text-red-700"> *</span>
              </label>
              <Field
                id="name"
                name="name"
                className="appearance-none block w-full bg-white shadow-md text-gray-700 border border-gray-200 rounded py-3 px-3 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
              />
              <FormError errors={props.errors} field="name" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email<span className="text-red-700"> *</span>
              </label>
              <Field
                className="appearance-none block w-full bg-white shadow-md text-gray-700 border rounded py-3 px-3 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="text"
                name="email"
              />
              <FormError errors={props.errors} field="email" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone<span className="text-red-700"> *</span>
              </label>
              <Field
                className="appearance-none block w-full bg-white shadow-md text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="text"
                name="phone"
              />
              <FormError errors={props.errors} field="phone" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                How can we help?<span className="text-red-700"> *</span>
              </label>
              <Field
                component="textarea"
                className="appearance-none block w-full bg-white shadow-md text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
              />
              <FormError errors={props.errors} field="message" />
            </div>
          </div>
          <div className="flex justify-center">
            <button
            disabled={!(props.dirty && props.isValid)}
              className={`text-white font-bold py-2 px-8 rounded items-center shadow-md ${
                props.dirty &&
                !props.isValid ?
                ("cursor-not-allowed bg-red-300") : "bg-tertiary-red"
              }`}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default ContactForm
