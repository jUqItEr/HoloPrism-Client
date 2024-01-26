'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import LoggedInUser from '@/app/api/login/route'
import WeatherApi from '@/app/api/weather/route'

export default function Home() {
    const [userData, setUserData] = useState([])
    const [pushPage, setPushPage] = useState(false)
    const router = useRouter()
    
    /*
    const fetchUserData = async () => {
        const res = await LoggedInUser()
        setUserData(res)
    }
    useEffect(() => {
        fetchUserData()
        if (pushPage == 'main') {           
            router.push('/')
            console.log("pushPage ok")
        }
    }, [userData, pushPage])
    */

    return (
        <>
            <header>
                <div className='flex items-center justify-end bg-white border border-black p-4 w-full'>
                    <div className='ml-4'>
                    <Image src='/profile.png' alt='profile' className='rounded-full' width={30} height={30} />
                    {/*
                    {userData ? (
                                    <Image src='{userData.profile}' alt='profile' className='rounded-full' width={30} height={30} />
                                    ) : (
                                    <Image src='/profile.png' alt='profile' className='rounded-full' width={30} height={30} />
                                    )}
                    */}
                    </div>
                    <div className='ml-4'>
                    <p className='text-black font-bold text-1xl'>닉네임 입니다</p>
                    {/*
                    {userData ? (
                                    <p className='text-black font-bold text-1xl'>{userData.nickname}<p>
                                    ) : (
                                    <p className='text-black font-bold text-1xl'>Guest</p>
                                    )}
                    */}
                    </div>
                    <div className='ml-4'>
                    <Image src='/notification.png' alt='notification' width={30} height={30} />
                    <span className='absolute top-2 right-2 bg-red-500 text-black rounded-full w-5 h-5 flex items-center justify-center'>
                        99
                    </span>
                    {/*
                    {userData ? (
                                    <span className='absolute top-2 right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>
                                        {userData.messageCount > 99 ? '99+' : userData.messageCount}
                                    </>
                                    ) : (
                                    <span className='absolute top-2 right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>
                                        0
                                    </span>
                                    )}
                    */}
                    </div>
                </div>
            </header>
            <div className='p-10 h-full background'>
                <div className='w-full h-full border border-white'>
                    <p className='font'>상세페이지</p>
                    {/* <WeatherApi />*/}
                </div>
            </div>
        </>
    )
}