import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';



const Contact =()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert with "Data saving..." and the JSON
    alert(`Data saving...\n\n${JSON.stringify(formData)}`);

    // Optional: clear the form
    setFormData({
      name: "",
      email: "",
      comment: "",
    });
  };

  return(
    <>
    <div className='bg-cover bg-center  bg-[url("/co.png")] w-full h-120   pt-50  text-white'>
        <p className='text-xl font-bold lg:text-5xl flex justify-center'>Contact Us</p>
        <div className='flex justify-center gap-10 py-10'>
         <Link to="/"><p className='border  px-6 py-1 rounded-xl bg-amber-700'>Home</p> </Link>
         <Link to="/contact" ><p className='border px-6 py-1 rounded-xl bg-amber-700'>Contacts</p></Link>
         </div>
    </div>
     <section className=" lg:my-20 md:my-10 bg-gray-50 p-6 md:p-12 lg:p-20 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 max-w-7xl mx-auto ">
      <div className="flex-1 max-w-md">
        <h2 className="text-xl font-bold mb-6 lg:text-3xl">Contacts</h2>
        <div className="mb-8">
          <h3 className="font-semibold mb-2">We are Here:</h3>
          <p className="text-gray-700 ">
            27 Division St, New York, <br /> NY 10002, USA
          </p>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold mb-2 lg:text-2xl">Send Mail:</h3>
          <p className="text-gray-700 ">verdaagro@mail.com</p>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold mb-2 lg:text-2xl">Call Us:</h3>
          <p className="text-gray-700 ">+1 800 432 45 34</p>
        </div>

        <div className='py-6 flex gap-6 text-xl'>
                   <FaInstagram className='hover:text-amber-800 ' />
                   <FaFacebookF className='hover:text-amber-800 ' />
                   <FaTwitter className='hover:text-amber-800 ' />
                   <FaLinkedin className='hover:text-amber-800 ' />
                 </div>
      </div>

     
      <div className="flex-1 max-w-lg">
        <h2 className="text-xl font-bold mb-6 lg:text-3xl">Get in Touch</h2>
        <p className="text-gray-600 mb-6 max-w-xs">
          Your email address will not be published. Required fields are marked *
        </p>

       <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
         className="border-b border-gray-300 focus:border-olive-600 focus:outline-none pb-2 text-gray-700" required/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}
          className="border-b border-gray-300 focus:border-olive-600 focus:outline-none pb-2 text-gray-700"   required />
        <textarea name="comment" placeholder="Your Comment"  value={formData.comment} onChange={handleChange}
          className="border border-gray-300 rounded-md p-3 resize-none focus:border-olive-600 focus:outline-none text-gray-700">
        </textarea>

        <button type="submit" className="bg-olive-600 text-white font-semibold rounded-md py-4 px-8 w-max  bg-amber-200 :bg-amber-900" >
          Get in Touch
        </button>
      </form>
      </div>

      <div className="flex-1 max-w-md">
        <iframe title="London Eye Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19874.97924837746!2d-0.12181895727412887!3d51.50332450803419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c9b8b3a4a3%3A0x2bb474a5f4e792e6!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1696285336107!5m2!1sen!2suk" 
        width="100%" height="400"  className="rounded-md shadow-md" ></iframe>
      </div>
    </section>

    <section>
       <div className="bg-gray-100 px-4 py-10 lg:my-20 md:my-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl p-6 text-center shadow-md    border border-amber-800 hover:shadow-lg hover:scale-108 active:scale-95 transition-all duration-200 cursor-point">
         
          <div className="text-4xl text-amber-800  mb-2 mx-auto">
            <MdEmail />
          </div>
          <h2 className="text-xl font-semibold mb-1">Mail Us:</h2>
          <p className="text-gray-700 mb-4 break-words">verda@mail.com</p>
          <button className=" bg-amber-100 font-semibold px-5 py-2 rounded-xl hover:bg-amber-800 ">
            Send an Email
          </button>
        </div>

        <div className=" border rounded-2xl p-6 text-center shadow-md border border-amber-800 hover:shadow-lg hover:scale-108 active:scale-95 transition-all duration-200 cursor-point">
          <div className="text-4xl text-amber-800  mb-2 mx-auto">
            <MdPhone />
          </div>
          <h2 className="text-xl font-semibold mb-1">Call Us:</h2>
          <p className="text-gray-700 mb-4">+1 800 123 46 57</p>
          <button className="bg-amber-100  font-semibold px-5 py-2 rounded-xl hover:bg-amber-800 ">
            Call Us Daily
          </button>
        </div>

        <div className=" rounded-2xl p-6 text-center shadow-md border border-amber-800 hover:shadow-lg hover:scale-108 
                     active:scale-95 transition-all duration-200 cursor-point" >
          <div className="text-4xl text-amber-800 mb-2 mx-auto">
            <MdLocationOn />
          </div>
          <h2 className="text-xl font-semibold mb-1">Visit Us:</h2>
          <p className="text-gray-700 mb-4">27 Division St, New York</p>
          <button className="bg-amber-100 font-semibold px-5 py-2 rounded-xl hover:bg-amber-800">
            Get Directions
          </button>
        </div>

       </div>
     </div>
    </section>
    
</>
  

)}

export default Contact;