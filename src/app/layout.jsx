import React from 'react'
import Image from 'next/image'
import './globals.css'
/* import { useEffect } from 'react'

export async function fetchData() {
  // api 호출
  const res = await fetch('/')
  const data = await res.json()
  return data
}
*/

export const metadata = {
  title: 'Horoprism Project',
  description: 'Generated by create ',
}

export default function RootLayout({ children }) {
  /*
  useEffect(() => {
    const fetchDataUser = async () => {
      const userData = await fetchData()
      console.log(userData)
    }

    fetchDataUser()
  }, [])
  */
  
  return (
    <html lang="ko">
      <body className='h-screen'>
        <header>
          <div className='flex items-center justify-end border border-black p-4 pr-4'>
            <div className='ml-4'>
              <Image src='/profile.png' alt='profile' className='rounded-full' width={30} height={30} />
            </div>
            <div className='ml-4'>
              <p className='text-black font-bold text-1xl'>닉네임 입니다</p>
            </div>
            <div className='ml-4'>
              <Image src='/notification.png' alt='notification' width={30} height={30} />
              <span className='absolute top-2 right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>
                10
              </span>
            </div>
          </div>
        </header>
        {children}
        <footer className='text-center'>
          holoprism project
        </footer>
      </body>
    </html>
  )
}