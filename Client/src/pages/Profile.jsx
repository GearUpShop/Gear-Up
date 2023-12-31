// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Profile() {
//   const [profile, setProfile] = useState({
//     fullname: '',
//     email: '',
//     profileImage: '',
//   });
//   const [wishlist, setWishlist] = useState([]);
//   const [isEditFormVisible, setEditFormVisibility] = useState(false);
//   const [newImage, setNewImage] = useState(null);

//   useEffect(() => {
//     const savedProfile = JSON.parse(localStorage.getItem('profile'));
//     if (savedProfile) {
//       setProfile(savedProfile);
//     }

//     const savedWishlist = JSON.parse(localStorage.getItem('wishlist'));
//     if (savedWishlist) {
//       setWishlist(savedWishlist);
//     }

//     axios.get('http://your-api-endpoint')  // Replace 'http://your-api-endpoint' with your actual API endpoint
//       .then((response) => {
//         console.log('Data from additional endpoint:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data from additional endpoint:', error);
//       });
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('profile', JSON.stringify(profile));
//   }, [profile]);

//   useEffect(() => {
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
//   }, [wishlist]);

//   const handleProfileEdit = () => {
//     setEditFormVisibility(true);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         setNewImage(reader.result);
//       };
//     }
//   };

//   const handleProfileSave = (updatedProfile) => {
//     if (newImage) {
//       updatedProfile.profileImage = newImage;
//     }

//     axios.post('http://localhost:8000/Users', updatedProfile)
//       .then((response) => {
//         setProfile(response.data);
//         alert('Profile updated successfully');
//         setProfile(updatedProfile);
//         setEditFormVisibility(false);
//       })
//       .catch((error) => {
//         alert('Error updating profile:', error);
//       });
//   };

//   const handleRemoveFromWishlist = (itemId) => {
//     const updatedWishlist = wishlist.filter(item => item.id !== itemId);
//     setWishlist(updatedWishlist);
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

//     axios.delete(`http://localhost:3001/favorite/${itemId}`)
//       .then(() => {
//         alert('Item removed successfully');
//       })
//       .catch((error) => {
//         alert('Error removing item:', error);
//       });
//   }

