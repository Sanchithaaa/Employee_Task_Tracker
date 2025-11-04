import { useEffect, useState } from "react";
import { getPerformance } from "../api";
import { Box, Typography, Paper } from "@mui/material";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Performance() {
  const [stats, setStats] = useState([]);

  const load = async () => {
    const res = await getPerformance();
    setStats(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const data = {
    labels: stats.map((s) => s.name),
    datasets: [
      {
        label: "Performance % 🔥",
        data: stats.map((s) => s.performancePercent),
        backgroundColor: "rgba(25, 118, 210, 0.7)", // MUI blue
        borderColor: "rgba(25,118,210,1)",
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Performance Dashboard
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Bar data={data} options={options} />
      </Paper>

      <Box mt={3}>
        <Typography variant="h6">📈 Summary</Typography>
        {stats.map((s) => (
          <Typography key={s.employeeId}>
            ✅ {s.name}: {s.completedTasks}/{s.totalTasks} tasks ({s.performancePercent.toFixed(1)}%)
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
