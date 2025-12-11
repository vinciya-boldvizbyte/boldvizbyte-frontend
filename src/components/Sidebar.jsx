import React from "react";
import { FaHome, FaUsers, FaClipboardList, FaCalendarCheck, FaInfoCircle, FaEnvelope, FaUser, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard"><FaHome /> Home</Link></li>
        <li><Link to="/users"><FaUsers /> Users</Link></li>
        <li><Link to="/tasks"><FaClipboardList /> Tasks</Link></li>
        <li><Link to="/attendance"><FaCalendarCheck /> Attendance</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact Us</Link></li>
        <li><Link to="/login"><FaUser /> Login</Link></li>
        <li>
          <Link to="/projects"><FaFolderOpen /> Projects</Link>
        </li>
        

      </ul>
    </div>
  );
};

export default Sidebar;
