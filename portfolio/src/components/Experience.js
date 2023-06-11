import React, {useRef} from 'react'
import{ useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Job = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    justify-between'>
      <LiIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} 
        transition={{duration:0.5, type:"spring"}}> 
          <h3 className='capitalize font-bold text-2xl'>
            {position}&nbsp;
          </h3>
          <h4>
            <a href={companyLink} target='_blank' className='text-primary capitalize 
            font-bold text-2xl dark:text-primaryDark'>
                {company}
            </a>
          </h4>
          <span className='capitalize font-medium text-dark/60 dark:text-light/75'>
            {time} | {address}
          </span>
          <p className='font-medium w-full mt-3'>{work}</p>
        </motion.div>
    </li>
  )
}

const Jobs = () => {
  let jobsList = [
    [ 'Full Stack Developer', 
      'Lw Soluções em Tecnologia',
      'https://www.linkedin.com/company/lwsolucoes/', 
      '08/2022 - 12/2022', 
      'Brazil', 
      `Back-end development of a sports betting application with Node.js, SQL Server. 
      Component development in React Native for other projects.`],
    [ 'Front End Developer - Freelancer', 
      'Arc Finanças',
      'https://www.arcfinancas.com.br/', 
      '03/2022 - 07/2022', 
      'Brazil', 
      `Landing page development using HTML, CSS and JavaScript (All Vanilla).`],
    [ 'Intern - Engineering', 
      'J Meneses Construções',
      'https://www.google.com/maps/place/J+Meneses+Constru%C3%A7%C3%B5es+Ltda/@-5.0767305,-42.7832553,15z/data=!4m15!1m8!3m7!1s0x78e3a20589bccfd:0x38c88e80ce4b3e4d!2sJ+Meneses+Constru%C3%A7%C3%B5es+Ltda!8m2!3d-5.0767567!4d-42.7831541!10e5!16s%2Fg%2F1thln89b!3m5!1s0x78e3a20589bccfd:0x38c88e80ce4b3e4d!8m2!3d-5.0767567!4d-42.7831541!16s%2Fg%2F1thln89b?entry=ttu', 
      '10/2017 - 10/2018', 
      'Brazil', 
      `Internship in a construction company performing activities like: budget spreadsheet 
      automation, administrative processes, budget adjustments, etc.`],
    [ 'Intern - Engineering', 
      'Águas e Esgotos do Piauí - Agespisa',
      'https://pt.wikipedia.org/wiki/%C3%81guas_e_Esgotos_do_Piau%C3%AD', 
      '05/2018 - 10/2018', 
      'Brazil', 
      `Internship at a water company providing assistance in the preparation of technical 
      reports on the quality of water and the sanitation structure of cities in the state 
      of Piauí-Brazil; checking the physical-chemical and bacteriological patterns of the 
      samples; generating static summaries that contributed to quality control and simplifying 
      bureaucratic procedures.`],
  ]

  return (
    <>
      { jobsList.map( (detail) => 
        <Job 
          key = {detail[1]}
          position={detail[0]}
          company={detail[1]}
          companyLink={detail[2]}
          time={detail[3]}
          address={detail[4]}
          work={detail[5]} />) 
      }
    </>
  )
}
export const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  
  return (
    <>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] 
        h-full bg-dark origin-top dark:bg-light'/>
          <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Jobs />
          </ul>
      </div>
    </>
  )
}
