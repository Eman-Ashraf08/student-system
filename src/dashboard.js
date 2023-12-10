import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTable, faBook, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div>
      <div className="dashboard">
        <nav className="sidebar">
          <div className="logo-container">
            <h3 style={{ fontSize: '24px' , color: 'white' }}><FontAwesomeIcon icon={faUserGraduate} />Student System</h3>
          </div>
          <ul style={{ paddingTop: '20px', textAlign: 'center' }}>
          <li><Link to="/student"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            {/* <li><Link to="/dashboard"><FontAwesomeIcon icon={faClipboardList} /> Dashboard</Link></li> */}
            <li><Link to="/coursetable"><FontAwesomeIcon icon={faBook} /> Course Table</Link></li>
            <li><Link to="/studenttable"><FontAwesomeIcon icon={faTable} /> Student Table</Link></li>
            <li><Link to="/attendancetable"><FontAwesomeIcon icon={faTable} /> Attendance Table</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;