'use client'

import { createContext, useState } from 'react'

export const BorderContext = createContext({})

export default function BorderProvider({ children }: { children: React.ReactNode }) {
  const [zoom, setZoom] = useState(false);

  return <BorderContext.Provider value={{zoom, setZoom}}>{children}</BorderContext.Provider>
}