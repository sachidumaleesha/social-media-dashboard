import Image from 'next/image'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div>
      <Background/>
      <main className='min-h-screen w-full max-w-7xl px-4 pb-2 pt-8 md:px-8 mx-auto'>
        <Header/>
      </main>
    </div>
  )
}

function Background() {
  return (
    <div className='fixed left-0 top-0 min-h-screen w-full bg-white dark:bg-very-dark-blue-bg -z-50'>
      <div className='h-[250px] rounded-b-2xl bg-very-pale-blue-top-bg-pattern dark:bg-very-dark-blue-bg'>
        <div className='h-full'></div>
      </div>
    </div>
  )
}
