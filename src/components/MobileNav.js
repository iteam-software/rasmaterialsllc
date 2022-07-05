import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../static/assets/splash-bg-white.png"
import { useSettings } from "../context/settings.js"
import { MenuIcon } from "../components/icons"
const MobileNav = () => {
  const { isOpen, setIsOpen } = useSettings()
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
        !isOpen && "hidden"
      }`}
    >
      <div className="rounded-lg shadow-md">
        <div
          className="rounded bg-white shadow-xs overflow-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src={logo} alt="" />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Close menu"
                onClick={toggleOpen}
              >
                <MenuIcon/>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3">
            <Link
            onClick={toggleOpen}
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              role="menuitem"
            >
              Home
            </Link>
            <Link
            onClick={toggleOpen}
              to="/products"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              role="menuitem"
            >
              Products
            </Link>
            <Link
            onClick={toggleOpen}
              to="/vendors"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              role="menuitem"
            >
              Vendors
            </Link>
            <Link
            onClick={toggleOpen}
              to="/about"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              role="menuitem"
            >
              About
            </Link>
            <Link
            onClick={toggleOpen}
              to="/contact"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              role="menuitem"
            >
              Contact
            </Link>
          </div>
          <div>
            <a
              href="#form"
              className="block bg-yellow-500 w-full px-5 py-3 text-center font-extrabold text-white bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
              role="menuitem"
            >
              Get a <span className="uppercase">free</span> Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
