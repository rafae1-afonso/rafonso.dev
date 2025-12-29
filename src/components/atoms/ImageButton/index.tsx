import Image from 'next/image'
import React from 'react'

const ImageButton = ({ children, src, size = 120 }: { children: React.ReactNode, src: string, size?: number}) => {
    return <button className='cursor-pointer'>
        <div className='
            group
            duration-200
            flex flex-col items-center gap-2
            animate-[brightnessPing_.9s_infinite]
            hover:animate-[levitation_1s_infinite]
            hover:-translate-y-8
            hover:scale-125
        '>
            <Image src={src} alt={String(children)} width={size} height={0} unoptimized />
            <h3 className='
                duration-200 text-xs absolute mt-14 
                opacity-0 group-hover:translate-y-16
                group-hover:opacity-100
                text-shadow-current
                text-shadow-[0_0_10px_current]
            '>
                {children}
            </h3>
        </div>
    </button>
}

export default ImageButton;