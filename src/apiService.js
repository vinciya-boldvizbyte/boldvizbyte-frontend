import axios from "axios";
import { API_BASE } from "./api"; // your backend base URL

// Users
export const getUsers = () => axios.get(`${API_BASE}/users`);
export const addUser = (user) => axios.post(`${API_BASE}/users`, user);
export const deleteUser = (id) => axios.delete(`${API_BASE}/users/${id}`);

// Tasks
export const getTasks = () => axios.get(`${API_BASE}/tasks`);
export const addTask = (task) => axios.post(`${API_BASE}/tasks`, task);
export const deleteTask = (id) => axios.delete(`${API_BASE}/tasks/${id}`);
export const updateTaskStatus = (id, status) =>
  axios.put(`${API_BASE}/tasks/${id}`, { status });

// Projects
export const getProjects = () => axios.get(`${API_BASE}/projects`);
export const addProject = (project) => axios.post(`${API_BASE}/projects`, project);
export const deleteProject = (id) => axios.delete(`${API_BASE}/projects/${id}`);
export const updateProjectStatus = (id, status) =>
  axios.put(`${API_BASE}/projects/${id}`, { status });

// Attendance
export const getAttendance = () => axios.get(`${API_BASE}/attendance`);
export const markAttendance = (userId, status) =>
  axios.post(`${API_BASE}/attendance`, { userId, status });
