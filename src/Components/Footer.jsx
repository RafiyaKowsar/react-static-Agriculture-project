import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-cover bg-center bg-[url("/Footer1.jpg")] w-full  px-4 py-10 md:px-12 lg:px-32 text-white '>
  
      <p className='font-bold text-3xl md:text-5xl lg:text-8xl text-white text-center  pb-8 hover:text-amber-800  '>
        VerdaAgro</p>
      <div className='backdrop-blur-md rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10'>
        <div>
          <p className='text-base md:text-lg'>Driven by passion. Grounded in<br />purpose. Focused on results.</p>
          <p className='py-4 text-lg font-bold text-amber-400'>Vara@gmail.com</p>
          <p className='text-lg font-bold text-amber-400'>+1 800 123 46 57</p>
          <div className='py-6 flex gap-6 text-xl'>
            <FaInstagram className='hover:text-amber-800 ' />
            <FaFacebookF className='hover:text-amber-800 ' />
            <FaTwitter className='hover:text-amber-800 ' />
            <FaLinkedin className='hover:text-amber-800 ' />
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-base'>
            <div>
             <p className='font-bold text-xl pb-2'>Useful Links</p>
            <Link to="/" >  <p className='hover:text-amber-800 '>Home</p></Link>
             <Link to="/about" > <p className='hover:text-amber-800 '>About Us</p></Link>
             <Link to="/blogs" > <p className='hover:text-amber-800 '>Blogs</p></Link>
             <Link to="/shop2" ><p className='hover:text-amber-800 '>Shop</p></Link>
             <Link to="/contact" > <p className='hover:text-amber-800 '>Contact Us</p></Link>
            </div>
            <div>
              <p className='font-bold text-xl pb-2'>Subscribe</p>
              <p className='hover:text-amber-800'>   Our expertise, as well as our passion for web design, sets us apart from other agencies. </p>
            </div>
          </div>
          <p className='text-sm pt-6 hover:text-amber-800 '>©2025 VerdaAgro. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
