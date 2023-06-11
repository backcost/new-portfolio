import React from 'react'
import Logo from './Logo'
import CustomLink from './CustomLink'
import CustomIcon from './CustomIcon'
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon} from './Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between 
    border-b-2 border-solid border-dark dark:text-light dark:border-light'>
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
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo/>
        </div>
    </header>
  )
}

export default NavBar