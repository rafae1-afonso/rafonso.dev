'use client';
import { BorderContext } from '@/providers/border-provider';
import React, { useContext } from 'react'

const BorderComponent = () => {
    const { zoom } = useContext(BorderContext) as { zoom: boolean };

    return <div className={`tv-tube-border bg-[url(/tube-border.png)] w-full h-full absolute pointer-events-none duration-2000 ${zoom && 'scale-111'}`}></div>
}

export default BorderComponent