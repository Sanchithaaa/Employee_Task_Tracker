import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Employees from "./pages/Employees";
import Tasks from "./pages/Tasks";
import Performance from "./pages/Performance";
import Dashboard from "./pages/Dashboard"; // ✅ VERY IMPORTANT

import { Box } from "@mui/material";

function App() {
  const [menu, setMenu] = useState("dashboard"); // ✅ default page

  return (
    <Box display="flex">
      <Sidebar setMenu={setMenu} />

      <Box flex={1} p={3}>
        {menu === "dashboard" && <Dashboard setMenu={setMenu} />}   {/* ✅ */}
        {menu === "employees" && <Employees />}
        {menu === "tasks" && <Tasks />}
        {menu === "performance" && <Performance />}
      </Box>
    </Box>
  );
}

export default App;
