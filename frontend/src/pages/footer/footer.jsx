import React from 'react'
import "./footer.css"
import { Heart } from 'lucide-react'

function Footer() {
  return (
    <div className='w-full text-center text-white bg-black p-4 flex justify-center items-center gap-2'>
        Developed by the Web Team with <Heart className='h-4 text-yellow-400 fill-yellow-400' /> | Institute Technical Council 2024
        </div>
  )
}

export default Footer