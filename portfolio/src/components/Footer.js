import React from 'react'
import Layout from '@/components/Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium 
    text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-center lg:py-6'>
            <span>Gabriel Costa Ferreira - {new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </Layout>
    </footer>
  )
}

export default Footer