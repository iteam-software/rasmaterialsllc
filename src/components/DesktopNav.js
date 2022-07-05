import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import logo from "../../static/assets/splash-bg-white.png"
import { useSettings } from "../context/settings"
import { useContactInfo } from "../hooks/useContactInfo"
import { pageRegex } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames"

const DesktopNav = () => {
  const { isOpen, setIsOpen, pathname } = useSettings()
  const { contactInfo } = useContactInfo()
  const handleClick = () => {
    document.querySelector("#name").focus()
  }


  let isContactOrAbout = pageRegex.test(pathname)
  let navLinkClass = classNames({
    "text-nav-red": isContactOrAbout,
    "text-white": !isContactOrAbout,
  })

  return (
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" aria-label="Home">
              <img
                className="h-8 w-auto sm:h-24 border-gray-900 border"
                src={logo}
                alt="Logo"
              />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              >
                {/* Menu Bars */}
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 font-open-sans">
          <Link
            activeClassName="underline"
            to="/"
            className={`font-medium ${navLinkClass} text-white hover:text-gray-900 transition duration-150 ease-in-out`}
          >
            Home
          </Link>
          <Link
            activeClassName="underline"
            to="/products"
            className={`ml-8 font-medium ${navLinkClass} hover:text-gray-900 transition duration-150 ease-in-out`}
          >
            Products
          </Link>
          <Link
            activeClassName="underline"
            to="/vendors"
            className={`ml-8 font-medium ${navLinkClass} hover:text-gray-900 transition duration-150 ease-in-out`}
          >
            Vendors
          </Link>
          <Link
            activeClassName="underline"
            to="/about"
            className={`ml-8 font-medium ${navLinkClass} hover:text-gray-900 transition duration-150 ease-in-out`}
          >
            About
          </Link>
          <Link
            activeClassName="underline"
            to="/contact"
            className={`ml-8 font-medium ${navLinkClass} hover:text-indigo-900 transition duration-150 ease-in-out`}
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:block lg:ml-64 flex items-center">
          <a
            className={`${navLinkClass} font-extrabold whitespace-no-wrap`}
            href={`tel:1${contactInfo.phone}`}
          >
           <FontAwesomeIcon icon="phone" className={`mr-5`} />
            {contactInfo.phone}
          </a>
          <a
            onClick={handleClick}
            className="cursor-pointer p-3 bg-primary-yellow whitespace-no-wrap text-gray-900 hover:text-red-600 font-extrabold ml-64"
            css={css`
            filter: brightness(1.15); 
            &:hover {
              transition: all .25s ease-in-out;
              border: 1px solid black;
            }
            
        `}
          >
            Get a FREE Quote
          </a>
        </div>
      </nav>
    </div>
  )
}

export default DesktopNav
