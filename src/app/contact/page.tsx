'use client';
import ImageButton from '@/components/atoms/ImageButton'
import NeonButton from '@/components/atoms/NeonButton';
import TVComponent from '@/components/atoms/TVComponent'
import Footer from '@/components/molecules/Footer';
import HeaderComponent from '@/components/molecules/HeaderComponent'
import { BorderContext } from '@/providers/border-provider'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React, { useContext, useEffect } from 'react'

const Contact = () => {
    const { setZoom } = useContext(BorderContext) as { setZoom: (value: boolean) => void };

    useEffect(() => {
        setZoom(true)
    }, [])

    return (
        <TVComponent>
            <main className='w-[100vw] h-[100vh] flex flex-col items-center pt-24 overflow-y-scroll'>
                <HeaderComponent>CONTACT</HeaderComponent>
                <section className='h-[100vh] flex flex-col pt-28 gap-14'>
                    <h2 className='text-md text-chrome-light-gray'>SOCIALS</h2>
                    <div className='flex gap-14'>
                        <Link href='https://www.linkedin.com/in/rafaelafonsofl' target='_blank'>
                            <ImageButton src='/contact/linkedin.gif'>
                                LINKEDIN
                            </ImageButton>
                        </Link>
                        <Link href='https://github.com/rafae1-afonso ' target='_blank'>
                            <ImageButton src='/contact/github.gif'>
                                GITHUB
                            </ImageButton>
                        </Link>
                        <Link href='https://www.instagram.com/_rafa.afonso' target='_blank'>
                            <ImageButton src='/contact/instagram.gif'>
                                INSTAGRAM
                            </ImageButton>
                        </Link>
                    </div>
                </section>
                <div className='flex w-full my-15 items-center justify-evenly'>
                    <NeonButton styleAdd="text-chrome-gray" onClick={() => { redirect('/projects') }}>
                        &lt; PROJECTS
                    </NeonButton>
                    <Footer />
                    <NeonButton styleAdd="text-chrome-gray" onClick={() => { redirect('/aboutme') }}>
                        ABOUT ME &gt;
                    </NeonButton>
                </div>
            </main>
        </TVComponent>
    )
}

export default Contact