import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material";


export default function Sidebar({ setMenu }) {
  return (
    <Box width="250px" bgcolor="#0f172a" color="white" height="100vh" p={2}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Dashboard
      </Typography>
      <List>
       <ListItemButton onClick={() => setMenu("dashboard")}>
  <ListItemText primary="Dashboard" />
</ListItemButton>
        <ListItemButton onClick={() => setMenu("employees")}>
          <ListItemText primary="Employees" />
        </ListItemButton>

        <ListItemButton onClick={() => setMenu("tasks")}>
          <ListItemText primary="Tasks" />
        </ListItemButton>

        <ListItemButton onClick={() => setMenu("performance")}>
          <ListItemText primary="Performance" />
        </ListItemButton>
      </List>
    </Box>
  );
}
