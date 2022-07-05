import React from "react"
import addressIcon from "./svgs/address-icon.svg"
import emailIcon from "./svgs/email-icon.svg"
import phoneIcon from "./svgs/phone-icon.svg"
const AddressIcon = ({ className }) => {
  return <img className={className} src={addressIcon} alt="Address" />
}

const EmailIcon = ({ className }) => {
  return <img className={className} src={emailIcon} alt="phone" />
}

const PhoneIcon = ({ className }) => {
  return <img className={className} src={phoneIcon} alt="phone" />
}

const MenuIcon = ({ className }) => (
  <svg
  className="h-6 w-6"
  stroke="currentColor"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M6 18L18 6M6 6l12 12"
  />
</svg>
)

export { AddressIcon, EmailIcon, PhoneIcon, MenuIcon }
