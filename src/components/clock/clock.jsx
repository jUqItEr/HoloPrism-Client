'use client'
import { useEffect, useState } from "react"

const Clock = () => {
    const [time, setTime] = useState(new Date())
    const [isZommed, setIsZoomed] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [time])

    const toggleZoom = () => {
        setIsZoomed(!isZommed)
      };

    const zoomContainer = {
        width: isZommed ? '130%' : '100%',
        height: isZommed ? '120%' : '100%'
    }

    const zoomFont = {
        fontSize: isZommed ? '40px' : '25px'
    }

    const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    const dayOfWeekIndex = time.getDay()
    const dayOfWeek = daysOfWeek[dayOfWeekIndex]
    const formattedDate = time.toLocaleDateString()
    const formattedTime = time.toLocaleTimeString()

    return (
        <div style={zoomContainer} onClick={toggleZoom}>
            <p className='text-center' style={zoomFont}>
                {formattedTime} <br />
                {formattedDate} {dayOfWeek}
            </p>
        </div>
    )
}

export default Clock;