import React from 'react'

function MessageTable() {
  return (
    <div>
        <section className="items-center lg:flex bg-white  lg:h-screen font-poppins dark:bg-gray-800 ">
  <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
    <div className="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
        <h2 className="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">
          List of document
        </h2>
        <div className="flex px-6 py-2 mb-4 border border-gray-600 rounded-md md:mb-0 dark:border-gray-400">
          <input
            type="text"
            className="w-full pr-4 text-sm text-gray-700 bg-stone-100 dark:text-gray-400 dark:bg-gray-900 placeholder-text-100 "
            placeholder="search..."
          />
          <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-300 hover:text-blue-600">
            <span className="mr-2 text-xs ">Go</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-sm text-left text-gray-500 dark:text-gray-400">
              <th className="flex items-center px-6 pb-3 font-medium dark:text-gray-400">
                <input className="mr-4" type="checkbox" name="" id="" />
                <span>Name</span>
              </th>
              <th className="px-6 pb-3 font-medium ">Emaile </th>
              <th className="px-6 pb-3 font-medium">Mess </th>
             
              <th className="px-6 pb-3 font-medium"> Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm bg-white dark:text-gray-400 dark:bg-gray-800">
              <td className="flex items-center px-6 py-5 font-medium">
                <input className="mr-4" type="checkbox" name="" id="" />
                <p className="">General Purpose Report</p>
              </td>
              <td className="px-6 py-5 font-medium ">Branklin Ferdnaz</td>
              <td className="px-6 py-5 font-medium ">13 jan 2022</td>
              <td className="px-6 py-5 font-medium">
              
              </td>
              <td className="flex items-center px-6 py-5 ">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-3 bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="text-sm dark:text-gray-400 dark:bg-transparent">
              <td className="flex items-center px-6 py-5 font-medium">
                <input className="mr-4" type="checkbox" name="" id="" />
                <p className="">Monthly Report</p>
              </td>
              <td className="px-6 py-5 font-medium ">Kathryn Pearson</td>
              <td className="px-6 py-5 font-medium ">14 jan 2022</td>
              <td className="px-6 py-5 font-medium">
                <span className="text-blue-400 dark:text-blue-300">
                  Compliance
                </span>
              </td>
              <td className="flex items-center px-6 py-5 ">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-3 bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="text-sm bg-white dark:text-gray-400 dark:bg-gray-800">
              <td className="flex items-center px-6 py-5 font-medium">
                <input className="mr-4" type="checkbox" name="" id="" />
                <p className="">Client Status Report</p>
              </td>
              <td className="px-6 py-5 font-medium ">Nicole West</td>
              <td className="px-6 py-5 font-medium ">15 jan 2022</td>
              <td className="px-6 py-5 font-medium">
                <span className="text-blue-400 dark:text-blue-300">
                  Security
                </span>
              </td>
              <td className="flex items-center px-6 py-5 ">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-3 bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr className="text-sm dark:text-gray-400 dark:bg-transparent">
              <td className="flex items-center px-6 py-5 font-medium">
                <input className="mr-4" type="checkbox" name="" id="" />
                <p className="">Work Flow Management</p>
              </td>
              <td className="px-6 py-5 font-medium ">Peter Ferdnaz</td>
              <td className="px-6 py-5 font-medium ">17 jan 2022</td>
              <td className="px-6 py-5 font-medium">
               
              </td>
              <td className="flex items-center px-6 py-5 ">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-3 bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end pt-4 mt-4 border-t dark:border-gray-700">
          <nav aria-label="page-navigation">
            <ul className="flex list-style-none">
              <li className="page-item disabled ">
                <a
                  href="#"
                  className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-blue-600"
                >
                  Previous
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-blue-600"
                >
                  1
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3  "
                >
                  2
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3 "
                >
                  3
                </a>
              </li>
              <li className="page-item ">
                <a
                  href="#"
                  className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default MessageTable