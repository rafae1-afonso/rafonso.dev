'use client'
import { createContext } from 'react'
import database from '../database/db.json'

export const databaseContext = createContext({})

export default function DatabaseProvider({ children }: { children: React.ReactNode }) {
    return <databaseContext.Provider value={database}>
        {children}
    </databaseContext.Provider>
}