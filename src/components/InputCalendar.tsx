import { Grid, Stack, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export function InputCalendar() {
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

  return (
    <Grid item xs={6}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack sx={{ m: 1 }}>
          <DatePicker
            inputFormat="DD/MM/YYYY"
            disableFuture
            openTo="day"
            views={["day", "month", "year"]}
            value={value}
            onChange={(value) => setValue(value)}
            renderInput={(params) => <TextField {...params} />}
          ></DatePicker>
        </Stack>
      </LocalizationProvider>
    </Grid>
  );
}
