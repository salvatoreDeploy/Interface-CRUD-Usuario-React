import { Grid, TextField } from "@mui/material";

export function InputTelephone() {
  return (
    <Grid item xs={6}>
      <TextField
        fullWidth
        sx={{ m: 1 }}
        label="Telephone"
        value={""}
      ></TextField>
    </Grid>
  );
}
