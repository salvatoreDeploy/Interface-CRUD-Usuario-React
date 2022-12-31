import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import { Popup } from "./Popup";

function createData(id: string, name: string, email: string, cpf: string) {
  return { id, name, email, cpf };
}

const rows = [
  createData(
    "1",
    "Henrique Jose de Araujo",
    "henrique@teste.com",
    "090.422.166-44"
  ),
  createData(
    "2",
    "Jeniffer Ap. Matos de Araujo",
    "jeh@teste.com",
    "449.540.978-60"
  ),
  createData(
    "3",
    "Priscila Jose de Araujo",
    "piscila@teste.com",
    "000.000.000-00"
  ),
  createData(
    "4",
    "Victor Henrique de Araujo",
    "vivi@teste.com",
    "000.000.000-00"
  ),
];

export function BasicTable() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ mx: "auto", maxWidth: 1120, py: 2 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nomes</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.cpf}</TableCell>
                <TableCell>
                  <IconButton onClick={handleClickOpen}>
                    <Edit color="primary" />
                  </IconButton>
                  <IconButton onClick={() => console.log("deletar")}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup
        title="Editar Usuario"
        open={open}
        onClose={handleClickClose}
      ></Popup>
    </Box>
  );
}
