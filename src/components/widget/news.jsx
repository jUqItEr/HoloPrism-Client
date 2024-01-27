'use client'
import React, { useEffect, useState } from 'react'
import NewsApi from '@/app/api/news/route'

export default function Home() {
    const [newsData, setNewsData] = useState([])

    const fetchNewsData = async () => {
        const res = await NewsApi()
        setNewsData(res)
    }
    useEffect(() => {
        fetchNewsData()
    }, [])
    
    return (
        <>
            <div>
                <p></p>
            </div>
        </>
    )
}