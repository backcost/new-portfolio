import React from 'react'
import { WhatsAppIcon } from './Icons'
import Link from 'next/link'

const WhatsAppLink = () => {
  return (
    <Link href={'https://wa.me/5586981620718'} target="_blank" className='flex items-center 
    justify-center w-[100px] h-[100px] fixed right-8 bottom-8 shadow-gray-700 
    rounded-full animate-bounce-slow bg-light shadow-2xl hover:shadow-inner hover:bg-gray hover:shadow-gray-700 '>
        <div
        className='w-20'>
            <WhatsAppIcon />
        </div>
    </Link>
  )
}

export default WhatsAppLink