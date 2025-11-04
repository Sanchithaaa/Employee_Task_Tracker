import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE
});

export const getEmployees = () => api.get("/api/employees");
export const createEmployee = (data) => api.post("/api/employees", data);

export const createTask = (data) => api.post("/api/tasks", data);
export const getTasksByEmployee = (id) => api.get(`/api/tasks/employee/${id}`);
export const updateTaskStatus = (id, status) =>
  api.put(`/api/tasks/${id}/status`, { status });

export const getPerformance = () => api.get("/api/performance");

export default api;
