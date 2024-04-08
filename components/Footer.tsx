import React from 'react'

import { FaPhoneAlt,FaFacebook,FaInstagram,FaTwitterSquare,FaWhatsapp,FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { logo } from '@/constant/images'
import Image from 'next/image';


const Footer = () => {
  return (
    <div className='bg-main-1/15'>
      <div className='flex pt-10 pb-7 justify-center'>
        <div className='w-[25%]'>
          <Image src={logo.afwork} alt="" className='h-[70px] w-[170px] ' />
          <div className='pt-3 w-[90%] text-[14px] text-black font-medium'>Faite nous confiance pour votre confort et tranquillité durant votre travaille</div>
        </div>

        <div className='w-[20%]'>
          <h1 className='font-light text-[30px] text-black '>Explorer Plus</h1>
          <div className='w-[50%] bg-black h-0.5'></div>
          <ul className='text-[17px] font-semibold pt-9'>
            <li className='hover:text-main-1 text-sm hover:font-bold'><a href="">Acceuil</a></li>
            <li className='hover:text-main-1 pt-3 text-sm hover:font-bold'><a href="">A Propos</a></li>
            <li className='hover:text-main-1 pt-3 text-sm hover:font-bold'><a href="">Nos Tarifs</a></li>
            <li className='hover:text-main-1 pt-3 text-sm hover:font-bold'><a href="">Gallery</a></li>
            <li className='hover:text-main-1 pt-3 text-sm hover:font-bold'><a href="">Contact</a></li>
          </ul>
        </div>

        <div className=' w-30%'>
          <h1 className='px-14 py-3 border-2 border-black font-bold text-[25px] text-black '>Rejoignez Nous</h1>

          <div className='pt-5'>
            <p className='text-[18px] '>Situé a l'Ecole de police, Yaounde</p>
            <p className='text-[18px]'>CAMEROUN</p>

            <p className='pt-3 flex items-center gap-3 text-[17px] '>
              <FaPhoneAlt />
              +237 651071907
            </p>

            <p className='pt-1 flex items-center gap-3 text-[17px]'>
              <MdOutlineEmail className='text-[20px]' />
              ousman.sadia@gmail.com
            </p>

            <div className='pt-4 flex items-center  gap-5 text-[25px]'>
              <FaFacebook className='hover:text-main-1 cursor-pointer ' />
              <FaInstagram className='hover:text-main-1 cursor-pointer '/>
              <FaWhatsapp className='hover:text-main-1 cursor-pointer ' />
              <FaTwitterSquare className='hover:text-main-1 cursor-pointer ' />
              <FaLinkedinIn className='hover:text-main-1 cursor-pointer ' />
            </div>
          </div>
        </div>
        
      </div>
      <div className='text-center text-xs font-semibold py-3 bg-black text-white'>&#169; Copyright 2024 AfWork Coworking, Tous droits reservés</div>
    </div>
  )
}

export default Footer