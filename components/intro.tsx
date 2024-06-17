import Image from 'next/image'
import React from 'react'

export default function intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <Image src={"https://media.licdn.com/dms/image/D4D35AQFaMIMgb7N8Gg/profile-framedphoto-shrink_200_200/0/1716699111859?e=1719201600&v=beta&t=pyrXOkWVLGDd7sVEbatIKaaVf5NReQJyiUgL_jD3MZo"} alt="Vitor Rodrigues ( Retrato )" 
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />

            <span className='text-4x1'>🙌</span>
        </div>
    </section>
  )
}
