// import React from 'react'

// function SignUp() {
//   return (
//     <div>
//         <>
//   {/* component */}
//   <div className="bg-grey-lighter min-h-screen flex flex-col">
//     <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//       <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
//         <h1 className="mb-8 text-3xl text-center">Sign up</h1>
//         <input
//           type="text"
//           className="block border border-grey-light w-full p-3 rounded mb-4"
//           name="fullname"
//           placeholder="Full Name"
//         />
//         <input
//           type="text"
//           className="block border border-grey-light w-full p-3 rounded mb-4"
//           name="email"
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           className="block border border-grey-light w-full p-3 rounded mb-4"
//           name="password"
//           placeholder="Password"
//         />
//         <input
//           type="password"
//           className="block border border-grey-light w-full p-3 rounded mb-4"
//           name="confirm_password"
//           placeholder="Confirm Password"
//         />
//         <button
//           type="submit"
//           className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
//         >
//           Create Account
//         </button>
//         <div className="text-center text-sm text-grey-dark mt-4">
//           By signing up, you agree to the
//           <a
//             className="no-underline border-b border-grey-dark text-grey-dark"
//             href="#"
//           >
//             Terms of Service
//           </a>{" "}
//           and
//           <a
//             className="no-underline border-b border-grey-dark text-grey-dark"
//             href="#"
//           >
//             Privacy Policy
//           </a>
//         </div>
//       </div>
//       <div className="text-grey-dark mt-6">
//         Already have an account?
//         <a
//           className="no-underline border-b border-blue text-blue"
//           href="../login/"
//         >
//           Log in
//         </a>
//         .
//       </div>
//     </div>
//   </div>
// </>

//     </div>
//   )
// }

// export default SignUp



// import React from 'react';
// import axios from 'axios';
// axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`;

// function SignUp() {
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = {
  //     username: event.target.fullname.value,
  //     email: event.target.email.value,
  //     password: event.target.password.value,
  //     // confirm_password: event.target.confirm_password.value,
  //   };

  //   try {
  //     // Make a POST request to the server
  //     await axios.post('http://localhost:5002/signup', formData);

  //     // Handle success, e.g., show a success message or redirect
  //     console.log('User created successfully');

  //     // Show an alert message
  //     alert('User created successfully!');

  //   } catch (error) {
  //     // Handle error, e.g., show an error message
  //     console.error('Error creating user:', error);
  //   }
//   };

//   return (
//     <>
//       {/* component */}
//       <div className="bg-grey-lighter min-h-screen flex flex-col">
//         <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//           <div className="bg-indigo-200 px-6 py-8 rounded shadow-md text-black w-full">
//             <h1 className="mb-8 text-3xl text-center">Sign up</h1>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 className="block border border-grey-light w-full p-3 rounded mb-4"
//                 name="fullname"
//                 placeholder="Full Name"
//               />
//               <input
//                 type="text"
//                 className="block border border-grey-light w-full p-3 rounded mb-4"
//                 name="email"
//                 placeholder="Email"
//               />
//               <input
//                 type="password"
//                 className="block border border-grey-light w-full p-3 rounded mb-4"
//                 name="password"
//                 placeholder="Password"
//               />
//               <input
//                 type="password"
//                 className="block border border-grey-light w-full p-3 rounded mb-4"
//                 name="confirm_password"
//                 placeholder="Confirm Password"
//               />
//               <button
//                 type="submit"
//                 className="w-full text-center py-3 rounded bg-indigo-900 text-white hover:bg-green-dark focus:outline-none my-1"
//               >
//                 Create Account
//               </button>
//             </form>
//             <div className="text-center text-sm text-grey-dark mt-4">
//               By signing up, you agree to the
//               <a
//                 className="no-underline border-b border-grey-dark text-grey-dark"
//                 href="#"
//               >
//                 Terms of Service
//               </a>{" "}
//               and
//               <a
//                 className="no-underline border-b border-grey-dark text-grey-dark"
//                 href="#"
//               >
//                 Privacy Policy
//               </a>
//             </div>
//           </div>
//           <div className="text-grey-dark mt-6">
//             Already have an account?
//             <a
//               className="no-underline border-b border-blue text-blue"
//               href="../login/"
//             >
//               Log in
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;



























import React from 'react'
 import axios from 'axios';
import { Link } from 'react-router-dom';
 axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('Token')}`;

function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      username: event.target.fullname.value,
      email: event.target.email.value,
      password: event.target.password.value,
      // confirm_password: event.target.confirm_password.value,
    };

    try {
      // Make a POST request to the server
      await axios.post('http://localhost:5002/signup', formData);

      // Handle success, e.g., show a success message or redirect
      console.log('User created successfully');

      // Show an alert message
      alert('User created successfully!');

    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error creating user:', error);
    }
  };
  return (
    <div>

      

<section className="font-poppins h-screen flex  ">
  <div className="max-w-6xl px-1 mx-auto lg:px-6  ">
    <div className="flex flex-col items-center h-full justify-center md:flex-row">
      <div className="flex flex-wrap items-center  bg-[#6c6e8e] shadow-lg dark:bg-gray-900 my-7 ">
        <div className="relative hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0">
          <div className="absolute inset-0 z-1 bg-gray-700 opacity-50"> </div>
          <img
            src="https://i.postimg.cc/XJBZvxHp/first.jpg"
            alt=""
            className="relative inset-0 object-cover w-full  "
          />
          <div className="absolute left-0 z-10 top-10 lg:top-40">
            <div className="p-14">
              <h2 className="text-4xl font-bold text-gray-300 lg:text-5xl ">
                <span className="text-yellow-300">Hello! </span>welcome to our
                community
              </h2>
              <p className="text-lg font-medium text-gray-300 py-7">
                Make your dream comes true and achieve your success
              </p>

              <Link to = '/login'>
              <button
              
                className="px-4 py-3 mt-4 font-semibold text-white bg-[#b31212dd] rounded-lg w-44 lg:w-80 hover:text-gray-600 "
                type="submit"
              >
                Login
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full px-2 lg:px-4 lg:w-2/4 lg:mb-0 lg:py-0 py-7 ">
          <div className="px-6 text-left ">
            <h2 className="text-3xl font-semibold leading-tight text-white my-7 md:text-4xl pb-7 dark:text-gray-400 ">
            Sign up
            </h2>
            <form onSubmit={handleSubmit} className="mt-6">


            <div className="mt-6">
                <label htmlFor="" className="text-white dark:text-gray-300">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 mt-2 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                  name="fullname"
                   placeholder="Full Name"
                />
              </div>


              <div className="mt-6">
                <label htmlFor="" className="text-white dark:text-gray-300">
                  Email:
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 mt-2 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                  name="email"
                placeholder="Email"
                />
              </div>

            
              <div className="mt-6">
                <div>
                  <label
                    htmlFor=""
                    className="pb-4 mb-2 text-white dark:text-gray-300"
                  >
                    Password:
                  </label>
                  <div className="relative flex items-center mt-2">
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800 "
                      name="password"
                     placeholder="Password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      className="absolute right-0 mr-3 dark:text-gray-50"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <button
                className="w-full px-4 py-3 mt-4 font-semibold text-white bg-[#b31212dd] rounded-lg hover:text-blue-600 "
                type="submit"
              >
               Create Account
              </button>
              <p className="mt-8 text-white dark:text-gray-400">
              Already have an account?
                <a
                  href="login"
                  className="font-semibold text-blue-400 hover:text-blue-600"
                >
                 Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  )
}

export default SignUp





























