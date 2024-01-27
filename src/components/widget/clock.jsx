'use client'
import React, { useEffect, useState } from 'react'
import ClockApi from '@/app/api/clock/route'

export default function Home() {
    const [clockData, setClockData] = useState([])

    
    const fetchClockData = async () => {
        const res = await ClockApi()
        setClockData(res)
    }
    useEffect(() => {
        fetchClockData()
    }, [])
    
    return (
        <>
            <div>
                <p></p>
            </div>
        </>
    )
}