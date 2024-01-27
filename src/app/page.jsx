'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Headers from '../components/common/header'
import Image from 'next/image'
import LoggedInUser from '../app/api/login/route'
import WeatherApi from '../components/widget/weather'
import NewsApi from '../components/widget/news'
import ClockApi from '../components/widget/clock'
import NoticeApi from '../components/widget/notice'
import StockApi from '../components/widget/stock'

export default function Home() {
    const router = useRouter()
    const [userData, setUserData] = useState([])
    const [pushPage, setPushPage] = useState(false)
    
    /*
    const fetchUserData = async () => {
        const res = await LoggedInUser()
        console.log(res)
        setUserData(res)
    }

    useEffect(() => {
        fetchUserData()

        if (pushPage == 'weather') {           
            router.push('/detail/weather')
            console.log("pushPage ok")
        }
        
    }, [userData])
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
            <Headers />
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