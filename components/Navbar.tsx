"use client"

import { navLinks } from '@/constant'
import { logo } from '@/constant/images'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import React, { useState } from 'react'


const Navbar = () => {
    const pathname = usePathname()
    const [unScrollNavbar,setUnScrollNavbar] = useState(false)


    const changeNavBehaviour = () =>{
        if(window.scrollY >= 300){
           setUnScrollNavbar(true)
        }else(
           setUnScrollNavbar(false)
        )
     }
     if(typeof window !== 'undefined' ){
        window.addEventListener('scroll',changeNavBehaviour)
     }
     

    return (
        <div className={!unScrollNavbar ?'fixed bg-white/35 w-full flex py-3  items-center justify-evenly z-10':'fixed bg-white/95 w-full flex py-3  items-center justify-evenly z-10' }>
             <Image 
                src={logo.afwork}
                alt='Web Logo'
                height={60}
                />
            <div className='flex gap-10'>
                {navLinks.map((nav) => {
                    return (
                       <Link 
                        key={nav.name}
                        href={nav.urlPath}
                        className={cn('font-[Museo-300] font-bold flex gap-2 items-center capitalize hover:text-main-1')}
                        >            
                        <nav.icon /> {nav.name} 
                        </Link> 
                    )
                })}
            </div>
            
        </div>
    )
}

export default Navbar