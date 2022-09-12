import Image from 'next/image';
import React from 'react';
import banner from '../public/banner.jpg';

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image             
            src={banner}
            layout='fill'
            objectFit='cover'
            objectPosition='bottom'
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className='text-white text-lg sm:text-xl'>Find your drive</p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Explore</button>
        </div>
    </div>
  )
}

export default Banner