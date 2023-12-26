import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    //     <div>

    //       <>
    //   <div className="flex justify-center items-center bg-blue-100">
    //     {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
    //     <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full  ">
    //       <div className="flex flex-col jusitfy-center items-center space-y-10  ">
    //         <div className="flex flex-col justify-center items-center ">
    //           <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
    //             Shop By Category
    //           </h1>
    //         </div>
    //         <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 md:gap-x-8 md:gap-x-8 w-full  ">
    //           <div className="relative group flex justify-center items-center h-80 w-full bg-blue-600/30 backdrop-brightness-75 ">
    //             <img
    //               className="object-center object-cover h-full w-full "
    //               src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/645ed1d7dc86fe001d010a5f.jpg"
    //               alt="girl-image"
    //             />
    //             <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white ">

    //             <Link to='/clean' >
    //             Clean
    //             </Link>
    //             </button>
    //             <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
    //           </div>
    //           <div className="relative group flex justify-center items-center h-80 w-full bg-blue-600/30 backdrop-brightness-75">
    //             <img
    //               className="object-center object-cover h-full w-full"
    //               src="https://m.media-amazon.com/images/I/71bCyrGXmUL._AC_UF1000,1000_QL80_.jpg"
    //               alt="girl-image"
    //             />
    //             <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">

    //             <Link to='/light' >
    //             Light
    //             </Link>
    //             </button>
    //             <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
    //           </div>
    //           <div className="relative group flex justify-center items-center h-80 w-full bg-blue-600/30 backdrop-brightness-75">
    //             <img
    //               className="object-center object-cover h-full w-full"
    //               src="https://aschilo.com/wp-content/uploads/tool-equip.jpg"
    //               alt="girl-image"
    //             />
    //             <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
    //               <Link to='/tools' >
    //               Tools
    //             </Link>
    //             </button>
    //             <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
    //           </div>

    //           <div className="relative group flex justify-center items-center h-80 w-full bg-blue-600/30 backdrop-brightness-75 my-6">
    //             <img
    //               className="object-center object-cover h-full w-full"
    //               src="https://d3lp4xedbqa8a5.cloudfront.net/imagegen/max/ccr/1023/-/s3/digital-cougar-assets/whichcar/2017/02/10/9240/Mobile-phone-holder-in-air-vent-in-car.jpg"
    //               alt="girl-image"
    //             />
    //             <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
    //             <Link to='/mobile' >
    //             Mobile
    //             </Link>
    //             </button>
    //             <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
    //           </div>

    //           <div className="relative group flex justify-center items-center h-80 w-full bg-blue-600/30 backdrop-brightness-75 my-6">
    //             <img
    //               className="object-center object-cover h-full w-full"
    //               src="https://i.ebayimg.com/images/g/jj0AAOSwlkNk3eH7/s-l1200.webp"
    //               alt="girl-image"
    //             />
    //             <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
    //             <Link to='/accessories' >
    //             Accessories
    //             </Link>
    //             </button>
    //             <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
    //           </div>

    //           <div className="relative group flex justify-center items-center h-80 w-full bg-blue-600/30 backdrop-brightness-75 my-6">
    //             <img
    //               className="object-center object-cover h-full w-full"
    //               src="https://images-na.ssl-images-amazon.com/images/I/71p9FLhJlEL._AC_UL330_SR330,330_.jpg"
    //               alt="girl-image"
    //             />
    //             <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
    //             <Link to='/seafety' >
    //             Seafety
    //             </Link>
    //             </button>

    //             <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>

    // </>

    //     </div>

    <div>
      <>
        <div className="flex flex-col justify-center items-center bg-gray-100">
          <h1 className="pb-2 text-2xl font-bold text-center text-gray-800 md:text-4xl  dark:text-white my-5">
            Shop By Category
          </h1>
          <div className="w-20 mx-auto mb-6 border-b border-black dark:border-gray-400" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800  py-6 sm:py-8 lg:py-12 ">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 ">
              {/* image - start */}
              <Link
                to="/tools"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg  shadow-lg md:h-80 bg-gray-400 hover:opacity-80"
              >
                <img
                  src="https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/10_best_brands_for_automotive_tool_sets"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-2xl text-white md:ml-10 md:text-2xl ">
                  Tools
                </span>
              </Link>

              {/* image - end */}
              {/* image - start */}
              <Link
                to="/light"
                className="bg-gray-400 hover:opacity-80 group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/05/Automotive-Lights-Explained-01.jpg?fit=2401%2C1259&ssl=1"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-2xl text-white md:ml-10 md:text-2xl">
                  Light
                </span>
              </Link>
              {/* image - end */}
              {/* image - start */}
              <Link
                to="/clean"
                className=" bg-gray-400 hover:opacity-80 group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://www.its-africa.co.za/wp-content/uploads/2021/12/Car_wash_ITS_2.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-2xl text-white md:ml-10 md:text-2xl">
                  Cleaning Tools
                </span>
              </Link>

              {/* image - end */}
              {/* image - start */}
              <Link
                to="/seafety"
                className=" bg-gray-400 hover:opacity-80 group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/71p9FLhJlEL._AC_UL330_SR330,330_.jpg"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-2xl text-white md:ml-10 md:text-2xl">
                  Seafety
                </span>
              </Link>
              {/* image - end */}
              {/* image - start */}
              <Link
                to="/mobile"
                className="bg-gray-400 hover:opacity-80 group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://m.media-amazon.com/images/I/51OKy7m1zLL.jpg"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Mobile
                </span>
              </Link>

              {/* image - end */}
              {/* image - start */}
              <Link
                to="/accessories"
                className="bg-gray-400 hover:opacity-80 group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/05/Automotive-Lights-Explained-01.jpg?fit=2401%2C1259&ssl=1"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-2xl text-white md:ml-10 md:text-2xl">
                  Accessories
                </span>
              </Link>
              {/* image - end */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Categories;
