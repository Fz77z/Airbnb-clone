import React from 'react';

function Footer() {
  return <div className='grid grid-cols-1 md:grid-cols-4 px-32 2xl:px-64 gap-y-14  py-20 bg-gray-100 text-gray-600  justify-center'>
     
      <div className='space-y-4 text-xs text-gray-800 lg:mx-auto'>
          <h5 className='font-bold'>ABOUT</h5>
          <p className='active:underline cursor-pointer'>How Airbnb works</p>
          <p className='active:underline cursor-pointer'>Newsroom</p>
          <p className='active:underline cursor-pointer'>Investors</p>
          <p className='active:underline cursor-pointer'>Airbnb Plus</p>
          <p className='active:underline cursor-pointer'>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800 lg:mx-auto'>
          <h5 className='font-bold'>COMMUNITY</h5>
          <p className='active:underline cursor-pointer'>Accessibility</p>
          <p className='active:underline cursor-pointer'>This is a Demo-clone Site</p>
          <p className='active:underline cursor-pointer'>By Kane McDermott</p>
          <p className='active:underline cursor-pointer'>Referrals Accepted</p>
          <p className='active:underline cursor-pointer'>Affilates</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800 lg:mx-auto'>
          <h5 className='font-bold'>HOST</h5>
          <p className='active:underline cursor-pointer'>Becoming a Host</p>
          <p className='active:underline cursor-pointer'>Explore Hosting Resources</p>
          <p className='active:underline cursor-pointer'>Terms of Service</p>
          <p className='active:underline cursor-pointer'>Privacy Policy</p>
          <p className='active:underline cursor-pointer'>Code of Conduct</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800 lg:mx-auto'>
          <h5 className='font-bold'>SUPPORT</h5>
          <p className='active:underline cursor-pointer'>Help Centre</p>
          <p className='active:underline cursor-pointer'>Trust & Safety</p>
          <p className='active:underline cursor-pointer'>Frequently Asked Questions</p>
          <p className='active:underline cursor-pointer'>Dispute Policy</p>
          <p className='active:underline cursor-pointer'>Safety information</p>
      </div>
  
  </div>;
}

export default Footer;
