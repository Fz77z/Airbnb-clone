import Image from 'next/image';
import React from 'react';

function Banner() {
  return <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[1000px]'>


    <Image className="object-[center_bottom]" 
        src="https://web.archive.org/web/20210725183154im_/https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout='fill'
        objectFit="cover" />


      <p className='absolute 2xl:top-40 2xl:w-1/2 2xl:left-60 2xl:right-50 2xl:text-8xl xl:top-40 xl:w-1/2 xl:left-36 xl:right-50 xl:text-7xl lg:top-28 lg:w-1/2 lg:left-24 lg:right-50 lg:text-6xl md:top-16 md:w-1/2 md:left-14 md:right-50 md:text-5xl sm:top-16 sm:w-1/2 sm:left-14 sm:right-50 sm:text-4xl top-12 w-1/2 left-12 right-50 text-3xl text-white font-bold shadow-sm	'>
      Olympian &  <br></br>Paralympian<br></br> Online<br></br> Experiences
      </p>

      <div className='absolute 2xl:top-80 2xl:py-60 2xl:left-60 xl:top-52 xl:py-60 xl:left-36 lg:top-28 lg:py-60 lg:left-24 md:top-14 md:py-52 md:left-14 sm:top-20 sm:py-36 sm:left-14 top-12 py-36 left-10'>
      <button className='sm:mt-4 text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-lg active:scale-90 transistion duration-150 '>Explore Now</button>
      </div>
  </div>;
}

export default Banner;



