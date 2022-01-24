import React from 'react';
import Image from 'next/image';
import { 
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon, 
    GlobeIcon} from '@heroicons/react/solid'

function Header() {
  return <header className="sticky top-0 z-40 grid grid-cols-3 gap-4 bg-white shadow-md p-5 md:px-10 ">
    
    {/* left */}
  
  
    <div className="relative flex h-10 my-auto">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
         className='w-auto h-10 cursor-pointer mx-auto'

        />
    </div>
  
    {/* <div className="relative flex items-center h-10 my-auto bg-red-500">
        <Image
        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
        
        layout="fill"
        objectFit="contain" objectPosition="center"
        className='cursor-pointe'
        />
    </div> */}

    {/* Middle */}
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm hover:shadow-md focus:shadow-md transistion duration-150'>
        <input className=' flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 ' type="text" placeholder='Start your search'/>
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 ' />
    </div>

    {/* Right */}
    <div className='flex items-center justify-center  text-gray-700'>
        <p className=' hidden md:inline cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-full' >Become a host</p>
        <div className='cursor-pointer hover:bg-gray-100 px-3 py-3 rounded-full  mr-1'>
        <GlobeIcon className='h-6  cursor-pointer' />
        </div>

    <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md transistion duration-150'>
        <MenuIcon className='h-6'/>
        <UserCircleIcon className='h-6'/>
    </div>

    </div>

  </header>;
}

export default Header;
