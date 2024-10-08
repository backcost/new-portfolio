import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arcFinancasImage from '../../public/arcfinancas.png'
import arcFinancasImageNovo from '../../public/arcFinancasNovo.png'
import portfolioImage from '../../public/portfolio.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/hooks/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-3xl
        border border-solid border-dark bg-light shadow-2xl p-12 relative 
        rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 
        xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
            bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full
            xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer
            overflow-hidden rounded-lg lg:w-full border-solid border-black border'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full 
            lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl 
                dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold
                    dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm
                '>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark
                    text-light p-2 px-6 text-lg font-semibold dark:bg-light 
                    dark:text-dark sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}
const projects = () => {
  return (
    <>
        <Head>
            <title>Gabriel | Projects</title>
            <meta name='description' content="Projects made by Gabriel Costa" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center 
        dark:text-light'>
            <Layout className='pt-16'>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 
                md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                        type="Website" 
                        title="ARC Finanças" 
                        summary="Landing page development using Wordpress with Elementor" 
                        img={arcFinancasImageNovo}
                        link="https://www.arcfinancas.com.br/" 
                        github="https://github.com/backcost"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                        type="Website" 
                        title="ARC Finanças" 
                        summary="Landing page development using HTML, CSS and JavaScript (All Vanilla)." 
                        img={arcFinancasImage}
                        link="https://backcost.github.io/arc-financas/" 
                        github="https://github.com/backcost/arc-financas"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                        type="Website" 
                        title="My Portfolio" 
                        summary="Responsive portfolio using Next.js, Tailwind CSS and Framer Motion" 
                        img={portfolioImage}
                        link="./" 
                        github="https://github.com/backcost/new-portfolio"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects