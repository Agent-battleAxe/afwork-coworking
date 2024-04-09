"use client"

import { navLinks } from '@/constant'
import { logo } from '@/constant/images'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import { IoMdMenu } from "react-icons/io";


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

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
        <div className={!unScrollNavbar ?'fixed bg-white/35 w-full flex py-3  items-center mobile:justify-between mobile:px-10 justify-evenly z-10':'fixed bg-white/95 mobile:justify-between mobile:px-10 w-full flex py-3  items-center justify-evenly z-10' }>
             <Image 
                src={logo.afwork}
                alt='Web Logo'
                height={60}
                className=''
                />


            {/* Mobile Menu display */}
            <div className='hidden mobile:block'>
                <Sheet>
                    <SheetTrigger>
                        <IoMdMenu className='text-black text-[25px] cursor-pointer'/>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetClose asChild>
                            <section className='flex flex-col gap-5'>
                                {navLinks.map((nav) => {
                                    return (
                                        <Link 
                                            key={nav.name}
                                            href={nav.urlPath}
                                            className={cn('font-[Museo-300] gap-2 flex items-center capitalize hover:text-main-1')}
                                            >            
                                            <nav.icon /> {nav.name} 
                                        </Link> 
                                    )
                                })}
                            </section>
                        </SheetClose>
                        
                    </SheetContent>
                </Sheet>
            </div>



            {/* Large screens display */}
            <div className='flex gap-10 mobile:hidden '>
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