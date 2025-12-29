'use client';
import YearComponent from '@/components/atoms/YearComponent';
import TVComponent from '@/components/atoms/TVComponent'
import { BorderContext } from '@/providers/border-provider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import HomeButton from '@/components/molecules/HomeButton';
import Footer from '@/components/molecules/Footer';

const Home = () => {
    const { setZoom } = useContext(BorderContext) as { setZoom: (value: boolean) => void };
    const [currentHoverGif, setCurrentHoverGif] = useState('/chromelogogif.gif');

    useEffect(() => {
        setZoom(true)
    }, [])

    return (
        <TVComponent>
            {/* <div className='w-[600px] h-[350px] rounded-lg bg-secondary-background border-2 border-chrome-gray shadow-2xl'>

            </div> */}
            <main className='flex px-[80px] justify-between'>
                <div className='flex flex-col items-center justify-center gap-5 mx-[1rem]'>
                    <Link href='/'><Image src="/chromelogo.png" alt='logo' width={400} height={0} className="animate-[blink_.2s_infinite]" /></Link>
                    <ul>
                        <Link href='/aboutme'>
                            <HomeButton mouseOverAction={() => setCurrentHoverGif('/home/aboutme.gif')}>
                                ABOUT ME
                            </HomeButton>
                        </Link>
                        <Link href='/projects'>
                            <HomeButton mouseOverAction={() => setCurrentHoverGif('/home/projects.gif')}>
                                PROJECTS
                            </HomeButton>
                        </Link>
                        <Link href='/contact'>
                            <HomeButton mouseOverAction={() => setCurrentHoverGif('/home/contact.gif')}>
                                CONTACT
                            </HomeButton>
                        </Link>
                    </ul>
                    <Footer styleAdd='mt-16' />
                </div>
                <div>
                    <Image src={currentHoverGif} alt='about me gif' width={512} height={512} className='animate-[brightnessPing_.9s_infinite]' unoptimized />
                </div>
            </main>
        </TVComponent>
    )
}

export default Home