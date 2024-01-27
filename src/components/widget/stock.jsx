'use client'
import React, { useEffect, useState } from 'react'
import StockApi from '@/app/api/stock/route'

export default function Home() {
    const [stockData, setStockData] = useState([])

    const fetchStockData = async () => {
        const res = await StockApi()
        setStockData(res)
    }
    useEffect(() => {
        fetchStockData()
    }, [])
    
    return (
        <>
            <div>
                <p></p>
            </div>
        </>
    )
}