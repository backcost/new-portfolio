import Layout from '@/components/Layout'
import Head from 'next/head'
import profilePic from '../../public/profilePic.png'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import TransitionEffect from '@/components/hooks/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel | FullStack Developer</title>
        <meta name='description' content="Gabriel Costa is a web developer from Brazil. Here you'll find some information about his carrer and some of his projects." />
      </Head>
      <TransitionEffect />
      <main className='flex items-center justify-center mx-auto text-dark w-full max-w-[1400px] 
      min-h-[78vh] dark:text-light'>
        <div className='flex items-center justify-center w-full lg:flex-col lg:mx-2'>
          <div className='w-1/2 flex flex-col items-center self-end lg:w-full lg:text-center lg:order-2 
          lg:self-center'>
            <AnimatedText text="Let's Build Something Great Together" className='!text-7xl 
            !text-left xl:!text-5xl lg:!text-4xl lg:!text-center sm:!text-2xl'/>
            <p className='mt-4 font-medium text-lg sm:text-xs'>I'm a passionate full stack developer dedicated to creating 
              amazing and functional digital solutions. If you're looking for a 
              customized website or web application that is visually appealing, 
              intuitive, and efficient, you've come to the right place.</p>
          </div>
          <div className='self-end lg:self-center sm:ml-10'> 
            <Image src={profilePic} alt='Gabriel Costa' className='w-[420px] h-auto 
            self-center lg:w-[280px]' priority/>
          </div>
        </div>
      </main>
    </>
  )
}
