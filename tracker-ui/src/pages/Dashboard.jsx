import { useEffect, useState } from "react";
import { getEmployees, getPerformance } from "../api";
import { Box, Typography, Paper, Button, Divider } from "@mui/material";

export default function Dashboard({ setMenu }) {
  const [empCount, setEmpCount] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    getEmployees().then(res => setEmpCount(res.data.length));
    getPerformance().then(res => {
      const total = res.data.reduce((a, b) => a + b.totalTasks, 0);
      const done = res.data.reduce((a, b) => a + b.completedTasks, 0);
      setTotalTasks(total);
      setCompleted(done);
    });
  }, []);

  const percent = totalTasks === 0 ? 0 : ((completed / totalTasks) * 100).toFixed(1);

  return (
    <Box>
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Welcome to Employee Task Tracker
      </Typography>

      {/* <Typography variant="body1" color="gray" mb={3}>
        This is a simple full-stack project built using Spring Boot & React.
        Manage employees, assign tasks, and track performance.
      </Typography> */}

      {/* Summary Box */}
      <Paper sx={{ p: 3, mb: 4, maxWidth: 400 }}>
        <Typography variant="h6" mb={1}>Application Summary</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>Employees: {empCount}</Typography>
        <Typography>Total Tasks: {totalTasks}</Typography>
        <Typography>Completed Tasks: {completed}</Typography>
        <Typography>Completion Rate: {percent}%</Typography>
      </Paper>

      {/* Buttons Section */}
      <Typography variant="h6" mb={1}>Quick Actions</Typography>

      <Box>
        <Button variant="contained" sx={{ mr: 2, mb: 2 }} onClick={() => setMenu("employees")}>
          Manage Employees
        </Button>
        <Button variant="contained" sx={{ mr: 2, mb: 2 }} onClick={() => setMenu("tasks")}>
          Manage Tasks
        </Button>
        <Button variant="outlined" sx={{ mb: 2 }} onClick={() => setMenu("performance")}>
          View Performance
        </Button>
      </Box>
    </Box>
  );
}
