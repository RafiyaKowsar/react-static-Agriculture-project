import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { GiPlantSeed, GiWheat, GiFarmTractor,  GiPlantRoots } from 'react-icons/gi';
import { FaSeedling } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';




const stats = [
  { label: 'Hectares under sustainable cultivation', target: 9000},
  { label: 'Customer Satisfaction based on service feedback', target: 98 },
  { label: 'Farmers partnered with across regions', target: 15000 },
];

const brands = [
  { name: 'SmartSeed', icon: <GiPlantSeed size={40} /> },
  { name: 'Plants', icon: <GiWheat size={40} /> },
  { name: 'HARVEST', icon: <GiFarmTractor size={40} /> },
  
  { name: 'ORGANICFARM', icon: <GiPlantRoots size={40} /> },
  { name: 'farmburst', icon: <FaSeedling size={40} /> },
];

const services = [
  {
    
    number: '01',
    title: 'Planting Material',
    description:' We prioritize eco-friendly practices that protect natural resources and ensure long-term agricultural.',
    bgImage: "url('/AboutUs.png')",

  },
  {
    
    number: '02',
    title: 'Soil Solutions',
    description:
      'Every solution we offer is designed to support farmers — helping them increase yields, reduce risk.',
      bgImage: "url('/About1.png')",
  },
  {
    number: '03',
    title: 'Crop Protection',
    description:
      'We prioritize your unique needs and preferences, creating personalized treatment plans that align with your goals.',
      bgImage: "url('/Barley.png')",
  },
  {
    number: '04',
    title: 'Innovation Services',
    description:
      'We embrace smart technologies and proven methods that bring efficiency, precision, and progress.',
      bgImage: "url('/Track.png')",
  },
];




const About = () => {
     const [values, setValues] = useState(stats.map(() => 0));
    useEffect(() => {
    const interval = setInterval(() => {
      setValues(prev =>
        prev.map((val, i) => {
          const target = stats[i].target;
          const increment = target > 100 ? 500 : 1;
          const next = val + increment;
          return next >= target ? target : next;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

    <div className='bg-cover bg-center  bg-[url("/aboutpage.png")] w-full h-120   pt-50  text-white'>
        <p className='text-xl font-bold lg:text-5xl flex justify-center'>About Us</p>
        <div className='flex justify-center gap-10 py-10'>
         <Link to="/"><p className='border  px-6 py-1 rounded-xl hover:bg-green-700'>Home</p> </Link>
         <Link to="/about" ><p className='border px-6 py-1 rounded-xl hover:bg-green-700'>About Us</p></Link>
         </div>
    </div>
      
       <section className="px-4 py-12 md:px-16 lg:px-24 bg-white text-gray-800">
     
      <div className="mb-4">
        <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          About Company
        </span>
      </div>
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10 ">
        Modern Solutions<br className="hidden md:block" />
        <span className="text-gray-900 ">for Traditional Challenges</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  text-gray-700">
        <p className='text-xl md:text-2xl'>
          We don’t just grow crops — we grow trust, opportunity, and a better future.
          We are dedicated to supporting farmers, enhancing food security, and promoting sustainable agriculture.
        </p>
        <p>
          With years of experience and a deep understanding of local and global challenges, we provide high-quality seeds,
          modern farming solutions, expert field support, and agri-tech innovations that empower growers to increase productivity
          and protect natural resources. Our mission is rooted in more than just farming — it’s about building partnerships,
          preserving the land, and helping communities thrive.
        </p>
      </div>
    </section>

    <div className='w-full rounded-4xl py-10'>
      <img src="About1.png"/>
    </div>
      
       <section className="px-4 py-12 md:px-16 lg:px-24 bg-white text-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-[#8b926d]  text-2xl md:text-6xl lg:text-8xl">
              {stats[i].target > 100 ? `${values[i].toLocaleString()}k` : `${values[i]}%`}
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base max-w-xs mx-auto">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
     

     <section className="bg-[#757C57] text-white px-4 py-12 md:px-16 lg:px-24">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <span className="inline-block border border-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Farm Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            What Our Agricultural Company Offers
          </h2>
        </div>
        <button className="bg-[#F7E59B] text-black font-medium lg:px-5 py-2 md:lg:px-5 py-2 px-4 py-2 rounded-full hover:bg-yellow-300 transition">
          Read More
        </button>
      </div>

    
    <Link to="blogs">   
    <div className="bg-[#5A604C] px-4 py-12 md:px-16 lg:px-24 text-white">
      <div className="space-y-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative border-t border-[#757C57] pt-6 overflow-hidden rounded-lg">
          
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-cover bg-center"
              style={{ backgroundImage: service.bgImage }}
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between p-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-300 font-bold text-lg">{service.number}</span>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-sm md:text-base text-justify max-w-2xl">{service.description}</p>
              </div>
              <div className="mt-4 md:mt-0 text-yellow-300 text-xl font-bold">
                <FiArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
         </Link> 

    </section>
 



     <section className="px-4 py-12 md:px-16 lg:px-24 bg-white ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
        {brands.map((brand, i) => (
          <div key={i} className="flex flex-col items-center gap-10 hover:bg-gray-100 rounded-xl p-4">
            <div className="text-[#8b926d]">{brand.icon}</div>
            {brand.name && (
              <span className="text-sm font-medium text-gray-700">{brand.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>


    
    
    
    
    </>

  )
};

export default About;
