import { Grid, TextField } from "@mui/material";

interface Props {
  lable: string;
}

export function InputText({ lable }: Props) {
  return (
    <Grid item xs={12}>
      <TextField fullWidth sx={{ m: 1 }} label={lable} value={""}></TextField>
    </Grid>
  );
}
