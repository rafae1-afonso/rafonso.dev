'use client'
import NeonButton from '@/components/atoms/NeonButton'
import PhotoCarousel from '@/components/atoms/PhotoCarousel'
import TechnologyCard from '@/components/atoms/TechnologyCard'
import TVComponent from '@/components/atoms/TVComponent'
import ContentBoxComponent from '@/components/molecules/ContentBoxComponent'
import HeaderComponent from '@/components/molecules/HeaderComponent'
import database from '@/database'
import { Languages, Technologies } from '@/enums'
import { BorderContext } from '@/providers/border-provider'
import Link from 'next/link'
import { use, useContext, useEffect } from 'react'

import { TbBrandGithubFilled } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { languageContext } from '@/providers/language-provider'

const page = ({ params }: { params: Promise<{ route: string }> }) => {
    const { route } = use(params)
    const project = database.projects.find(project => project.routeName == route)
    const { setZoom } = useContext(BorderContext) as { setZoom: (value: boolean) => void };
    const lanContext = useContext(languageContext) as { language: Languages };

    useEffect(() => {
        setZoom(true)
    }, [])

    return (
        <TVComponent>
            <main className='w-[100vw] h-[100vh] flex flex-col items-center pt-24'>
                <HeaderComponent buttonURL='/projects'>{project?.title || '???'}</HeaderComponent>
                {
                    project &&
                    <section className='w-[77rem] custom-scrollbar flex flex-col my-12 gap-16 px-16 pb-10 overflow-y-scroll'>
                        <div className='w-full flex gap-10 justify-center'>
                            {
                                !project.screenshots

                                    ?
                                    <ContentBoxComponent>
                                        I think this project don't need screenshots
                                    </ContentBoxComponent>
                                    : <PhotoCarousel photos={project.screenshots}></PhotoCarousel>
                            }
                        </div>
                        {
                            project.repositoryUrl &&
                            <div className='flex justify-center gap-5'>
                                <Link href={project.repositoryUrl} target='_blank' className='flex items-center bg-chrome-gray rounded-sm py-2 px-6 border border-r-3 border-b-3'>
                                    <NeonButton><p className='flex items-center gap-2'><TbBrandGithubFilled size={25} /> REPOSITORY</p></NeonButton>
                                </Link>
                                {
                                    project.deployUrl &&
                                    <Link href={project.deployUrl} target='_blank' className='flex items-center bg-chrome-gray rounded-sm py-2 px-6 border border-r-3 border-b-3'>
                                        <NeonButton><p className='flex items-center gap-2'><MdOutlineWeb size={25} /> DEPLOY</p></NeonButton>
                                    </Link>
                                }
                                {
                                    project.backendRepositoryUrl &&
                                    <Link href={project.backendRepositoryUrl} target='_blank' className='flex items-center bg-chrome-gray rounded-sm py-2 px-6 border border-r-3 border-b-3'>
                                        <NeonButton><p className='flex items-center gap-2'><FaServer size={25} /> BACKEND</p></NeonButton>
                                    </Link>
                                }
                            </div>
                        }
                        <div className='border-b-2 opacity-10'></div>
                        <ContentBoxComponent title='DESCRIPTION'>
                            <p>
                                {project.description[lanContext.language]}
                            </p>
                        </ContentBoxComponent>
                        <div className='border-b-2 opacity-10'></div>
                        <ContentBoxComponent title='USED TECHNOLOGIES'>
                            <div className='flex flex-wrap gap-5 items-center justify-center'>
                                {
                                    project.technologies.map(tech => <TechnologyCard key={tech} technology={Technologies[tech as keyof typeof Technologies]} />)
                                }
                            </div>
                        </ContentBoxComponent>
                    </section>
                }
            </main>
        </TVComponent>
    )
}

export default page