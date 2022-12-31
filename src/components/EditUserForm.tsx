import { Box, Grid, Button } from "@mui/material";
import { InputCalendar } from "./InputCalendar";
import { InputDocument } from "./InputDocument";
import { InputPassword } from "./InputPassword";
import { InputText } from "./InputsText";
import { InputTelephone } from "./InputTelephone";

export function EditUserForm() {
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
        <Button variant="contained">Salvar</Button>
      </Box>
    </Box>
  );
}
