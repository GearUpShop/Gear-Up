// import React from 'react'

// function FeaturedSection() {
//   return (
//     <div>

// <section className="flex items-center bg-gray-100    dark:bg-gray-800 font-poppins ">
//   <div className="p-4 mx-auto max-w-6xl ">
//     <h2 className="pb-4  font-bold text-center text-gray-800 text-4xl dark:text-gray-400 ">
//     Featured products
//     </h2>
//     <div className="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400" />
//     <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
//       <div className="relative rounded-md shadow-sm overflow-hidden group">
//         <img
//           src="https://i.postimg.cc/4y2GYVks/pexels-kindel-media-8566473.jpg"
//           className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
//           alt=""
//         />
//         <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
//         <div>
//           <div className=" absolute z-10 hidden group-hover:block top-4 right-4">
//             <a
//               href="#"
//               className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 fill="currentColor"
//                 className="bi bi-camera"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
//                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
//               </svg>
//             </a>
//           </div>
//           <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
//             <a
//               href=""
//               className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
//             >
//               Artificial Inteligence
//             </a>
//             <p className="text-gray-300 text-xs mb-0">Robert</p>
//           </div>
//         </div>
//       </div>
//       <div className="relative rounded-md shadow-sm overflow-hidden group">
//         <img
//           src="https://i.postimg.cc/KjjP7SVB/pexels-designecologist-1779487.jpg"
//           className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
//           alt=""
//         />
//         <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
//         <div>
//           <div className=" absolute z-10 hidden group-hover:block top-4 right-4">
//             <a
//               href="#"
//               className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 fill="currentColor"
//                 className="bi bi-camera"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
//                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
//               </svg>
//             </a>
//           </div>
//           <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
//             <a
//               href=""
//               className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
//             >
//               Web Technology
//             </a>
//             <p className="text-gray-300 text-xs mb-0">Website</p>
//           </div>
//         </div>
//       </div>
//       <div className="relative rounded-md shadow-sm overflow-hidden group">
//         <img
//           src="https://i.postimg.cc/rFJdVYPL/pexels-pixabay-270637.jpg"
//           className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
//           alt=""
//         />
//         <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
//         <div>
//           <div className=" absolute z-10 hidden group-hover:block top-4 right-4">
//             <a
//               href="#"
//               className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 fill="currentColor"
//                 className="bi bi-camera"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
//                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
//               </svg>
//             </a>
//           </div>
//           <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
//             <a
//               href=""
//               className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
//             >
//               Seo Optimization
//             </a>
//             <p className="text-gray-300 text-xs mb-0">Content</p>
//           </div>
//         </div>
//       </div>
//       <div className="relative rounded-md shadow-sm overflow-hidden group">
//         <img
//           src="https://i.postimg.cc/q7HW1jpz/pexels-cottonbro-5473302.jpg"
//           className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
//           alt=""
//         />
//         <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
//         <div>
//           <div className=" absolute z-10 hidden group-hover:block top-4 right-4">
//             <a
//               href="#"
//               className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 fill="currentColor"
//                 className="bi bi-camera"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
//                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
//               </svg>
//             </a>
//           </div>
//           <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
//             <a
//               href=""
//               className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
//             >
//               Cyber Security
//             </a>
//             <p className="text-gray-300 text-xs mb-0">Hackers</p>
//           </div>
//         </div>
//       </div>
//       <div className="relative rounded-md shadow-sm overflow-hidden group">
//         <img
//           src="https://i.postimg.cc/PfcHmbv8/pexels-pixabay-267389.jpg"
//           className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
//           alt=""
//         />
//         <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
//         <div>
//           <div className=" absolute z-10 hidden group-hover:block top-4 right-4">
//             <a
//               href="#"
//               className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 fill="currentColor"
//                 className="bi bi-camera"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
//                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
//               </svg>
//             </a>
//           </div>
//           <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
//             <a
//               href=""
//               className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
//             >
//               Social Security
//             </a>
//             <p className="text-gray-300 text-xs mb-0">Communication method</p>
//           </div>
//         </div>
//       </div>
//       <div className="relative rounded-md shadow-sm overflow-hidden group">
//         <img
//           src="https://i.postimg.cc/KcnXMXbC/pexels-pixabay-33488.jpg"
//           className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
//           alt=""
//         />
//         <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
//         <div>
//           <div className=" absolute z-10 hidden group-hover:block top-4 right-4">
//             <a
//               href="#"
//               className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 fill="currentColor"
//                 className="bi bi-camera"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
//                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
//               </svg>
//             </a>
//           </div>
//           <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
//             <a
//               href=""
//               className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
//             >
//               GPS
//             </a>
//             <p className="text-gray-300 text-xs mb-0">Exact Location</p>
//           </div>
//         </div>
//       </div>
//       <div className="relative rounded-md shadow-sm overflow-hidden group">
//         <img
//           src="https://i.postimg.cc/GtBxvn8V/pexels-thisisengineering-3861958.jpg"
//           className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
//           alt=""
//         />
//         <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
//         <div>
//           <div className=" absolute z-10 hidden group-hover:block top-4 right-4">
//             <a
//               href="#"
//               className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 fill="currentColor"
//                 className="bi bi-camera"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
//                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
//               </svg>
//             </a>
//           </div>
//           <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
//             <a
//               href=""
//               className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
//             >
//               Software Engineering
//             </a>
//             <p className="text-gray-300 text-xs mb-0">Software</p>
//           </div>
//         </div>
//       </div>
//       <div className="relative rounded-md shadow-sm overflow-hidden group">
//         <img
//           src="https://i.postimg.cc/mZNH6DRj/pexels-lisa-fotios-1092644.jpg"
//           className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
//           alt=""
//         />
//         <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
//         <div>
//           <div className=" absolute z-10 hidden group-hover:block top-4 right-4">
//             <a
//               href="#"
//               className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={16}
//                 fill="currentColor"
//                 className="bi bi-camera"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
//                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
//               </svg>
//             </a>
//           </div>
//           <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
//             <a
//               href=""
//               className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
//             >
//               App Development
//             </a>
//             <p className="text-gray-300 text-xs mb-0">Mobile Apps</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>




//     </div>
//   )
// }

// export default FeaturedSection











































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function FeaturedSection() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    // Make a GET request to the API endpoint that provides gallery data
    axios.get('http://localhost:5002/getProductsWithImage')
      .then(response => setGalleryData(response.data))
      .catch(error => console.error('Error fetching gallery data:', error));
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <section className="flex items-center bg-gray-100 dark:bg-gray-800 font-poppins">
        <div className="p-4 mx-auto max-w-6xl">
          <h2 className="pb-4 font-bold text-center text-gray-800 text-4xl dark:text-gray-400">
            Featured products
          </h2>
          <div className="mx-auto mb-10 border-b border-red-700 w-44 dark:border-gray-400" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
            {galleryData.map(item => (
              
              <div key={item._id} className="relative rounded-md shadow-sm overflow-hidden group">
               <Link to={`/products/${item["_id"]}`}>
                <img
                  src={item.image[0].imageUrl}
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                  alt=""
                />
                
                <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                <div>
                  <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                    <a
                      href="#"
                      className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-camera"
                        viewBox="0 0 16 16"
                      >
                        {/* SVG path for camera icon */}
                      </svg>
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                    <a
                      href=""
                      className="h6 text-lg font-medium text-white hover:text-blue-300 transition duration-500"
                    >
                      {item.title}
                    </a>
                    <p className="text-gray-300 text-xs mb-0">{item.name}</p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default FeaturedSection;


