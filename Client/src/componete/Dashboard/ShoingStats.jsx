import React from 'react'
import UsersTable from './UsersTable'
import ProductTable from './ProductTable'

function ShoingStats() {
  return (
    <div>
        <>
  {/* https://codepen.io/robstinson/pen/MWexYPG */}
  <div className="flex items-center justify-center max-w-6xl max-h-7 text-gray-800 p-10 bg-blue-200">
    {/* Component Start */}
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
      {/* Tile 1 */}
      <div className="flex items-center p-4 bg-white rounded">
        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
          <svg
            className="w-6 h-6 fill-current text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-xl font-bold">$8,430</span>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Revenue last 30 days</span>
            <span className="text-green-500 text-sm font-semibold ml-2">
              +12.6%
            </span>
          </div>
        </div>
      </div>
      {/* Tile 2 */}
      <div className="flex items-center p-4 bg-white rounded">
        <div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
          <svg
            className="w-6 h-6 fill-current text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-xl font-bold">211</span>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Sales last 30 days</span>
            <span className="text-red-500 text-sm font-semibold ml-2">
              -8.1%
            </span>
          </div>
        </div>
      </div>
      {/* Tile 3 */}
      <div className="flex items-center p-4 bg-white rounded">
        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
          <svg
            className="w-6 h-6 fill-current text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-xl font-bold">140</span>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Customers last 30 days</span>
            <span className="text-green-500 text-sm font-semibold ml-2">
              +28.4%
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* Component End  */}
  </div>
</>

<UsersTable/>
<ProductTable/>

    </div>
  )
}

export default ShoingStats