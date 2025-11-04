import { useEffect, useState } from "react";
import {
  getEmployees,
  createTask,
  getTasksByEmployee,
  updateTaskStatus
} from "../api";

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

export default function Tasks() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [taskForm, setTaskForm] = useState({ title: "", description: "" });
  const [tasks, setTasks] = useState([]);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  const loadTasks = async (id) => {
    const res = await getTasksByEmployee(id);
    setTasks(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const assignTask = async () => {
    if (!selectedEmployee) return alert("Select employee first!");

    await createTask({
      ...taskForm,
      employeeId: selectedEmployee
    });
    setTaskForm({ title: "", description: "" });
    loadTasks(selectedEmployee);
  };

  const markDone = async (id) => {
    await updateTaskStatus(id, "COMPLETED");
    loadTasks(selectedEmployee);
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Tasks
      </Typography>

      {/* Assign Task Card */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <FormControl sx={{ width: 200, mr: 2 }}>
          <InputLabel>Select Employee</InputLabel>
          <Select
            value={selectedEmployee}
            label="Select Employee"
            onChange={(e) => {
              setSelectedEmployee(e.target.value);
              loadTasks(e.target.value);
            }}
          >
            {employees.map((e) => (
              <MenuItem key={e.id} value={e.id}>
                {e.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Task Title"
          sx={{ mr: 2 }}
          value={taskForm.title}
          onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })}
        />

        <TextField
          label="Task Description"
          sx={{ mr: 2 }}
          value={taskForm.description}
          onChange={(e) =>
            setTaskForm({ ...taskForm, description: e.target.value })
          }
        />

        <Button variant="contained" onClick={assignTask}>
          Assign
        </Button>
      </Paper>

      {/* Task List */}
      <Paper>
        <Table>
          <TableHead sx={{ bgcolor: "#f1f5f9" }}>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tasks.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No tasks
                </TableCell>
              </TableRow>
            )}

            {tasks.map((t) => (
              <TableRow key={t.id}>
                <TableCell>{t.title}</TableCell>
                <TableCell>{t.description}</TableCell>
                <TableCell>{t.status}</TableCell>
                <TableCell>
                  {t.status !== "COMPLETED" && (
                    <Button variant="contained" color="success" onClick={() => markDone(t.id)}>
                      ✅ Mark Completed
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
