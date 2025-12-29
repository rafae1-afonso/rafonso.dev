import Image from 'next/image'
import React from 'react'
import NeonButton from '../../atoms/NeonButton'

const HomeButton = ({ children, mouseOverAction }: { children: React.ReactNode, mouseOverAction: () => void }) => {
    return <li className='group my-[.1rem] flex items-center justify-center cursor-pointer' onMouseOver={mouseOverAction}>
        <div className="flex items-center justify-center">
            <Image src="/chromelogogif.gif" alt="logo" width={70} height={0} unoptimized
                className="invisible group-hover:visible animate-[brightnessPing_.9s_infinite]"
            />
        </div>
        <NeonButton styleAdd='
            text-2xl -translate-x-8 group-hover:translate-x-12
        '>
            {children}
        </NeonButton>
    </li>
}

export default HomeButton