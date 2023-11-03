"use client"
import { fetchUser } from '@/lib/fetcher'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const Sidebar = () => {
    const [cookie, setCookie] = useCookies(["user"])

    useEffect(() => {
        fetchUser(cookie)
    }, [cookie.user])


  return (
    <div className='w-full md:!block sidebar z-10 border-r-2 border-slate-400 md:w-1/2 lg:w-1/3 bg-white h-screen'>
        <div className=''>

        </div>
    </div>
  )
}

export default Sidebar