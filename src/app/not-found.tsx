'use client';
import NeonButton from '@/components/atoms/NeonButton';
import TVComponent from '@/components/atoms/TVComponent'
import { BorderContext } from '@/providers/border-provider';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useContext, useEffect } from 'react'

const NotFoundPage = () => {
    const { setZoom } = useContext(BorderContext) as { setZoom: (value: boolean) => void };

    useEffect(() => {
        setZoom(false)
    }, [])

    return (
        <TVComponent>
            <main className='w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[url("/static.gif")]'>
                <section className='flex flex-col gap-5 items-center justify-center bg-black/70 border-2 border-black p-16'>
                    <h1 className='text-red-800'>ERROR 404</h1>
                    <p>Page not found</p>
                    <p>:(</p>
                    <NeonButton styleAdd="hover:scale-105" onClick={() => { redirect('/home') }}>
                        go back
                    </NeonButton>
                </section>
            </main>
        </TVComponent>
    )
}

export default NotFoundPage