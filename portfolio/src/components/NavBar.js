import React, { useState } from 'react'
import Logo from './Logo'
import CustomLink from './CustomLink'
import CustomIcon from './CustomIcon'
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon} from './Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import MobileCustomLink from './MobileCustomLink'
import { motion } from 'framer-motion'

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between 
    border-b-2 border-solid border-dark dark:text-light dark:border-light relative z-10 
    lg:px-16 md:px-12 sm:px-8 lg:py-10'>

    <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out 
      block h-0.5 w-6 rounded-sm
      ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>

      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out 
      block h-0.5 w-6 rounded-sm my-0.5 
      ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>

      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out 
      block h-0.5 w-6 rounded-sm
      ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>
        <div className='w-full flex justify-between items-center lg:hidden'>
          <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Projects" className='ml-4'/>
          </nav>
          <nav className='flex items-center justify-center flex-wrap'>
            <CustomIcon 
              href="https://github.com/backcost" 
              content={<GithubIcon />}
              className="mr-5" />

            <CustomIcon 
            href="https://www.linkedin.com/in/gabrielcostaferreira/" 
            content={<LinkedInIcon />}
            className="mr-3" />

            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"}
            `}>
              {
                mode === 'dark' ?
                <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
              }
            </button>
          </nav>
        </div>
        {
          isOpen ?
          <motion.div 
          initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
          animate={{scale:1, opacity:1}}
          className='min-w-[50vw] flex flex-col justify-between items-center fixed 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 
          dark:bg-light/75 rounded-full backdrop-blur-md py-10'>
            <nav className='flex items-center flex-col justify-center'>
              <MobileCustomLink href="/" title="Home" toggle={handleClick}/>
              <MobileCustomLink href="/about" title="About" toggle={handleClick}/>
              <MobileCustomLink href="/projects" title="Projects" toggle={handleClick}/>
            </nav>
            <nav className='flex items-center justify-center flex-wrap mt-2'>
              <CustomIcon 
                href="https://github.com/backcost" 
                content={<GithubIcon />}
                className="mr-5 bg-light rounded-full dark:bg-dark sm:mx-1" />

              <CustomIcon 
              href="https://www.linkedin.com/in/gabrielcostaferreira/" 
              content={<LinkedInIcon />}
              className="mr-3 sm:mx-1" />

              <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
              ${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"}
              `}>
                {
                  mode === 'dark' ?
                  <SunIcon className={"fill-dark"} />
                  : <MoonIcon className={"fill-dark"} />
                }
              </button>
            </nav>
          </motion.div>
          : null
        }

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo/>
        </div>
    </header>
  )
}

export default NavBar