'use client'
import React, { useEffect, useState } from 'react'
import NoticeApi from '@/app/api/notice/route'

export default function Home() {
    const [noticeData, setNoticeData] = useState([])

    
    const fetchNoticeData = async () => {
        const res = await NoticeApi()
        setNoticeData(res)
    }
    useEffect(() => {
        fetchNoticeData()
    }, [])
    
    return (
        <>
            <div>
                <p></p>
            </div>
        </>
    )
}