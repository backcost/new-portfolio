import React, {useRef} from 'react'
import{ useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Job = ({ type, time, place, info, link }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    justify-between'>
      <LiIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} 
        transition={{duration:0.5, type:"spring"}}> 
            <a href={link} target='_blank'>
                <h3 className='capitalize font-bold text-2xl'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/60'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full mt-3'>{info}</p>
            </a>
        </motion.div>
    </li>
  )
}

const Jobs = () => {
  let jobsList = [
    [ 'Bachelor in Civil Engineering', 
      '2013 - 2020', 
      'Federal University of Piauí', 
      'The Civil Engineering course at UFPI (Federal University of Piauí) offers a comprehensive and rigorous curriculum for students interested in pursuing a career in civil engineering. The program combines theoretical knowledge with practical applications, providing students with a strong foundation in areas such as structural analysis, construction management, geotechnical engineering, transportation systems, and environmental engineering. ',
        'https://www.ufpi.br/'],
    [ 'web development courses', 
      '2021 - 2023', 
      'Alura', 
      "Alura offers a wide range of web development courses designed to cater to both beginners and experienced professionals. Their curriculum covers front-end and back-end technologies, including HTML, CSS, JavaScript, React, Angular, Node.js, PHP, Python, and more. With a practical approach focused on real-world projects, Alura's courses provide hands-on experience to build interactive websites and web applications.",
      'https://www.alura.com.br/'],
    [ 'English Course', 
      '2008 - 2011', 
      'Wizard by Pearson', 
      'English classes every Saturday for 4 years.',
      'https://www.wizard.com.br/'],
    ]

  return (
    <>
      { jobsList.map( (detail) => 
        <Job 
          key = {detail[0]}
          type = {detail[0]}
          time = {detail[1]}
          place = {detail[2]}
          info = {detail[3]}
          link = {detail[4]} />) 
      }
    </>
  )
}
export const Education = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  
  return (
    <>
      <div ref={ref} className='w-[75%] mx-auto relative mb-[18px]'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] 
        h-full bg-dark origin-top'/>
          <ul className='w-full flex flex-col items-start justify-start ml-4'>
            <Jobs />
          </ul>
      </div>
    </>
  )
}
