import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Sidebar-specific styles

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <>
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar with conditional open class */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>EzyMetrics</h2>
        <ul>
          <Link to="/" onClick={toggleSidebar}><li>Dashboard</li></Link>
          <Link to="/leads" onClick={toggleSidebar}><li>Leads</li></Link>
          <Link to="/analytics" onClick={toggleSidebar}><li>Analytics</li></Link>
          <Link to="/reports" onClick={toggleSidebar}><li>Reports</li></Link>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
