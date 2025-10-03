import React from 'react'
import { FaInstagram ,FaFacebookF,FaTwitter,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='  bg-cover bg-center bg-[url("Footer.jpg")] w-full h-150  px-30  text-white' >
        <p className='font-bold  text-9xl  text-white pl-60 pb-10'>VerdaAgro</p>
            <div className='border-2 border-transparent px-14 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 backdrop-blur-sm rounded-4xl shadow-2xl'>
                <div  className=''>
                  <p className='text-xl ' >Driven by passion. Grounded in
                    <br/> purpose. Focused on results.</p>
                  <p className=' py-5 text-2xl font-bold text-amber-400'>Vara@gmail.com</p>
                  <p className='text-2xl font-bold  text-amber-400'>+1 800 123 46 57</p>
                  <div className=' py-10 flex gap-6 '>
                  <p  ><FaInstagram/></p>
                  <p><FaFacebookF/></p>
                  <p><FaTwitter/></p>
                  <p><FaLinkedin/></p>
                  </div>
                  
                </div>
                <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-xl'>
                 <div>
                      <p className='font-bold text-2xl pb-3'>Useful Links</p>
                      <p>Home</p>
                      <p>About Us</p>
                      <p>Blogs</p>
                      <p>Shop</p>
                      <p>Contact Us</p>
                 </div>
                 <div>
                    <p  className='font-bold text-2xl pb-3'>Subscribe</p>
                    <p className='pb-3'>Our expertise, as well as our passion for web design, sets us apart from other agencies.</p>
                   
                 </div>
                
                  
                </div>
                 <p className='text-xl pt-6'>©2025 VerdaAgro  All Rights Reserved</p> 
                </div>
               
         </div>
      
    </div>
  )
}

export default Footer