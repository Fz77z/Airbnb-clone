import Image from 'next/image';
import React from 'react';

function Banner() {
  return <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>

    <Image className="object-[center_bottom] md:object-[center] lg:object-[center_bottom] 2xl:object-[center]"
          // src="https://i.dawn.com/primary/2020/06/5ef4c35d79b45.jpg"
            src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"

        layout='fill'
        objectFit="cover"
        
    />
    <div className='absolute top-1/2 w-full text-center'>
      <p className='text-lg :sm:text-xl text-black text-bold drop-shadow-lg lg:text-2xl xl:text-3xl'>
        Not sure where to go? Perfect.
      </p>

      <button className='sm:mt-4 text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-lg active:scale-90 transistion duration-150'>I'm flexible</button>
      </div>
  </div>;
}

export default Banner;



