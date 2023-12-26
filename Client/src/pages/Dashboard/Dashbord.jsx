import Sidebar from '../../componete/Dashboard/Sidebar';
import UsersTable from '../../componete/Dashboard/UsersTable';
import ProductTable from '../../componete/Dashboard/ProductTable';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../componete/Dashboard/AddProduct';
import AdminProfile from '../../componete/Dashboard/AdminProfile';
import ShoingStats from '../../componete/Dashboard/ShoingStats';
import MessageTable from '../../componete/Dashboard/MessageTable';

function Dashboard() {
  return (
    <div className='flex h-screen overflow-hidden '>
     
      <Sidebar />
      <div className='relative flex flex-col overflow-y-auto overflow-x-hidden flex-1   max-w-7xl '>

      <Routes>
       
          {/* Child routes */}
          <Route path="/usertable" element={<UsersTable />} />
          <Route path="/producttable" element={<ProductTable />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
          <Route path="/shoingStats" element={<ShoingStats />} />
          <Route path="/messageTable" element={<MessageTable />} />

         
        
      </Routes>
      </div>

    </div>
  );
}

export default Dashboard;
