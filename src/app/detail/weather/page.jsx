'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Header from '@/components/common/header'
import Image from 'next/image'
import LoggedInUser from '@/app/api/login/route'
import WeatherApi from '@/app/api/weather/route'

export default function Home() {
    /*
    const [weatherData, setWeatherData] = useState([])

    const fetchWeatherData = async () => {
        const res = await WeatherApi()
        setWeatherData(res)
    }
    useEffect(() => {
        fetchWeatherData()
    }, [])
    */

    return (
        <>
            <Header />
            <div className='p-10 h-full background'>
                <div className='w-full h-full border border-white'>
                    <p className='font'>상세페이지</p>
                    {/* <WeatherApi />*/}
                </div>
            </div>
        </>
    )
}