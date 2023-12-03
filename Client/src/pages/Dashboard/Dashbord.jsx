import Sidebar from '../../componete/Dashboard/Sidebar';
import UsersTable from '../../componete/Dashboard/UsersTable';
import ProductTable from '../../componete/Dashboard/ProductTable';
import { Routes, Route } from 'react-router-dom';

function Dashboard() {
  return (
    <div >
     
      <Sidebar />
      <Routes>
       
          {/* Child routes */}
          <Route path="/usertable" element={<UsersTable />} />
          <Route path="/producttable" element={<ProductTable />} />
        
      </Routes>
    
    </div>
  );
}

export default Dashboard;
