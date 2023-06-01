import Layout from '@/components/Layout'
import Head from 'next/head'
import profilePic from '../../public/profilePic.png'
import AnimatedText from '@/components/AnimatedText'
import WhatsAppLink from '@/components/WhatsAppLink'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel | FullStack Developer</title>
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
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
              <img src={profilePic.src} alt='Gabriel Costa' className='w-[400px]' />
            </div>
          </div>
        </Layout>
        <WhatsAppLink />
      </main>
    </>
  )
}
//1:12:38
