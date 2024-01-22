'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Clock from '../components/clock/clock'

export default function Home() {
    const [layoutData, setLayoutData] = useState([
        { item: 'weather', position: { top: 0, left: 0 }, size: { width: 2, height: 1 } },
        { item: 'clock', position: { top: 50, left: 50 }, size: { width: 2, height: 1 } },
    ])

    function handleWeatherRouting() {
        const router = useRouter()
        router.push('/api/weather')
    }

    const getSize = (size) => {
        switch(`${size.width}x${size.height}`) {
            case '1x1':
                return 'w-1/2 h-1/2'
            case '1x2':
                return 'w-1/2 h-full'
            case '2x1':
                return 'w-full h-1/2'
            case '2x2':
                return 'w-full h-full'
            default:
                return ''
        }
    }

    const getPosition = (position) => {
        return `top-${position.top} left-${position.left}`
    }

    /*
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/widget')
                const data = await res.json()
                setLayoutData(data)
                console.log(data)
            } catch (error) {
                console.error('data error', error)
            }
        }
        fetchData()
    }, [])
    */

    return (
        <div className='ml-10 mr-10 mt-10 mb-10 grid grid-cols-2 gap-4 h-screen relative'>
            {layoutData.map((item, index) => {
                const sizeClass = getSize(item.size)
                const positionClass = getPosition(item.position)

                return (
                    <div
                        key={index}
                        className={`border p-4 border-black ${sizeClass} ${positionClass}`}
                    >
                        <p>{item.item}</p>
                    </div>
                )
            })}
        </div>
    )
}