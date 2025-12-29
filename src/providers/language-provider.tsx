'use client'
import { Languages } from '@/enums';
import { createContext, useState } from 'react'

export const languageContext = createContext({})

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState(Languages.english);

    return <languageContext.Provider value={{ language, setLanguage }}>{children}</languageContext.Provider>
}