import Herobody from '@/components/hero'
import Image from 'next/image'
import Catalog from './(catalog)/catalog'


export default function Home() {
  return (
 <>
 <div className='h-full w-screen py-20'>
 <Herobody/>
 <Catalog/>
 </div>
 </>
  )
}
