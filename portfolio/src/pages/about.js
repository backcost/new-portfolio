import AnimatedText from '@/components/AnimatedText'
import { Experience } from '@/components/Experience'
import Layout from '@/components/Layout'
import SkillList from '@/components/SkillList'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
        <Head>
            <title>Gabriel | About</title>
            <meta name='description' content="A resume about Gabriel Costa's career" />
        </Head>

        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-1'>
                <AnimatedText text="Biography" className='!text-4xl text-dark/75 py-10' />
                <div className=''>
                    <p className='font-medium'>
                    Programming journey:
                    2017: Started creating programs for the HP 50g calculator using the USER-RPL language to facilitate engineering problem-solving.

                    2018: Developed a family budget spreadsheet in Excel using VBA. I still use this spreadsheet today to simplify personal expense tracking.

                    2020: Began studying programming logic with Python.

                    2021: The year I decided to transition my career. I focused my studies on the fundamentals: JavaScript, HTML, CSS.

                    2022: First job as a Web Developer.
                    </p>
                </div>
                <AnimatedText text="Skills" className='!text-4xl text-dark/75 py-10' />
                <SkillList />
                <AnimatedText text="Experience" className='!text-4xl text-dark/75 py-10' />
                <Experience/>
                <AnimatedText text="Education" className='!text-4xl text-dark/75 pt-10' />
            </Layout>
        </main>
    </>
  )
}

export default about