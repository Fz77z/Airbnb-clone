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
    <div className="relative flex items-center h-10 my-auto">
        <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
        layout="fill"
        objectFit="contain" objectPosition="left"
        />
        <div className='cursor-pointer h-10 w-5/6 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/6 1xl:w-2/5 2xl:w-4/12 z-50 opacity-80 rounded-md'>
        
        </div>
    </div>

    {/* Middle */}
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input className=' flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 ' type="text" placeholder='Start your search'/>
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
    </div>

    {/* Right */}
    <div className='flex items-center justify-end space-x-4 text-gray-700 cursor-pointer'>
        <p className=' hidden md:inline cursor-pointer' >Become a host</p>
        <GlobeIcon className='h-6' />

    <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
        <MenuIcon className='h-6'/>
        <UserCircleIcon className='h-6'/>
    </div>

    </div>

  </header>;
}

export default Header;
