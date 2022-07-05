import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Map from "./Map"
import logo from "../../static/assets/splash-bg-white.png"
import { AddressIcon, PhoneIcon, EmailIcon } from "./icons"
import { useContactInfo } from "../hooks/useContactInfo"
import { encodeForGoogle } from "../utils"
const Footer = () => {
  const { contactInfo } = useContactInfo()

  return (
    <div className="bg-primary-grey py-5 md:py-10">
      <div className="flex flex-col md:flex-row container mx-auto justify-center md:items-start md:justify-between py-10">
        <Link className="order-last md:order-first self-center" to="/">
          <img
            className="object-scale-down h-48 text-center"
            src={logo}
            alt="RAS Materials Logo"
          />
        </Link>
        <ul className="text-white uppercase font-extrabold ml-5 mt-10 md:mt-0">
          <li className="mb-5">
            <Link activeClassName="underline" to="/">
              Home
            </Link>
          </li>
          <li className="mb-5">
            <Link activeClassName="underline" to="/products">
              Products
            </Link>
          </li>
          <li className="mb-5">
            <Link activeClassName="underline" to="/vendors">
              Vendors
            </Link>
          </li>
        </ul>
        <ul className="text-white uppercase font-extrabold ml-5">
          <li className="mb-5">
            <Link activeClassName="underline" to="/about">
              About
            </Link>
          </li>
          <li className="mb-5">
            <Link activeClassName="underline" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="text-white uppercase font-extrabold flex flex-col  ml-5 mb-5">
          <li className="ml-5 mb-4">
            <a
              href={`https://www.google.com/maps/place/${encodeForGoogle(
                contactInfo.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Address
              <br />
              {contactInfo.address}
            </a>
          </li>
        </ul>
        {/* <Map
          className="self-center order-first md:order-last"
          address={contactInfo.address}
        /> */}
      </div>
      <div className="flex flex-col md:flex-row justify-center text-white bg-tertiary-red py-12 font-montserrat uppercase">
        <div
          className="mx-10"
          css={css`
            &:hover {
              animation-name: wiggle;
              animation-duration: 0.55s;
            `}
        >
          <PhoneIcon className="inline-block mr-3 mt-3" />
          <div className="inline-flex flex-col">
            Give us a call
            <a
              className="lowercase text-xs font-bold hover:underline"
              href={`tel:1${contactInfo.phone}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>
        <div
          className="mx-10"
          css={css`
          &:hover {
            animation-name: wiggle;
            animation-duration: 0.55s;
          `}
        >
          <EmailIcon className="inline-block mr-3 mt-3" />
          <div className="inline-flex flex-col">
            Send us an email
            <a
              className="lowercase text-xs font-bold hover:underline"
              href={`mailto:${contactInfo.email}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
        <div
          className="mx-10"
          css={css`
          &:hover {
            animation-name: wiggle;
            animation-duration: 0.55s;
          `}
        >
          <AddressIcon className="inline-block mr-3 mt-3" />
          <div className="inline-flex flex-col">
            Address{" "}
            <a
              className="text-xs font-bold hover:underline"
              href={`https://www.google.com/maps/place/${encodeForGoogle(
                contactInfo.address
              )}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {contactInfo.address}
            </a>
          </div>
        </div>
      </div>
      <small className="mt-5 block text-center text-white">
        Copyright © 2020 RAS Materials. Designed and developed by{" "}
        <a
          className="font-bold hover:underline"
          href="https://www.iteamnm.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          iTEAM Consulting
        </a>
      </small>
    </div>
  )
}

export default Footer
