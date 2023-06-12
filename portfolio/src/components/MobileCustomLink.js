import { useRouter } from 'next/router'
import React from 'react'

const MobileCustomLink = ({href, title, toggle, className=""}) => {
    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light my-2
        dark:text-dark`} onClick={handleClick}>
            {title}

            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-dark`}>
                &nbsp;
            </span>

        </button>
    )
}

export default MobileCustomLink