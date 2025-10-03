 import React from 'react';
 import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const products = [
  {
    name: "Green Onions",
    price: 4,
    image: "./greenonion.png", 
    sale: false,
    originalPrice: null,
  },
  {
    name: "Organic Broccoli",
    price: 7,
    image: "/organicbrocali.png", 
    sale: true,
    originalPrice: 10,
  },
  {
    name: "Potato",
    price: 3,
    image: "/potato.png", // Change to your image path or import
    sale: false,
    originalPrice: null,
  },
  

  {
    name: "Tomato",
    price: 5,
    image: "/Tomota.png",
    sale: false,
    originalPrice: null,
  },
  {
    name: "Carrot",
    price: 2.5,
    image: "/Carrot.png",
    sale: false,
    originalPrice: null,
  },
  {
    name: "Pepper",
    price: 6,
    image: "/pepper.png",
    sale: true,
    originalPrice: 8,
  }

];
 
 const  Shop1 = () => {
   return (
    <>
        <div className='bg-cover bg-center  bg-[url("/Barley.png")] w-full h-120   pt-50  text-white'>
        <p className='text-xl font-bold lg:text-5xl flex justify-center'>Farm Vegetable</p>
        <div className='flex justify-center gap-10 py-10'>
         <Link to="/"><p className='border  px-6 py-1 rounded-xl hover:bg-amber-700'>Home</p> </Link>
         <Link to="/shop2" ><p className='border px-6 py-1 rounded-xl hover:bg-amber-700'>Shop2</p></Link>
         </div>
    </div>
       
      <div className='text-md md:text-xl mx-6 sm:mx-10 my-8 sm:my-10 text-gray-700 border border-white shadow-xl p-4 sm:p-6 rounded-xl transition-transform duration-150 hover:scale-105'>
  <p className='font-bold mb-4 text-lg sm:text-xl'>Benefits of Form Vegetables</p>
  <ul className='list-disc list-inside space-y-1 sm:space-y-2'>
    <li>A Benefits of Eating Form Produce Infographic Template... Form food offers benefits</li>
    <li>Such as reduced pesticide and antibiotic exposure, a lower risk of exposure to dangerous</li>
    <li>Toxins like cadmium, higher levels of beneficial nutrients and antioxidants, and a reduced</li>
    <li>Environmental impact. Form products also tend to have richer flavors, support the</li>
    <li>Immune system, may lower the risk of chronic diseases, and promote better animal</li>
    <li>Welfare and soil health in farming practices. Here are 10 benefits of choosing Form food</li>
  </ul>
</div>

      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product, idx) => (
        <div key={idx} className="w-full sm:w-[260px] bg-gray-50 rounded-2xl shadow relative flex flex-col items-center py-6 transition-transform duration-150 hover:scale-105">
          <div className="relative group w-full flex justify-center">
            {product.sale && (
              <span className="absolute left-2 top-2 bg-black text-white text-xs rounded px-2 py-1 z-10">SALE</span>
            )}
            <img
              src={product.image}
              className="w-60 h-80 object-contain mx-auto rounded-xl border-2 border-transparent group-hover:border-green-400 transition-all duration-200"
              alt={product.name} />
            <button
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 flex items-center gap-2 transition-opacity duration-200" >
              <FiShoppingCart size={20} />
              Add to cart
            </button>
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <div className="flex items-center space-x-2">
              {product.sale && (
                <span className="text-gray-400 line-through text-md">${product.originalPrice.toFixed(2)}</span>
              )}
              <span className="text-gray-800 text-md">${product.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ))}
   </div>






    </>
   )
 };
 
 export default Shop1;