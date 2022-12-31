import Search from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";
import Cached from "@mui/icons-material/Cached";
import {
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { Popup } from "./Popup";
import { useState } from "react";
import { NewUserForm } from "./NewUserForm";

export function BarraDeFerramenta() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Box
      height={theme.spacing(5)}
      gap={3}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      component={Paper}
    >
      <Button variant="contained" startIcon={<Add />} onClick={handleClickOpen}>
        Novo
      </Button>
      <Popup
        title="Cadastrar Novo Usuario"
        open={open}
        onClose={handleClickClose}
      ></Popup>

      <TextField
        sx={{ width: "100ch" }}
        size="small"
        placeholder="Pesquisar..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <IconButton>
        <Cached />
      </IconButton>
    </Box>
  );
}
