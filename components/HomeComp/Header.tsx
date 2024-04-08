import { bg_images, slider_bg } from '@/constant/images'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'


const Header = () => {
  return (
    <div className='h-[100vh] bg-headers w-full'>
      <div className='size-full bg-black/20 flex items-center justify-center'>
        <div className='w-[40%] text-center relative top-14'>
          <h1 className=' font-extrabold text-[50px] text-white leading-tight'>Trouvez votre espace de bureau a louer chez nous</h1>
          
          <div className='mt-10 py-2 text-white font-bold'>le meilleur endroit pour travailler...</div>
          <Button className='bg-main-1'> Commencer ici </Button>
        </div>


      </div>
    </div>
  )
}

export default Header