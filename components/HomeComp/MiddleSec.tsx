import { intallment } from '@/constant'
import React from 'react'

import { bg_images } from '@/constant/images'
import Image from 'next/image'

import { TiTickOutline } from "react-icons/ti";
import { FaChevronRight } from "react-icons/fa";

import { plans } from '@/constant';

const MiddleSec = () => {
  return (
    <div className='px-10 laptop:px-5 tablet:px-5 mobile:px-2 py-16'>
        <h1 className='text-center font-extrabold text-gray-500  text-[30px]'>Installation Disponible</h1>
        <div className=' w-full flex mobile:flex-col mobile:items-center justify-center items-center pt-5'>
            <div className=' w-[70%] tablet:w-[90%] mobile:w-full'>
                <div className='flex mobile:flex-col mobile:items-center'>
                    {intallment.slice(0,2).map((i,) =>{
                        return (
                            <div key={i.name} className='shadow-xl w-[50%] mobile:w-[98%] py-6 px-3'>
                                <div className='flex gap-3 text-gray-500 items-center'>
                                    <i.icon className='text-[45px]'/>
                                    <h1 className='uppercase font-semibold'>{i.name}</h1>
                                </div>
                                <p className='font-extralight text-sm text-gray-500'> {i.desc}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='flex pt-8 mobile:flex-col mobile:items-center'>
                    {intallment.slice(2,4).map((i,) =>{
                        return (
                            <div key={i.name} className='shadow-xl w-[50%] mobile:w-[98%] py-6 px-3'>
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
        <div id='about_sec' className='mobile:block tablet:block flex mobile:px-5 px-16 tablet:px-10 py-16 justify-center items-center gap-10'>
            <Image
                src={bg_images.about_1}
                alt='About us'
                height={340}
                className='laptop:w-[35%] tablet:h-[300px] mobile:-[250px]'
            />
            <div className='w-[40%] laptop:w-[60%] tablet:w-full mobile:w-full tablet:pt-10 mobile:pt-10 '>
                <h1 className='font-bold text-main-1 text-[30px]  '>A Propos de Nous</h1>
                <p className=' pt-5 text-gray-500 text-sm text-justify'>
                    Bienvenue chez Afwork Coworking, votre espace de travail collaboratif par excellence. 
                    Nous sommes passionnés par la création d'un environnement professionnel dynamique et inspirant, 
                    conçu pour stimuler la créativité, favoriser les connexions et encourager la croissance de votre entreprise. À Afwork Coworking, 
                    nous croyons fermement au pouvoir de la collaboration et de la communauté. 
                    Notre espace moderne et accueillant est conçu pour répondre aux besoins divers des travailleurs indépendants, 
                    des entrepreneurs, des petites entreprises et des professionnels nomades.</p> 
                    <p className='pt-5 text-gray-500 text-sm text-justify'>Notre mission est de fournir un espace de travail flexible, 
                    de haute qualité et abordable où les individus et les entreprises peuvent s'épanouir et prospérer!</p>
            </div>
        </div>

        {/* Pricing Section */}
        <h1 id='pricing_sec' className='text-left text-sm bg-main-1 w-fit mobile:ml-2 ml-52 tablet:ml-10 laptop:ml-20 mt-5 mobile:mt-0 px-5 py-1 text-white font-bold'>Nos Tarifs</h1>
        <div>
            <p className='pt-5 pl-52 laptop:pl-20 mobile:pl-2 tablet:pl-10 text-gray-500 text-sm text-justify'>Découvrez nos tarifs flexibles conçus pour répondre à vos besoins spécifiques en matière d'espace de travail. Explorez nos offres tarifaires transparentes et trouvez la solution idéale pour votre entreprise</p>

            <div className='tablet:block mobile:flex-col flex px-8 laptop:px-2 laptop:gap-3 gap-5 items-center py-10'>
                {plans.slice(0,2).map((i) =>{
                    return(
                        <div key={i.name} className='tablet:inline-block shadow-xl w-[25%] mobile:w-full tablet:w-[50%] laptop:w-[27%] laptop:h-[350px] h-[300px] px-5 py-2'>
                            <div className='py-5'>
                                <h1 className=' text-center text-lg font-bold text-gray-700'>{i.name} </h1>
                                <p className='text-center text-gray-500 text-sm font-light'> {i.desc} </p>
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
                        <div key={i.name} className='tablet:inline-block shadow-xl tablet:mt-5 bg-main-1 w-[25%] mobile:w-full tablet:w-[50%] laptop:w-[27%] laptop:h-[450px] h-[400px] px-5 py-2'>
                            <div className='py-5'>
                                <h1 className=' text-center text-lg font-bold text-gray-700'>{i.name} </h1>
                                <p className='text-center text-white text-sm font-light'>  {i.desc} </p>
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
                        <div key={i.name} className='tablet:inline-block shadow-xl w-[25%] mobile:w-full tablet:w-[50%] laptop:w-[27%] laptop:h-[350px]  h-[300px] px-5 py-2'>
                            <div className='py-5'>
                                <h1 className=' text-center text-lg font-bold text-gray-700'>{i.name} </h1>
                                <p className='text-center text-gray-500 text-sm font-light'>  {i.desc} </p>
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