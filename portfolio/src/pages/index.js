import Layout from '@/components/Layout'
import Head from 'next/head'
import profilePic from '../../public/profilePic.png'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel | FullStack Developer</title>
        <meta name='description' content="Gabriel Costa is a web developer from Brazil. Here you'll find some information about his carrer and some of his projects." />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Let's Build Something Great Together" className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>I'm a passionate full stack developer dedicated to creating 
                amazing and functional digital solutions. If you're looking for a 
                customized website or web application that is visually appealing, 
                intuitive, and efficient, you've come to the right place.</p>
            </div>
            <div className='w-1/2'> 
              <Image src={profilePic} alt='Gabriel Costa' className='w-full h-auto' priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'/>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
//1:12:38
