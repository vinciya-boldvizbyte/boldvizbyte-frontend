import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import UsersPage from "./pages/UsersPage";
import TasksPage from "./pages/TasksPage";
import AttendancePage from "./pages/AttendancePage";
import ContactUs from "./pages/ContactUs";
import logo from './bvb.png';
import Login from "./pages/Login";
import ProjectsPage from "./pages/ProjectsPage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BoldVizByte Management System</h1>
        </header>

        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
