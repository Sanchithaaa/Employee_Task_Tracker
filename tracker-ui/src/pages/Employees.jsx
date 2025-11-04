import { useEffect, useState } from "react";
import { getEmployees, createEmployee } from "../api";
import { Box, Button, TextField, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  const load = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async () => {
    await createEmployee(form);
    setForm({ name: "", email: "", role: "" });
    load();
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2}>Employees</Typography>

      <Paper sx={{ p:2, mb:3 }}>
        <TextField label="Name" sx={{ mr:2 }} value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <TextField label="Email" sx={{ mr:2 }} value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <TextField label="Role" sx={{ mr:2 }} value={form.role} onChange={(e)=>setForm({...form,role:e.target.value})}/>
        <Button variant="contained" onClick={submit}>Add</Button>
      </Paper>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell><TableCell>Email</TableCell><TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((e)=>(
              <TableRow key={e.id}>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell>{e.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
