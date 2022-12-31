import { Grid, TextField } from "@mui/material";

export function InputDocument() {
  return (
    <Grid item xs={8}>
      <TextField fullWidth sx={{ m: 1 }} label="CPF" value={""}></TextField>
    </Grid>
  );
}