//   return (
//     <div className="bg-white p-6 md:p-12">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-1">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="relative">
//               <div style={{ marginTop: '80px', marginBottom: '90px' }}>
//                 <img
//                   src={profile.profileImage}
//                   alt="Banner Image"
//                   className="w-full rounded-t-lg"
//                 />
//               </div>
//               <img
//                 src={profile.profileImage}
//                 alt="Profile Picture"
//                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
//               />
//             </div>
//             <div className="flex items-center mt-4">
//               <h2 className="text-xl font-bold text-gray-800">{profile.fullname}</h2>
//               <button onClick={handleProfileEdit} className="ml-2 text-blue-500 hover:underline">
//                 Edit Profile
//               </button>
//             </div>
//             <p className="text-gray-700 mt-2">email: {profile.email}</p>
//           </div>
//         </div>
//         <div className="md:col-span-2">
//           {isEditFormVisible ? (
//             <EditProfileForm
//               profile={profile}
//               onSave={handleProfileSave}
//               onCancel={() => setEditFormVisibility(false)}
//               onImageChange={handleImageChange}
//             />
//           ) : (
//             <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
//               <div style={{ marginTop: '80px', marginBottom: '90px' }}>
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Wishlist</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {wishlist.map((item) => (
//                     <article key={item.id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-2xl hover:transform hover:scale-105 duration-300">
//                       <a href="#">
//                         <div className="relative flex items-end overflow-hidden rounded-xl">
//                           <img src={item.image} alt="Product Photo" />
//                           <div style={{ position: 'absolute', top: '2px', right: '2px' }}>
//                             <div className="flex items-center space-x-1.8 rounded-lg bg-orange-500 px-2 py-1 text-white">
//                               <svg
//                                 className="w-4 h-4 text-yellow-300 mr-1"
//                                 aria-hidden="true"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="currentColor"
//                                 viewBox="0 0 22 20"
//                               >
//                                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                               </svg>
//                               <span className="text-sm font-bold">{item.rating}</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="mt-1 p-2">
//                           <h2 className="text-slate-700">{item.name}</h2>
//                           <p className="mt-1 text-sm text-slate-400">{item.subdescription}</p>
//                           <div className="mt-3 flex items-end justify-between">
//                             <p className="text-lg font-bold text-orange-500">{item.price}</p>
//                             <div
//                               className="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-4 py-1.5 text-white duration-100 hover-bg-orange-600"
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="h-4 w-4"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//                                 />
//                               </svg>
//                               <button className="text-sm">Add to cart</button>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </article>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function EditProfileForm({ profile, onSave, onCancel, onImageChange }) {
//   const [editedProfile, setEditedProfile] = useState(profile);

//   const handleSave = () => {
//     onSave(editedProfile);
//   };

//   return (
//     <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
//       <div style={{ marginTop: '80px', marginBottom: '90px' }}></div>
//       <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Profile</h3>
//       <div className="mb-2">
//         <label htmlFor="fullname" className="text-gray-700 font-semibold">fullName:</label>
//         <input
//           type="text"
//           id="fullname"
//           value={editedProfile.fullname}
//           onChange={(e) => setEditedProfile({ ...editedProfile, fullname: e.target.value })}
//         />
//       </div>
//       <div className="mb-2">
//         <label htmlFor="email" className="text-gray-700 font-semibold">email:</label>
//         <input
//           type="text"
//           id="email"
//           value={editedProfile.email}
//           onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
//         />
//       </div>
//       <div className="mb-2">
//         <label htmlFor="image" className="text-gray-700 font-semibold">Profile Picture:</label>
//         <input
//           type="file"
//           id="image"
//           accept="image/*"
//           onChange={onImageChange}  
//         />
//       </div>
//       <button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md mr-2">
//         Save
//       </button>
//       <button onClick={onCancel} className="text-gray-500 py-2 px-4">Cancel</button>
//     </div>
//   );
// }

// export default Profile;




import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import Wishlist from "../Component/Wishlist";



const getCookie = (name) => {
  let cookieArray = document.cookie.split('; ');
  for (let cookie of cookieArray) {
    let [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};

const Profile = () => {
  const [authToken, setAuthToken] = useState(null);

  const [userData, setUserData] = useState({
    id: "", // Replace with the actual user ID
    username: "",
    email: "",
    phone_number: "",
    password: "",
    avatar: "",
 // Add wishlist property to the initial state
  });
  const [wishlist , setWishlist] =useState([])
  console.log(wishlist)

  const [photoPreview, setPhotoPreview] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const handleSelectPhoto = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = handleAvatarChange;
    input.click();
  };

  useEffect(() => {
    const Token = getCookie("accessToken");
    setAuthToken(Token);
    
    const id = Cookies.get("id"); // Replace with the actual user ID
    axios
      .get('http://127.0.0.1:3001/userInfo',{
        headers: {
          Authorization: ` ${authToken}`,
          // Add other headers if needed
        },
      })
      .then((response) => {
        console.log("User Data:", response.data);
        setUserData(response.data);
        setPhotoPreview(response.data.avatar);
      })
      .catch((error) => {
        console.error("Error fetching user data from the server:", error);
      });


      
//http://127.0.0.1:3001/wishlist
    // Fetch wishlist data from JSON file
  //  try{
  //   const response =  axios.get("http://127.0.0.1:3001/wishlist",{
  //   headers: {
  //     Authorization: ` ${authToken}`,
  //   }
  //   }) 
  //   console.log("wishlist",response)
  // //     setWishlist(response.data)

  // }catch(error){
  //   console.log(error)
  // }

  }, [authToken]);

  // .then((response) => {
  //   console.log("Wishlist Data:", response.data);
  //   setUserData((prevUserData) => ({
  //     ...prevUserData,
  //     wishlist: response.data.wishlist,
  //   }));
  // })
  // .catch((error) => {
  //   console.error("Error fetching wishlist data from the server:", error);
  // });

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
     let formData = new FormData()
     formData.append("image", file)

    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = async () => {
    //   const base64Image = reader.result;

      try {
        // Update the user data on the JSON server
        const response = await axios.put(
          'http://127.0.0.1:3001/updateuserimage',
          formData,
          {
            headers: {
              Authorization: ` ${authToken}`
            },
          }
        );

        if (response.status === 200) {
          setUserData(response.data);
          let photoUrl = URL.createObjectURL(file)
          setPhotoPreview(photoUrl);
        } else {
          console.error("Failed to update avatar.");
        }
      } catch (error) {
        console.error("Error updating avatar:", error);
      }
    // };
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = Cookies.get("id"); // Replace with the actual user ID
console.log(userData.password);
      const response = await axios.put(
        'http://127.0.0.1:3001/edituser',userData,{
          headers: {
            Authorization: ` ${authToken}`
            // Add other headers if needed
          },
        },);

      if (response.status === 200) {
        alert("User data updated successfully!");
      } else {
        alert("Failed to update user data.");
      }
    } catch (error) {
      alert("Error updating user data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <div className="mt-2">
            <div
              className="block w-40 h-40 rounded-full m-auto shadow"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundImage: `url('${
                  photoPreview !== null ? photoPreview : userData.avatar
                }')`,
              }}
            />
          </div>
          <button
            onClick={handleSelectPhoto}
            class="bn632-hover bn28" id="button"          >
            Change Photo
          </button>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="mt-4 text-center p-4 md:mt-0"
        >
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="nameInput"
                className="block text-sm font-medium text-gray-500"
              >
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="nameInput"
                  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  className="mt-1 p-2 border rounded-md w-full max-w-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="emailInput"
                className="block mt-2 text-sm font-medium text-gray-500"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="emailInput"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="mt-1 p-2 border rounded-md w-full max-w-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneInput"
                className="block mt-2 text-sm font-medium text-gray-500"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phoneInput"
                  value={userData.phone_number}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      phone_number: e.target.value,
                    })
                  }
                  className="mt-1 p-2 border rounded-md w-full max-w-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="passwordInput"
                className="block mt-2 text-sm font-medium text-gray-500"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="passwordInput"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  className="mt-1 p-2 border rounded-md w-full max-w-md"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="bn632-hover bn28" id="button"          >
            Save Changes
          </button>
        </form>
      </div>
      {/* Wishlist Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
        {userData.wishlist && userData.wishlist.length > 0 ? (
          <ul className="list-disc list-inside">
            {userData.wishlist.map((item, index) => (
              <li key={index}>{item.item} - ${item.price}</li>
            ))}
          </ul>
        ) : (
          <p></p>

        )}
        {/* <Wishlist/> */}
      </div>
    </div>
  );
};

export default Profile;
