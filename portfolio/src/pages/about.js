import AnimatedText from '@/components/AnimatedText'
import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
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

        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='!p-4 xl:!p-4'>
                <AnimatedText text="Biography" className='!text-4xl text-dark/75 py-6 
                '/>
                <div className='w-[75%] mx-auto'>
                    <p className='font-medium mb-8'>
                    My name is Gabriel Costa, a Brazilian civil engineering graduate from 
                    UFPI (Federal University of Piauí).
                     Upon completing my degree, I embarked on a journey into the world of 
                     web development, driven by my passion for creating digital solutions. 
                     I have dedicated myself to studying web development extensively, 
                     constantly expanding my knowledge and keeping up with the latest industry 
                     trends. Additionally, I have made it a daily commitment to enhance my 
                     English language skills, recognizing its importance in the globalized 
                     tech industry.
                    </p>
                    <p className='font-medium mb-8'>
                    I have gained valuable experience in the field of web development, 
                    with two significant roles under my belt. Firstly, I had the opportunity 
                    to work as a freelancer, collaborating with clients to develop and deploy 
                    web applications tailored to their specific needs. This experience not 
                    only enhanced my technical skills but also sharpened my ability to 
                    communicate effectively and manage projects independently. Secondly, 
                    I worked as a full-stack developer, contributing to the end-to-end 
                    development of various projects. This position allowed me to showcase 
                    my proficiency in front-end and back-end technologies, leveraging my 
                    skills to deliver high-quality, scalable, and user-friendly web solutions.
                    </p>
                    <p className='font-medium'>
                    Combining my solid foundation in civil engineering, passion for web 
                    development, continuous English language improvement, and hands-on 
                    experience, I am excited to contribute my versatile skill set to a dynamic 
                    and growth-oriented team in the web development industry.
                    </p>
                </div>
                <AnimatedText text="Skills" className='!text-4xl text-dark/75 py-14' />
                <SkillList />
                <AnimatedText text="Experience" className='!text-4xl text-dark/75 py-14' />
                <Experience/>
                <AnimatedText text="Education" className='!text-4xl text-dark/75 py-14' />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about