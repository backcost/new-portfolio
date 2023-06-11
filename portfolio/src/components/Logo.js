import Link from 'next/link'
import React from 'react'
import Image from 'next/legacy/image'

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <Link href="/" className='w-16 h-16 rounded-full border border-solid 
        border-transparent dark:border-light'>
          <Image
            src="/../public/logo.png"
            width={200}
            height={200}
            className='rounded-full'
          />
        </Link>
    </div>
  )
}

export default Logo