import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import LayOut from './layout'
import Header from './layout/header/header'
import Dashboard from './components/dashboard'
import Footer from './layout/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <div className='container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]'>
        <Dashboard />
      </div>
    </main>
  )
}
