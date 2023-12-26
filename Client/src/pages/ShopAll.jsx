// // ShopAll.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function ShopAll() {
//   const [products, setProducts] = useState([]);

//   let handleSearchInput = (e) => {
//     e.preventDefault();
//     let getValue = e.target.search.value;
//     const filterItems = products.filter((item) => {
//       return item.name.toLowerCase().includes(getValue.toLowerCase());
//     });
//     if (filterItems.length > 0) {
//       setProducts(filterItems);
//     } else {
//       // setshowError(true);
//     }
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5002/getProductsWithImage');
//         console.log('Fetched data:', response.data);
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log('Products:', products);

//   return (
//     <div>
//       <form onSubmit={handleSearchInput}>
//   <label
//     htmlFor="default-search"
//     className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//   >
//     Search
//   </label>
//   <div className="relative">
//     <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//       <svg
//         className="w-4 h-4 text-gray-500 dark:text-gray-400"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 20 20"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//         />
//       </svg>
//     </div>
//     <input
//       type="search"
//       id="default-search"
//       className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//       placeholder="Search Mockups, Logos..."
//       required=""
//       name='search'
//     />
//     <button
//       type="submit"
//       className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//     >
//       Search
//     </button>
//   </div>
// </form>

//       <div className="text-center p-10">
//         <h1 className="font-bold text-4xl mb-4">All products needed for your car</h1>
//         <h1 className="text-3xl">Tailwind CSS</h1>
//       </div>

//       <section
//         id="Projects"
//         className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
//       >
//         {products.map((product) => (
//           <div key={product["_id"]} className="w-72 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//             {/* Use Link component to navigate to product details page */}
//             <Link to={`/products/${product["_id"]}`}>
//               <img
//                 src={product.image[0].imageUrl}
//                 alt={product.name}
//                 className="h-80 w-72 object-cover rounded-t-xl"
//               />
//               <div className="px-4 py-3 w-72">
//                 <span className="text-gray-400 mr-3 uppercase text-xs">{product.title}</span>
//                 <p className="text-lg font-bold text-black truncate block capitalize">
//                   {product.name}
//                 </p>
//                 <div className="flex items-center">
//                   <p className="text-lg font-semibold text-black cursor-auto my-3">
//                     ${product.price}
//                   </p>
//                   <del>
//                     <p className="text-sm text-gray-600 cursor-auto ml-2">${product.Price}</p>
//                   </del>
//                   <div className="ml-auto">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={20}
//                       height={20}
//                       fill="currentColor"
//                       className="bi bi-bag-plus"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
//                       />
//                       <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </section>

//       <div className="flex items-center justify-center">
//         <nav aria-label="Page navigation example">
//           <ul className="inline-flex -space-x-px text-sm">
//             <li>
//               <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
//             </li>

//               {/* ... (pagination links) */}

//    <li>
//       <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
//     </li>
//     <li>
//      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
//    </li>
//    <li>
//      <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
//     </li>
//     <li>
//       <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
//     </li>
//     <li>
//       <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
//     </li>

//             <li>
//               <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default ShopAll;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShopAll() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // قم بتعيين عدد المنتجات في كل صفحة
  const [searchValue ,setSarchValue] = useState("")


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5002/getProductsWithImage"
      );
      console.log("Fetched data:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // احصل على المنتجات الحالية استنادًا إلى الصفحة الحالية
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // قم بتغيير الصفحة
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let handleSearchInput = (e) => {
    e.preventDefault();
    let getValue = e.target.search.value;
    const filterItems = products.filter((item) => {
      return item.name.toLowerCase().includes(getValue.toLowerCase());
    });
    if (filterItems.length > 0) {
      setProducts(filterItems);
    } else {
      // setshowError(true);
    }
  };
  let handleSearch = (e) => {
    setSarchValue(e.target.value);
    if (searchValue) {
      const filterItems = products.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      if (filterItems.length > 0) {
        setProducts(filterItems);
      } else {
        // setshowError(true);
      }
    } else {
      fetchData();
    }
  };
  return (
    <div className="bg-gray-100">
    

      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          All products needed for your car
        </h1>
       <div className="flex flex-row justify-center">
       <form onSubmit={handleSearchInput} className=" w-96">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required=""
            name="search"
            value={searchValue}
            onChange={(e)=>{handleSearch(e)}}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#2B2A4C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
       </div>
     
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {currentProducts.map((product) => (
          <div
            key={product["_id"]}
            className="w-72 h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Link to={`/products/${product["_id"]}`}>
              <img
                src={product.image[0].imageUrl}
                alt={product.name}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.title}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ${product.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      ${product.Price}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>

      <div className="flex items-center justify-center py-20">
        <nav aria-label="Page navigation example ">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-[#2B2A4C] border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </a>
            </li>

            {Array.from(
              { length: Math.ceil(products.length / productsPerPage) },
              (_, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight ${
                      currentPage === i + 1
                        ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </a>
                </li>
              )
            )}

            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#2B2A4C] border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(products.length / productsPerPage)
                }
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ShopAll;
