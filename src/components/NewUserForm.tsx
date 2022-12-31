import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";

import { InputCalendar } from "./InputCalendar";
import { InputDocument } from "./InputDocument";
import { InputPassword } from "./InputPassword";
import { InputText } from "./InputsText";
import { InputTelephone } from "./InputTelephone";

export function NewUserForm() {
  return (
    <Box>
      <Grid container>
        <InputText lable="Nome" />
        <InputText lable="E-mail" />
        <InputCalendar />
        <InputTelephone />
        <InputDocument />
        <InputPassword>Password</InputPassword>
        <InputPassword>Confirm Password</InputPassword>
      </Grid>
      <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined" color="error">
          Excluir
        </Button>
        <Button variant="contained">Salvar</Button>
      </Box>
    </Box>
  );
}
