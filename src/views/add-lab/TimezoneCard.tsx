import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import { Controller, FieldError } from "react-hook-form";

import Label from "./Label";

import type { TimezoneProps, TimezoneType } from "../../types/lab";

const getTimzoneStr = (arr: TimezoneType[], selectedTZ: string) => {
  const obj = arr.find((tz: TimezoneType) => tz.name === selectedTZ);
  return obj ? `${obj.name} ${obj.offset}` : null;
};

const TimezoneCard = (props: TimezoneProps) => {
  const {
    timezoneLoading,
    control,
    errors,
    timezones,
    getValues,
    selectedTimezone,
  } = props;

  return (
    <Card variant="outlined" sx={{ mt: 4, borderRadius: "8px" }}>
      <Box sx={{ p: 2, backgroundColor: "#F9FAFB" }}>
        <Typography sx={{ color: "black", fontWeight: 700 }}>
          Portal Time zone
        </Typography>
      </Box>
      <CardContent>
        {timezoneLoading ? (
          "Loading..."
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Label label="Timezones" />
              <Controller
                name="timezone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    fullWidth
                    size="small"
                    defaultValue=""
                    error={Boolean(errors.timezone)}
                    {...field}
                  >
                    {timezones.map((tz, index) => (
                      <MenuItem key={tz.name + index} value={tz.name}>
                        {tz.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.timezone && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.timezone as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Selected Timezone</InputLabel>
              <Typography
                color={!Boolean(getValues("timezone")) ? "error" : "primary"}
              >
                {!Boolean(getValues("timezone")) && !selectedTimezone
                  ? "Please Select A Timezone"
                  : selectedTimezone
                  ? getTimzoneStr(timezones, selectedTimezone)
                  : getTimzoneStr(timezones, getValues("timezone"))}
              </Typography>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default TimezoneCard;
