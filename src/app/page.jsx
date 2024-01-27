'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import LoggedInUser from '../app/api/login/route'
import WeatherApi from '../app/api/weather/route'
import NewsApi from '../app/api/news/route'
import ClockApi from '../app/api/clock/route'
import NoticeApi from '../app/api/notice/route'
import StockApi from '../app/api/stock/route'

export default function Home() {
    const router = useRouter()
    const [userData, setUserData] = useState([
        { item: 'weather', position: { top: 0, left: 0 }, size: { width: 200, height: 200 } },
        { item: 'news', position: { top: 15, left: 5 }, size: { width: 100, height: 100 } },
        { item: 'stock', position: { top: 5, left: 10 }, size: { width: 200, height: 100 } },
    ])
    const [pushPage, setPushPage] = useState(false)
    /*
    const fetchUserData = async () => {
        const res = await LoggedInUser()
        setUserData(res)
    }

    useEffect(() => {
        fetchUserData()
        if (pushPage == 'weather') {           
            router.push('/weather')
            console.log("pushPage ok")
        }
    }, [userData, pushPage])
    */

    const getWidth = (size) => {
        return size.width === 100 ? 'w-1/4' : 'w-1/2';
    }
    const getHeight = (size) => {
        return size.height === 100 ? 'h-1/4' : 'h-1/2';
    }
    const getTop = (position) => {
        if (position.top === 5) return 'top-1/4'
        else if (position.top === 10) return 'top-1/2'
        else if (position.top === 15) return 'top-3/4'
    }
    const getLeft = (position) => {
        if (position.left === 5) return 'left-1/4'
        else if (position.left === 10) return 'left-1/2'
        else if (position.left === 15) return 'left-3/4'
    }

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
                <div className='w-full h-full grid grid-cols-4 grid-rows-4 relative'>
                    {userData.map((item, index) => {
                        const widthClass = getWidth(item.size)
                        const heightClass = getHeight(item.size)
                        const topClass = getTop(item.position)
                        const leftClass = getLeft(item.position)

                        let widget
                        {/*
                        switch (item.item) {
                            case 'weather':
                                widget = <WeatherApi />
                                break;
                            case 'news':
                                widget = <NewsApi />
                                break;
                            case 'clock':
                                widget = <ClockApi />
                                break;
                            case 'notice':
                                widget = <NoticeApi />
                                break;
                            case 'stock':
                                widget = <StockApi />
                                break;
                            default:
                                widget = null
                                break;
                        }
                        */}

                        return (
                            <div
                                key={index}
                                className={`font border p-4 border-white
                                absolute ${widthClass} ${heightClass} ${topClass} ${leftClass}`}
                            >
                                {widget}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}