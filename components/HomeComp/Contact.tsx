"use client"

import React, { useState,useEffect,useRef} from 'react'

import emailjs from '@emailjs/browser';

import { GoCommentDiscussion } from "react-icons/go";

import { SlBubbles } from "react-icons/sl";
import { IoIosChatbubbles,IoIosSend  } from "react-icons/io";

import { bg_images } from '@/constant/images';
import Image from 'next/image';
import { Blocks, Oval, RotatingLines } from 'react-loader-spinner';
import { Button } from '../ui/button';

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [alreadySend, setAlreadySend] = useState(false)
  const [error, setError] = useState(String)

  const [user_name, SetUserName] = useState(String)
  const [user_email, SetUserEmail] = useState(String)
  const [user_message, SetUsermessage] = useState(String)

  const sendEmail = (e:any) => {
    e.preventDefault();

    setLoading(true)
    const serviceId = `${process.env.NEXT_PUBLIC_EMAILJS_GMAIL_SERVICE_ID}`
    const templateId = `${process.env.NEXT_PUBLIC_EMAILJS_GMAIL_TEMPLATE_ID}`
    const publicKey =  `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`

    const templateParams = {
      from_name : user_name,
      from_email : user_email,
      to_name: 'Afwork Coworking', 
      message : user_message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      setAlreadySend(true)
      SetUserName('')
      SetUserEmail('')
      SetUsermessage('')
      setLoading(false)
    }).catch((err: any) =>{
      console.log(err)
      setLoading(false)
      setError('Message Non Envoyé')
      setAlreadySend(false)
    })
 
  };

  
  return (
    <div id='contact_sec' className=''>
      <h1 className='text-center font-extrabold text-gray-500  text-[25px]'>Contactez Nous</h1>
        <div className='h-[inherit] bg-white/20 flex justify-center items-center'>
            <div className='h-[600px] w-[40%] bg-white px-5 py-5' >
                <IoIosChatbubbles  className='text-[70px] text-main-1 relative left-[50%] translate-x-[-50%] '/>
                <h1 className='font-bold text-center pt-2 text-[25px] capitalize text-black/60'>Vous avez des questions?</h1>
                <p className='pt-1 font-thin text-[13px] text-center'>Posez la ici dans ce formulaire s'il vous plait</p>

                {alreadySend && (
                  <div className='pt-10 text-center'>
                    <h1 className='text-[27px] font-semibold text-main-1'>Merci pour votre message!</h1>
                    <p className='text-gray-400 pt-5 w-[80%] relative left-[50%] translate-x-[-50%]'>Votre message a bien été envoyé avec success. Merci de patienter, nous vous repondons sous peux</p>
                    <Button className='bg-main-1 mt-5' onClick={()=>{setAlreadySend(false); setLoading(false)}}> Poser une autre question </Button>
                  </div>
                )}
                {!alreadySend && (
                  <form onSubmit={sendEmail}  className='px-10 pt-8'>
                  <label className='font-bold text-gray-400 text-[14px]'>Nom Complet *</label>
                  <input type="text" name='user_name' required className='w-full mt-2 mb-1.5 px-2 py-2 border border-gray-300 rounded-md' placeholder='John' onChange={(e:any)=> SetUserName(e.target.value)}/>

                  <label  className='font-bold text-gray-400 text-[14px]'>Email *</label>
                  <input type="email" required name='user_email' className='w-full mt-2  mb-1.5 px-2 py-2 border border-gray-300 rounded-md' placeholder='...@mail.co' onChange={(e:any)=> SetUserEmail(e.target.value)}/>

                  <label  className='font-bold text-gray-400 text-[14px]'>Votre message *</label>
                  <textarea name="message" required id="" rows={5} onChange={(e:any)=> SetUsermessage(e.target.value)} className='w-full mt-2 px-2 py-2 border border-gray-300 rounded-md' placeholder='Salut, Entrez votre message ici'></textarea>
                  
                  
                  {loading && (
                    <div className='flex justify-center pt-2'>
                       <RotatingLines visible={true} width="50" />
                    </div>
                  )}
                  {!loading && (
                    <button type='submit' className='w-full flex justify-center gap-1 items-center py-3 mt-2 rounded-md text-white bg-main-1 border border-main-1 font-semibold hover:bg-transparent hover:text-main-1'>
                    Envoyer <IoIosSend className='text-[25px]' />
                    </button>
                  )}
                  
              </form>
                )}
                

            </div>
            <Image
              src={bg_images.contact_1}
              alt='Contact-image'
              height={350}
              className='w-[40%]'
            
            />
        </div>
    </div>
  )
}

export default Contact