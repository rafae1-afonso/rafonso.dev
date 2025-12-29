import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderComponent = ({ children, buttonURL = '/home' }: { children?: React.ReactNode, buttonURL?: string }) => {
    return <header className='w-[100vw] flex items-center justify-center'>
        <Link href={buttonURL} className='absolute left-28 active:duration-75 active:opacity-0
            active:scale-125'>
            <Image src="/chromelogogif.gif" alt="logo" width={120} height={0}
                className="duration-200 brightness-75 hover:brightness-125 hover:animate-[brightnessPing_.9s_infinite]"
            />
        </Link>
        <h1 className='text-xl font-bold'>{children}</h1>
        <div></div>
    </header>
}

export default HeaderComponent;