import { intallment } from '@/constant'
import React from 'react'

import { bg_images } from '@/constant/images'
import Image from 'next/image'

import { TiTickOutline } from "react-icons/ti";
import { FaChevronRight } from "react-icons/fa";

import { plans } from '@/constant';

const MiddleSec = () => {
  return (
    <div className='px-10 py-16'>
        <h1 className='text-center font-extrabold text-gray-500  text-[30px]'>Installation Disponible</h1>
        <div className=' w-full flex justify-center items-center pt-5'>
            <div className=' w-[70%]'>
                <div className='flex'>
                    {intallment.slice(0,2).map((i,) =>{
                        return (
                            <div key={i.name} className='shadow-xl py-6 px-3'>
                                <div className='flex gap-3 text-gray-500 items-center'>
                                    <i.icon className='text-[45px]'/>
                                    <h1 className='uppercase font-semibold'>{i.name}</h1>
                                </div>
                                <p className='font-extralight text-sm text-gray-500'> {i.desc}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='flex pt-8'>
                    {intallment.slice(2,4).map((i,) =>{
                        return (
                            <div key={i.name} className='shadow-xl py-6 px-3'>
                                <div className='flex gap-3 text-gray-500 items-center'>
                                    <i.icon className='text-[45px]'/>
                                    <h1 className='uppercase font-semibold'>{i.name}</h1>
                                </div>
                                <p className='font-extralight text-sm text-gray-500'> {i.desc}</p>
                            </div>
                        )
                    })}
                </div>


            </div>
        </div>

        {/* About Us Section */}
        <div id='about_sec' className='flex px-16 py-16 justify-center items-center gap-10'>
            <Image
                src={bg_images.about_1}
                alt='About us'
                height={340}
            />
            <div className='w-[40%] '>
                <h1 className='font-bold text-main-1 text-[30px]  '>A Propos de Nous</h1>
                <p className=' pt-5 text-gray-500 text-sm text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, 
                    dolores eaque dolorum odit quibusdam nihil voluptatum. Nemo consequuntur 
                    eos vitae nesciunt distinctio ullam animi sunt optio aliquam praesentium? Quidem, accusantium.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, 
                    dolores eaque dolorum odit quibusdam nihil voluptatum. Nemo consequuntur 
                    eos vitae nesciunt distinctio ullam animi sunt optio aliquam praesentium? Quidem, accusantium.</p> 
                    <p className='pt-5 text-gray-500 text-sm text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, 
                        modi consequuntur. Tempora dolorem accusantium nihil veritatis!</p>
            </div>
        </div>

        {/* Pricing Section */}
        <h1 id='pricing_sec' className='text-left text-sm bg-main-1 w-fit ml-52 mt-5 px-5 py-1 text-white font-bold'>Nos Tarifs</h1>
        <div>
            <p className='pt-5 pl-52 text-gray-500 text-sm text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, 
                        modi consequuntur. Tempora dolorem accusantium nihil veritatis!</p>

            <div className='flex px-8 gap-5 items-center py-10'>
                {plans.slice(0,2).map((i) =>{
                    return(
                        <div key={i.name} className='shadow-xl w-[25%] h-[300px] px-5 py-2'>
                            <div className='py-5'>
                                <h1 className=' text-center text-lg font-bold text-gray-700'>{i.name} </h1>
                                <p className='text-center text-gray-500 text-sm font-light'> Lorem ipsum, dolor sit amet </p>
                            </div>
                            
                            <div className='w-full h-0.5 bg-gray-300'></div>
                            <div className='pt-5 text-center'>
                                <h1 className='font-thin text-xl ' >{i.price_h} / heure </h1>
                                <h1 className='font-thin text-xl ' >{i.price_d} / jour </h1>
                               <div className='pt-5'>
                                    <p className='flex gap-2 items-center justify-center'><TiTickOutline className='text-[21px] text-main-1' /> {i.adv.first}</p>
                                    <p className='flex gap-2 items-center justify-center'><TiTickOutline className='text-[21px] text-main-1' /> {i.adv.second}</p>
                                    
                               </div>
                               
                            </div>
                        </div>
                    )
                }) }

                {plans.slice(2,3).map((i) =>{
                    return(
                        <div key={i.name} className='shadow-xl bg-main-1 w-[25%] h-[400px] px-5 py-2'>
                            <div className='py-5'>
                                <h1 className=' text-center text-lg font-bold text-gray-700'>{i.name} </h1>
                                <p className='text-center text-white text-sm font-light'> Lorem ipsum, dolor sit amet </p>
                            </div>
                            
                            <div className='w-full h-0.5 bg-black'></div>
                            <div className='pt-5 text-center'>
                                <h1 className='font-extralight text-white text-xl ' >{i.price_d} / mois </h1>
                               <div className='pt-5'>
                                    <h1 className='text-white font-bold font-[Museo-300] uppercase'>Free Access</h1>
                                    <div className='py-3'>
                                        <p className='flex  items-center justify-center'><FaChevronRight className='text-black' /> {i.access?.first}</p>
                                        <p className='flex  items-center justify-center'><FaChevronRight className='text-black' /> {i.access?.second}</p>
                                        <p className='flex  items-center justify-center'><FaChevronRight className='text-black' /> {i.access?.third}</p>
                           
                                    </div>
                                    <div className='w-full h-0.5 mb-3 bg-black'></div>
                                    <p className='flex gap-2 items-center justify-center'><TiTickOutline className='text-[21px] text-white' /> {i.adv.first}</p>
                                    <p className='flex gap-2 items-center justify-center'><TiTickOutline className='text-[21px] text-white' /> {i.adv.second}</p>
                                    
                               </div>
                               
                            </div>
                        </div>
                    )
                }) }

                {plans.slice(3,4).map((i) =>{
                    return(
                        <div key={i.name} className='shadow-xl w-[25%] h-[300px] px-5 py-2'>
                            <div className='py-5'>
                                <h1 className=' text-center text-lg font-bold text-gray-700'>{i.name} </h1>
                                <p className='text-center text-gray-500 text-sm font-light'> Lorem ipsum, dolor sit amet </p>
                            </div>
                            
                            <div className='w-full h-0.5 bg-gray-300'></div>
                            <div className='pt-5 text-center'>
                                <h1 className='font-thin text-xl ' >{i.price_h} / heure </h1>
                                <h1 className='font-thin text-xl ' >{i.price_d} / jour </h1>
                               <div className='pt-5'>
                                    <p className='flex gap-2 items-center justify-center'><TiTickOutline className='text-[21px] text-main-1' /> {i.adv.first}</p>
                                    <p className='flex gap-2 items-center justify-center'><TiTickOutline className='text-[21px] text-main-1' /> {i.adv.second}</p>
                                    
                               </div>
                               
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
 
    </div>
  )
}

export default MiddleSec