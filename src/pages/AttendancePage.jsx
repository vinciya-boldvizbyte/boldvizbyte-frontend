import React, { useState } from "react";
import "../styles/attendance.css";
import { getAttendance,markAttendance } from "../apiService";


const AttendancePage = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Jones", status: "Present" },
    { id: 2, name: "Vincy", status: "Absent" },
    { id: 3, name: "Ruby", status: "Present" },
    { id: 4, name: "Austin", status: "Present" },
  ]);

  // Update attendance
  const handleStatusChange = (id, status) => {
    const updated = employees.map((emp) =>
      emp.id === id ? { ...emp, status } : emp
    );
    setEmployees(updated);
  };

  return (
    <div className="attendance-container">
      <h1 className="attendance-title">Attendance Dashboard</h1>

      {/* Summary Cards */}
      <div className="attendance-summary">
        <div className="summary-card present-card">
          <h2>Present</h2>
          <p>{employees.filter((e) => e.status === "Present").length}</p>
        </div>

        <div className="summary-card absent-card">
          <h2>Absent</h2>
          <p>{employees.filter((e) => e.status === "Absent").length}</p>
        </div>
      </div>

      {/* Table */}
      <table className="attendance-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Status</th>
            <th>Mark Attendance</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td
                className={
                  emp.status === "Present" ? "status-present" : "status-absent"
                }
              >
                {emp.status}
              </td>
              <td>
                <button
                  className="present-btn"
                  onClick={() => handleStatusChange(emp.id, "Present")}
                >
                  Present
                </button>
                <button
                  className="absent-btn"
                  onClick={() => handleStatusChange(emp.id, "Absent")}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;