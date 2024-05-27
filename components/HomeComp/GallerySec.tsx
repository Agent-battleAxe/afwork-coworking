import React from 'react'



import { galery_img } from '@/constant/images';
import Image from 'next/image'
const GallerySec = () => {
  return (
    <div  id='gallery_sec' className='px-10 mobile:px-4'>
        <h1 className='text-center font-extrabold text-gray-500  text-[25px]'>Nos Locaux</h1>
        <div className='mobile:columns-1 columns-3 gap-5 mobile:px-0 tablet:px-1 px-40 w-full mx-auto space-y-5 mobile:space-y-2 pb-20 pt-10'>
            {galery_img.map((img, i) =>{
                return (
                    <div key={i} className='bg-gray-200 break-inside-avoid'>
                        <Image 
                            alt='Afwork Images'
                            src={img}
                        />
                    </div>
                )
            })}
           
        </div>
    </div>
  )
}

export default GallerySec