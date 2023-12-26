import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UsersTable() {
  const [user, setUsers] = useState([]);



  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5002/users');
      setUsers(response.data.users);
    } catch (error) {
      console.error('حدث خطأ في جلب البيانات:', error);
    }
  };

  const handleSave = async (userId) => {
    try {
      await axios.put(`http://localhost:8000/Users/${userId}`, /* بيانات التحديث */);
      fetchData();
    } catch (error) {
      console.error('حدث خطأ في عملية الحفظ:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.put(`http://localhost:5002/user/${userId}`);
      setUsers([])
      fetchData();
      console.log(user);
    } catch (error) {
      console.error('حدث خطأ في عملية الحذف:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(user.length);

  return (
    <div className="text-gray-900 ">
      <div className="p-4 flex">
        <h1 className="text-3xl">Users</h1>
      </div>
      <div className="px-3 py-4 flex justify-center overflow-hidden">
        <table className="w-full text-md bg-white shadow-md rounded mb-4 overflow-hidden">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Role</th>
              <th />
            </tr>
            {Array.isArray(user) && user.length > 0 ? (
              user.map((users) => (
                <tr key={users.id} className="border-b hover:bg-orange-100 bg-gray-100">
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value={users.username}
                      className="bg-transparent"
                      readOnly
                    />
                  </td>
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value={users.email}
                      className="bg-transparent"
                      readOnly
                    />
                  </td>
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value={users.role}
                      className="bg-transparent"
                      readOnly
                    />
                  </td>
                  <td className="p-3 px-5 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleSave(users.id)}
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(users._id)}
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
     
    </div>
  );
}

export default UsersTable;
