import React, { useState, useEffect } from "react";
import "../styles/users.css";
import { getUsers, addUser, deleteUser } from "../apiService";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");

  // Load all users when page opens
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data.data); // from backend: {message, data}
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Add user to backend
  const handleAddUser = async () => {
    if (!newUserName || !newUserEmail) {
      alert("Please enter name and email");
      return;
    }

    try {
      const newUser = { name: newUserName, email: newUserEmail };
      await addUser(newUser);

      setNewUserName("");
      setNewUserEmail("");
      fetchUsers(); // refresh table
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Delete user from backend
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers(); // refresh table
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="users-page-container">
      <h1>Users Management</h1>

      <div className="add-user-form">
        <input
          type="text"
          placeholder="Name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
