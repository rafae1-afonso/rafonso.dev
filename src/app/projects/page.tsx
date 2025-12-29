'use client';
import NeonButton from '@/components/atoms/NeonButton'
import ProjectCard from '@/components/atoms/ProjectCard';
import TVComponent from '@/components/atoms/TVComponent'
import Footer from '@/components/molecules/Footer'
import HeaderComponent from '@/components/molecules/HeaderComponent'
import database from '@/database';
import { BorderContext } from '@/providers/border-provider';
import Link from 'next/link';
import { redirect } from 'next/navigation'
import { useContext, useEffect } from 'react'

const Projects = () => {
    const { setZoom } = useContext(BorderContext) as { setZoom: (value: boolean) => void };

    useEffect(() => {
        setZoom(true)
    }, [])

    return (
        <TVComponent>
            <main className='w-[100vw] h-[100vh] flex flex-col items-center pt-24'>
                <HeaderComponent>PROJECTS</HeaderComponent>
                <div className='flex flex-col gap-10 items-center justify-center my-auto'>
                    <div className='w-[90vw] h-[50vh] custom-scrollbar flex flex-wrap justify-center items-center overflow-y-scroll gap-15 py-10 px-5'>
                        {
                            database.projects.map(project =>
                                <Link key={project.id} href={`/projects/${project.routeName}`}>
                                    <ProjectCard
                                        borderStyling={project.cardBorderStyle && project.cardBorderStyle}
                                        thumbnailSrc={project.thumbnail}
                                        title={project.title}
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div>
                <div className='flex w-full my-auto items-center justify-evenly pb-5'>
                    <NeonButton styleAdd="text-chrome-gray" onClick={() => { redirect('/aboutme') }}>
                        &lt; ABOUT ME
                    </NeonButton>
                    <Footer />
                    <NeonButton styleAdd="text-chrome-gray" onClick={() => { redirect('/contact') }}>
                        CONTACT &gt;
                    </NeonButton>
                </div>
            </main>
        </TVComponent>
    )
}

export default Projects