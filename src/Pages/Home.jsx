import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';

import { FaLeaf, FaTractor, FaCog } from 'react-icons/fa';

 const carouselItems = [
    'Home.png',
    'Blog4.png',
    'About1.png',
    'Track.png',
  ];

const Home = () => {

  
  const images = [
  { src: '/Wheat.png', title: 'Wheat' },
  { src: 'Peas.png', title: 'Peas' },
  { src: '/Corn.png', title: 'Corn' },
  { src: '/Harvest.png', title: 'Harvest' },
  { src: '/Soybean.png', title: 'Soybean' },
  { src: '/Barley.png', title: 'Barley' },
];


const principles = [
  {
    icon: <FaLeaf className="text-amber-600 text-5xl mb-4" />,
    title: 'Sustainability First',
    description:
      'We prioritize eco-friendly practices that protect natural resources and ensure long-term agricultural productivity for future generations.',
  },
  {
    icon: <FaTractor className="text-amber-600 text-5xl mb-4" />,
    title: 'Farmer Approach',
    description:
      'Every solution we offer is designed to support farmers — helping them increase yields, reduce risk, and grow with confidence.',
  },
  {
    icon: <FaCog className="text-amber-600 text-5xl mb-4" />,
    title: 'Innovation That Works',
    description:
      'We embrace smart technologies and proven methods that bring efficiency, precision, and progress to modern farming.',
  },
];


const categories = [
  {
    id: '01',
    title: 'Seeds & Planting Material',
    image: '/Corn.png', // Replace with actual image path
   
  },
  {
    id: '02',
    title: 'Fertilizers & Soil Solutions',
    image: 'Wheat.png',
    
  },
  {
    id: '03',
    title: 'Crop Protection Products',
    image: '/Peas.png',
   
  },
];





  return (
    <div >

    <Carousel autoplay effect="fade" dotPosition="bottom" style={{ width: '100%' }}>
      {carouselItems.map((image, index) => (
        <div key={index}>
          <div
            className='w-full h-[600px] sm:h-[500px] md:h-[450px] bg-cover bg-center relative'
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20 text-white font-semibold">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-bounce">
                Cultivating a Sustainable Future
              </p>
              <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 mt-6 sm:mt-10 text-base sm:text-lg md:text-xl'>
                <Link to="/about">
                  <p className='border px-4 sm:px-6 py-2 rounded-xl hover:bg-amber-700 text-center w-max cursor-pointer'>
                    About Us
                  </p>
                </Link>
                <p className='text-center sm:text-left'>Call Us: +1 800 123 45 56</p>
              </div>
            </div>
          </div>
        </div>
      ))}
       </Carousel>
  
      <section className="bg-[#8b926d] my-10 text-white px-6 sm:px-10 md:px-20 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10"> 
          <div className="md:w-1/2 space-y-4">
          <Link to="/about">
            <p className="border border-white rounded-full inline-block px-4 py-1 text-sm font-medium tracking-wide">
               ABOUT COMPANY  </p></Link>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight"> Our Mission: <br /> Better Farming for <br /> a Better Future
            </h2>
          </div>
  
          <div className="md:w-1/2 space-y-6">
            <p className="text-base sm:text-lg leading-relaxed">
              With deep roots in tradition and a focus on innovation, our company provides high-quality agricultural products and solutions that support farmers, enhance food security, and promote sustainable practices. From soil to harvest, we offer expertise in crop production, agri-technology, supply chain logistics, and eco-conscious farming.
            </p>
            <Link to="/contact">
              <button className="bg-yellow-200 text-black  lg:px-6 py-4 md:px-6 py-4 px-6 py-4 rounded-xl font-semibold text-base flex items-center gap-2 hover:bg-amber-800 transition">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
          <div className="relative w-full overflow-hidden py-10 ">
            <div className="flex whitespace-nowrap animate-[scrollLeft_5s_linear_infinite]">
              <span className="text-green-200 text-4xl sm:text-4xl lg:text-8xl md:text-6xl font-semibold px-4">
                From seeds to harvest, we grow with purpose —
              </span>
      
             </div>
         </div>

        
     
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 justify-center gap-6 md:gap-10">
        {images.map((x, i) => (
          <div key={i}
            className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 transition-transform transform hover:scale-110 hover:-translate-y-1 duration-300 shadow-lg">
            <img src={x.src} className="object-cover w-full h-full"  />
            <p className='text-white'>{x.title}</p>
          </div>
        ))}
      </div>
  
      </section>
       
      <section className="flex flex-col md:flex-row items-center justify-between bg-white min-h-screen p-6 md:p-6">
      
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6"> 
          <Link to="shop2">
           <p className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Agricultural Support
        </p> </Link><br/>
          Smart Farming<br />  for a Changing<br />  Planet
        </h1>
         <Link to="/blogs">
        <button className="flex items-center bg-yellow-100 text-gray-800 px-8 py-3 rounded-xl mt-6 max-w-max shadow hover:bg-yellow-200 focus:outline-none transition-colors">
        Read More
        </button>
        </Link>
      </div>
      
      
      <div className="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center transition-transform duration-150 hover:scale-105 ">
        <img
          src={('./Track.png')}
          alt="Smart farming"
          className="rounded-3xl shadow-xl w-full h-auto object-cover max-h-[500px]"
        />
      </div>
      
    </section>
        
        <div className="px-4 py-8 sm:px-6 lg:px-16 bg-gray-50">
          <Link to="/blogs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {principles.map((x,i) => (
         <div key={i}
            className="bg-white rounded-xl shadow-md p-6 text-center transition-transform transform hover:scale-110 transition duration-300" >
            <div>{x.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{x.title}</h3>
            <p className="text-gray-600 text-sm">{x.description}</p>
          </div>
        ))}
      </div>
      </Link>

    </div>
     <Link to="/shop1">
     <div className="px-4 py-10 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          FARM SOLUTIONS
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          What Our Agricultural Company Offers
        </h1>
      </div>
    </div>
    </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-6 px-4 py-10 bg-gray-50">
      {categories.map((item) => (
        <Link to="/shop1"
          key={item.id}
          className="block bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden" >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-4 text-center">
            <span className="text-sm text-gray-500 font-medium">{item.id}</span>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {item.title}
            </h3>
            <div className="mt-2 text-green-600 text-xl">→</div>
          </div>
        </Link>
      ))}
    </div>

     



  </div>
  );
};


export default Home;