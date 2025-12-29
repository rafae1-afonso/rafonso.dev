'use client';
import NeonButton from '@/components/atoms/NeonButton';
import TechnologyCard from '@/components/atoms/TechnologyCard';
import TVComponent from '@/components/atoms/TVComponent'
import ContentBoxComponent from '@/components/molecules/ContentBoxComponent';
import Footer from '@/components/molecules/Footer';
import HeaderComponent from '@/components/molecules/HeaderComponent'

import { Languages, Technologies } from '@/enums';
import { BorderContext } from '@/providers/border-provider'

import { redirect } from 'next/navigation';
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { languageContext } from '@/providers/language-provider';
import database from '@/database';

const Aboutme = () => {
    const { setZoom } = useContext(BorderContext) as { setZoom: (value: boolean) => void };
    const lanContext = useContext(languageContext) as { language: Languages };
    
    useEffect(() => {
        setZoom(true)
    }, [])

    return (
        <TVComponent>
            <main className='w-[100vw] h-[100vh] flex flex-col items-center gap-12 pt-24'>
                <HeaderComponent>ABOUT ME</HeaderComponent>
                <section className='w-[77rem] custom-scrollbar flex flex-col gap-16 px-16 pb-10 overflow-y-scroll'>
                    <div className='w-full flex gap-10 justify-between'>
                        <ContentBoxComponent title='RAFAEL AF0NSO'>
                            <p>
                                {database.aboutme.aboutmeText[lanContext.language]}
                            </p>
                        </ContentBoxComponent>
                        <Image src="/aboutme/profilephoto.png" alt='profile photo' width={250} height={0}
                            className='rounded-lg border-2 border-chrome-gray shadow-2xl'
                        />
                    </div>
                    <div className='border-b-2 opacity-10'></div>
                    <ContentBoxComponent title='TECHNOLOGIES'>
                        <div className='flex flex-wrap gap-5 items-center justify-center'>
                            {
                                Object.values(Technologies).map(tech => <TechnologyCard key={tech} technology={tech} />)
                            }
                        </div>
                    </ContentBoxComponent>
                    <div className='border-b-2 opacity-10'></div>
                    <ContentBoxComponent title='SCHOOL'>
                        in progress
                    </ContentBoxComponent>
                    <div className='border-b-2 opacity-10'></div>
                    <ContentBoxComponent title='EXPERIENCE'>
                        not found
                    </ContentBoxComponent>
                    <div className='flex my-10 items-center justify-around'>
                        <NeonButton styleAdd="text-chrome-gray" onClick={() => {redirect('/contact')}}>
                            &lt; CONTACT
                        </NeonButton>
                        <Footer />
                        <NeonButton styleAdd="text-chrome-gray" onClick={() => {redirect('/projects')}}>
                            PROJECTS &gt;
                        </NeonButton>
                    </div>
                </section>
            </main>
        </TVComponent>
    )
}

export default Aboutme