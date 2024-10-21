import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'; 
function Sidebar() {
  return (
    <div className="sidebar">
      <h2>EzyMetrics</h2>
      <ul>
      <Link to="/"> <li>Dashboard</li> </Link> 
      <Link to="/leads"><li>Leads</li></Link>  
      <Link to="/analytics"> <li>Analytics</li> </Link>
     <Link to="/reports"><li>Reports</li></Link>  
      </ul>
    </div>
  );
}

export default Sidebar;
