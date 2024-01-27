'use client'
import React, { useEffect, useState } from 'react'
import WeatherApi from '@/app/api/weather/route'

export default function Home() {
    const [weatherData, setWeatherData] = useState([])

    const fetchWeatherData = async () => {
        const res = await WeatherApi()
        setWeatherData(res)
    }
    useEffect(() => {
        fetchWeatherData()
    }, [])
    
    return (
        <>
            <div>
                <p></p>
            </div>
        </>
    )
}