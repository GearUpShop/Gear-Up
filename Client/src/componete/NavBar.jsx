// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// function NavBar({ isLoggedIn, setIsLoggedIn }) {
//   const [isLoggedOut, setIsLoggedOut] = useState(false);
//   const [isLogClick, setIsLogClick] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // its Dropdown to see product
//   const [isDropdownOpen1, setDropdownOpen1] = useState(false);

//   const navigate = useNavigate();
//   ///////////
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const token = Cookies.get("Token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   });

// ////////////////////////////////
// // its Dropdown to see product
//   const toggleDropdown = () => {
//     setDropdownOpen1(!isDropdownOpen1);
//   };
//   //////////////////////

//   ///////////
//   const handleMouseEnter = () => {
//     setDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setDropdownOpen(false);
//   };
//   const handleLoginClick = () => {
//     setIsLogClick(!isLogClick);
//   };
//   ////////////
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     Cookies.remove("Token");
//     // Cookies.remove("user_id");
//     sessionStorage.removeItem('role');
//     // Redirect the user to the home page after logging out
//     navigate("/");
//   };

//   return (
//     <div>
//       <nav className="bg-[#2B2A4C] shadow">
//         <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
//           <div className="flex justify-between items-center">
//             <div>
//               <Link
//                 to="/profile"
//                 className="text-white text-xl font-bold md:text-2xl hover:text-gray-700"
//               >
//                 GEAR UP SHOP
//               </Link>
//             </div>
//             <div className="flex md:hidden">
//         <button
//           type="button"
//           className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
//           aria-label="toggle menu"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
//             <path
//               fillRule="evenodd"
//               d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
//             />
//           </svg>
//         </button>
//       </div>
//           </div>
//           <div className="md:flex items-center">
//             <div className="flex flex-col md:flex-row md:mx-6">
//               <Link
//                 to="/"
//                 className="my-1 text-lg text-white font-medium hover:text-[#B31312] md:mx-4 md:my-0"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/shopall"
//                 className="my-1 text-lg text-white font-medium hover:text-[#B31312] md:mx-4 md:my-0"
//               >
//                 Shop
//               </Link>
//               <Link
//                 to="/contactus"
//                 className="my-1 text-lg text-white font-medium hover:text-[#B31312] md:mx-4 md:my-0"
//               >
//                 Contact
//               </Link>
//               <Link
//                className="my-1 text-lg text-white font-medium hover:text-[#B31312] md:mx-4 md:my-0"
//                 to="/about"
//               >
//                 About
//               </Link>

// {/* // its Dropdown to see product start */}

//       <div className="relative inline-block text-left">
//       <div>
//         <button
//           type="button"
//           className="inline-flex w-full justify-center gap-x-2  bg-white px-7 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//           onClick={toggleDropdown}
//           id="menu-button"
//           aria-expanded={isDropdownOpen}
//           aria-haspopup="true"
//         >
//          Category
//           <svg
//             className="-mr-1 h-5 w-5 text-gray-400"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>
//       {isDropdownOpen1 && (
//         <div
//           className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//           role="menu"
//           aria-orientation="vertical"
//           aria-labelledby="menu-button"
//           tabIndex={-1}
//         >
//           <div className="py-1" role="none">
//             <Link to = '/clean'
//               href="#"
//               className="text-gray-700 block px-4 py-2 text-sm"
//               role="menuitem"
//               tabIndex={-1}
//             >

//               Clean

//             </Link>

//             <Link to = '/tools'
//               href="#"
//               className="text-gray-700 block px-4 py-2 text-sm"
//               role="menuitem"
//               tabIndex={-1}
//             >

//               Tools

//             </Link>

//             <Link to = '/mobile'
//               href="#"
//               className="text-gray-700 block px-4 py-2 text-sm"
//               role="menuitem"
//               tabIndex={-1}
//             >

//             Mobile

//             </Link>

//             <Link to = '/light'
//               href="#"
//               className="text-gray-700 block px-4 py-2 text-sm"
//               role="menuitem"
//               tabIndex={-1}
//             >

//               Light

//             </Link>

//             <Link to = '/seafety '
//               href="#"
//               className="text-gray-700 block px-4 py-2 text-sm"
//               role="menuitem"
//               tabIndex={-1}
//             >

//          Seafety

//             </Link>

//             <Link to = '/accessories'
//               href="#"
//               className="text-gray-700 block px-4 py-2 text-sm"
//               role="menuitem"
//               tabIndex={-1}
//             >

//          Accessories

//             </Link>

//           </div>
//         </div>
//       )}
//     </div>
// {/* // its Dropdown to see product end */}

//             </div>
//             <div className="flex justify-center md:block">
//               <Link
//                 to="/shopingcart"
//                 className="relative text-white hover:text-[#B31312]"
//               >
//                 <svg
//                   className="h-7 w-6"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="absolute top-0 left-0 rounded-full bg-white text-white p-1 text-xs" />
//               </Link>
//             </div>
//             <a className="text-white hover:text-[#B31312]" href="#">
//               <Link to="wishlist">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-7 w-7"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//               </Link>
//             </a>

//             {isLoggedIn ? (
//               <Link
//                 to="/profile"
//                 className="ml-4 md:ml-6 inline-flex items-center justify-center rounded-xl bg-blue-700 py-3 px-2 font-dm text-base font-medium text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]"
//               >
//                 <img
//                   src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//                   alt="Profile"
//                   className="w-8 h-8 rounded-full"
//                 />
//               </Link>
//             ) : (
//               <>
//                 <div className="flex flex-col">
//                   <Link
//                     className="ml-4 md:ml-6 inline-flex items-center justify-center rounded-xl bg-[#B31312] py-3 px-2 font-dm text-base font-medium text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]"
//                     onClick={handleLoginClick}
//                   >
//                     Sign in / sign up
//                   </Link>
//                   {isLogClick && (
//                     <div className="flex flex-col absolute right-28 top-16 border-2 rounded-lg border-blue-300 bg-slate-100 py-4 px-7">
//                       <Link to="/adminLogin" onClick={handleLoginClick}>
//                         <span>Login Admin</span>
//                       </Link>

//                       <Link to="/signup" onClick={handleLoginClick}>
//                         <span>Login User</span>
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </>
//             )}

//             {isLoggedIn && (
//               <button
//                 onClick={handleLogout}
//                 className="ml-4 md:ml-6 inline-flex items-center justify-center rounded-xl bg-red-500 py-3 px-2 font-dm text-base font-medium text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isLogClick, setIsLogClick] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  //   // its Dropdown to see product
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("Token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleLoginClick = () => {
    setIsLogClick(!isLogClick);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove("Token");
    sessionStorage.removeItem("role");
    navigate("/");
  };

  //////////////////////////////
  //its Dropdown to see product
  const toggleDropdown = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };
  //////////////////////

  ///////////
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const isHomePage =
    window.location.pathname === "/dashboard" ||
    window.location.pathname === "/dashboard/usertable" ||
    window.location.pathname === "/dashboard/adminProfile" ||
    window.location.pathname === "/dashboard/producttable" ||
    window.location.pathname === "/dashboard/addProduct" ||
    window.location.pathname === "/dashboard/shoingStats" ||
    window.location.pathname === "/dashboard/messageTable";
  return (
    <div className={`${isHomePage ? "hidden" : ""}`}>
      <nav className="bg-[#2B2A4C] shadow">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <Link
                to="/profile"
                className="text-white text-xl font-bold md:text-2xl hover:text-gray-700"
              >
                GEAR UP SHOP
              </Link>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`md:flex items-center  mr-20 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to="/"
                className="my-1 text-lg text-white font-medium hover:text-[#B31312] md:mx-4 md:my-0"
              >
                Home
              </Link>
              <Link
                to="/shopall"
                className="my-1 text-lg text-white font-medium hover:text-[#B31312] md:mx-4 md:my-0"
              >
                Shop
              </Link>
              <Link
                to="/contactus"
                className="my-1 text-lg text-white font-medium hover:text-[#B31312] md:mx-4 md:my-0"
              >
                Contact
              </Link>
              <Link
                className="my-1 text-lg text-white font-medium hover:text-[#B31312] md:mx-4 md:my-0"
                to="/about"
              >
                About
              </Link>
            </div>
            {/* // its Dropdown to see product start */}

            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-2 px-7 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-[#50538f]  hover:bg-[#545793] rounded-md  bg-[#414473]"
                  onClick={toggleDropdown}
                  id="menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Category
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {isDropdownOpen1 && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <Link
                      to="/clean"
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Clean
                    </Link>

                    <Link
                      to="/tools"
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Tools
                    </Link>

                    <Link
                      to="/mobile"
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Mobile
                    </Link>

                    <Link
                      to="/light"
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Light
                    </Link>

                    <Link
                      to="/seafety "
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Seafety
                    </Link>

                    <Link
                      to="/accessories"
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Accessories
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-start sm:justify-start md:justify-start lg:justify-center  ml-2 sm:ml-2 md:ml-10 lg:ml-32 py-4 ">
              <Link
                to="/shopingcart"
                className="relative text-white hover:text-[#B31312]"
              >
                <svg
                  className="h-7 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute top-0 left-0 rounded-full bg-white text-white p-1 text-xs" />
              </Link>

              <a className="text-white hover:text-[#B31312]">
                <Link to="wishlist">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </Link>
              </a>
            </div>

            {isLoggedIn ? (
              <Link
                to="/profile"
                // className="ml-4 md:ml-6 inline-flex items-center justify-center rounded-xl bg-blue-700 py-3 px-2 font-dm text-base font-medium text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full ml-10"
                />
              </Link>
            ) : (
              <>
                <div className="flex flex-col mr-30 ml-10">
                  <Link
                    className="ml-4 md:ml-6 inline-flex items-center justify-center rounded-xl bg-[#B31312] py-3 px-2 font-dm text-base font-medium text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02] "
                    onClick={handleLoginClick}
                  >
                    Sign in
                  </Link>
                  {isLogClick && (
                    <div className="flex flex-col absolute right-28 top-16 border-2 rounded-lg border-blue-300 bg-slate-100 py-4 px-7">
                      <Link to="/adminLogin" onClick={handleLoginClick}>
                        <span>Login Admin</span>
                      </Link>

                      <Link to="/signup" onClick={handleLoginClick}>
                        <span>Login User</span>
                      </Link>
                    </div>
                  )}
                </div>
              </>
            )}

            {isLoggedIn && (
              
              <button
                onClick={handleLogout}
                className="ml-4 md:ml-6 inline-flex items-center justify-center rounded-xl bg-[#B31312] py-3 px-2 font-dm text-base font-medium text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              >
                Logout
              </button>
            )}
          </div>
          {/* // its Dropdown to see product end */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
