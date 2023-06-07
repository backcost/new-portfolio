import AnimatedText from '@/components/AnimatedText'
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
            <Layout className='pt-6'>
                <AnimatedText text="Biography" className='text-3xl text-dark/75' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                        Programming journey:
                        2017: Started creating programs for the HP 50g calculator using the USER-RPL language to facilitate engineering problem-solving.

                        2018: Developed a family budget spreadsheet in Excel using VBA. I still use this spreadsheet today to simplify personal expense tracking.

                        2020: Began studying programming logic with Python.

                        2021: The year I decided to transition my career. I focused my studies on the fundamentals: JavaScript, HTML, CSS.

                        2022: First job as a Web Developer.
                        </p>
                    </div>
                </div>
                <AnimatedText text="Skills" className='text-3xl text-dark/75' />
                <SkillList />
                <AnimatedText text="Experience" className='text-3xl text-dark/75' />
                <AnimatedText text="Education" className='text-3xl text-dark/75' />
            </Layout>
        </main>
    </>
  )
}

export default about