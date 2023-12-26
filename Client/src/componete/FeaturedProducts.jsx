import React from 'react'

function FeaturedProducts() {
  return (
    <>
    <div>
          <section className="flex items-center font-poppins bg-gray-100 lg:h-auto">
  <div className="container p-4 mx-auto">
    <h2 className="pb-2 text-2xl font-bold text-center text-gray-800 md:text-4xl dark:text-gray-400">
    Top  rated
    </h2>
    <div className="w-20 mx-auto mb-6 border-b border-black dark:border-gray-400" />

    <div className="flex flex-wrap mb-20 -mx-3">
      <div className="w-full px-3 mb-6 lg:w-1/3 lg:mb-0">
        <div
          className="relative w-full h-64 mb-6 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://lzd-img-global.slatic.net/g/p/5764c322d14b7f10efb345f384758be7.jpg_360x360q75.jpg_.webp")'
          }}
        >
          <div className="absolute w-full h-full bg-gray-900 bg-opacity-60" />
          <span className="relative z-40 inline-block px-2 py-1 mt-4 ml-4 text-xs font-bold text-gray-100 bg-blue-500 rounded-full ">
            -10% off
          </span>
          <a className="absolute inset-0 flex items-end" href="#">
            <div className="pb-12 pl-12">
              <h2 className="mb-2 text-3xl font-bold text-white ">
                Digital Camera
              </h2>
              <p className="text-xl font-bold text-white ">
                <span>$100.00</span>
                <span className="text-sm font-normal line-through">900.00</span>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full px-3 mb-6 lg:w-1/3 lg:mb-0">
        <div
          className="relative w-full h-64 mb-6 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://im.rediff.com/travel-living/2017/mar/3d-car-auto-seat-back-multi-pocket-storage-bag-organizer-holder-hanger-accessory.jpg?w=670&h=900")'
          }}
        >
          <div className="absolute w-full h-full bg-gray-900 bg-opacity-60" />
          <span className="relative z-40 inline-block px-2 py-1 mt-4 ml-4 text-xs font-bold text-gray-100 bg-blue-500 rounded-full ">
            New
          </span>
          <a className="absolute inset-0 flex items-end" href="#">
            <div className="pb-12 pl-12">
              <h2 className="mb-2 text-3xl font-bold text-white ">
              Car Backseat Organizer
              </h2>
              <p className="text-xl font-bold text-white ">
                <span>$100.00</span>
                <span className="text-sm font-normal line-through">900.00</span>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full px-3 mb-6 lg:w-1/3 lg:mb-0">
        <div
          className="relative w-full h-64 mb-6 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://m.media-amazon.com/images/I/71llUV-0sOL._AC_SX466_.jpg")'
          }}
        >
          <div className="absolute w-full h-full bg-gray-900 bg-opacity-60" />
          <span className="relative z-40 inline-block px-2 py-1 mt-4 ml-4 text-xs font-bold text-gray-100 bg-blue-500 rounded-full ">
            New
          </span>
          <a className="absolute inset-0 flex items-end" href="#">
            <div className="pb-12 pl-12">
              <h2 className="mb-2 text-3xl font-bold text-white ">
              Car Gear Shift Cover
              </h2>
              <p className="text-xl font-bold text-white ">
                <span>$100.00</span>
                <span className="text-sm font-normal line-through">900.00</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    </>
  )
}

export default FeaturedProducts