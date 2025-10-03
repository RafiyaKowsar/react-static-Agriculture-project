import React from 'react';
import { Link } from 'react-router-dom';

const agriData = [
  {
    id: 1,
    label: 'Harvest',
    image: '/Blog2.png', // Replace with actual image path
    date: 'August 18, 2025',
    articles: ['Latest Updates in Global Agriculture', 'Organic vs. Conventional Farming'],
  },
  {
    id: 2,
    label: 'Agri-Tech',
    image: '/Blog3.png', // Replace with actual image path
    date: 'August 18, 2025',
    articles: ['Latest Updates in Global Agriculture', 'Organic vs. Conventional Farming'],
  },
   {
    id: 3,
    label: 'Seeds',
    image: '/Blog4.png', // Replace with actual image path
    date: 'August 18, 2025',
    articles: ['How to Choose the Right Fertilizer'],
  },
   {
    id: 4,
    label: 'Protection',
    image: '/Blog5.png', // Replace with actual image path
    date: 'August 18, 2025',
    articles: ['Smart Irrigation: Saving Water'],
  },
   {
    id: 5,
    label: 'Seeds',
    image: '/Blog6.png', // Replace with actual image path
    date: 'August 18, 2025',
    articles: ['A Case Study in Crop Success'],
  },
   {
    id: 6,
    label: 'Harvest',
    image: '/Blog7.png', // Replace with actual image path
    date: 'August 18, 2025',
    articles: ['Tech Trends in Farming 2025'],
  },
   {
    id: 7,
    label: 'Seeds',
    image: '/Blog8.png', // Replace with actual image path
    date: 'August 18, 2025',
    articles: ['Simple Tips for Healthier Crops'],
  },
   {
    id: 8,
    label: 'Agri-Tech',
    image: '/Blog9.png', // Replace with actual image path
    date: 'August 18, 2025',
    articles: ['Organic vs. Hybrid: What to Know'],
  },
];


const Blog = () => {
  return (
  <>
  <div className='bg-cover bg-center  bg-[url("/blog.png")] w-full h-120   pt-50  text-white '>
        <p className='text-xl font-bold lg:text-5xl flex justify-center'>Blogs</p>
        <div className='flex justify-center gap-10 py-10'>
         <Link to="/"><p className='border  px-6 py-1 rounded-xl hover:bg-green-700'>Home</p> </Link>
         <Link to="/blogs" ><p className='border px-6 py-1 rounded-xl hover:bg-green-700'>Blogs</p></Link>
         </div>
    </div>

    <Link to="/">
    <div className="px-4 py-8 md:px-8 lg:px-16 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Agriculture Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {agriData.map(({ id, label, image, date, articles }) => (
          <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-150 hover:scale-105 ">
            <img
              src={image}
              alt={label}
              className="w-full h-48 object-cover md:h-64"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold mb-2">{label}</h3>
              <p className="text-sm text-gray-500 mb-4">{date}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {articles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Link>
   
       <div className='text-md md:text-xl mx-6 sm:mx-10 my-8 sm:my-10 text-gray-700 border border-white shadow-xl p-4 sm:p-6 rounded-xl transition-transform duration-150 hover:scale-105'>
  <p className='font-bold mb-4 text-lg sm:text-xl'>Soil is the foundation of every farm.</p>
  <ul className='list-disc list-inside space-y-1 sm:space-y-2'>
    <li>A Benefits of Eating Form Produce Infographic Template ... Form food offers benefits</li>
    <li>It’s not just dirt — it’s a living system that supports crops,</li>
    <li>Stores water, and provides essential nutrients to plants.</li>
    <li>For farmers, taking care of the soil isn’t just good practice</li>
    <li>It’s the key to long-term success and sustainability</li>
    <li>Healthy soil leads to stronger plants, higher yields, and</li>
  </ul>
</div>


   
  
  
    </>
  )
};

export default Blog;
