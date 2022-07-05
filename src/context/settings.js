import React, { createContext, useContext, useState } from "react"
const SettingsContext = createContext(null)

export const SettingsProvider = ({ children, pathname, location }) => {

  const [isOpen, setIsOpen] = useState(false)
  const { hash } = location
  return (
    <SettingsContext.Provider
      value={{
        location,
        isOpen,
        hash,
        pathname,
        setIsOpen,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const { isOpen, setIsOpen, pathname, hash, location } = useContext(SettingsContext)

  return {
    isOpen,
    setIsOpen,
    pathname,
    hash,
    location
  }
}
