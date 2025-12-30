import YearComponent from '@/components/atoms/YearComponent'
import React from 'react'

const Footer = ({ styleAdd }: { styleAdd?: string }) => {
    return <footer className={`flex items-center gap-5 text-sm ${styleAdd}`}>
        <p>&copy;</p>
        <YearComponent />
        <p>rafonso.dev</p>
    </footer>
}

export default Footer