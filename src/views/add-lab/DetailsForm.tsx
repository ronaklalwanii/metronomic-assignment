import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";

import { Controller, FieldError } from "react-hook-form";

import Label from "./Label";
import { states } from "../../db/states";

import type { ProviderType, DetailsFormProps } from "../../types/lab";

const DetailsForm = (props: DetailsFormProps) => {
  const { control, errors, getValues, loading, providers } = props;

  return (
    <Card variant="outlined" sx={{ borderRadius: "8px" }}>
      <Box sx={{ p: 2, backgroundColor: "#F9FAFB" }}>
        <Typography sx={{ color: "black", fontWeight: 700 }}>
          Details
        </Typography>
      </Box>
      <CardContent>
        {loading ? (
          "Loading..."
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label label="Lab Name" />
              <Controller
                name="labName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    size="small"
                    error={Boolean(errors.labName)}
                    sx={{ maxWidth: { sm: 350 } }}
                    {...field}
                  />
                )}
              />
              {errors.labName && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.labName as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Label label="Provider Group" />
              <Controller
                name="providerGroup"
                control={control}
                rules={{ required: true }}
                disabled={!providers.length}
                render={({ field }) => (
                  <Select
                    fullWidth
                    size="small"
                    defaultValue=""
                    error={Boolean(errors.providerGroup)}
                    {...field}
                  >
                    {providers?.map((p: ProviderType) => (
                      <MenuItem key={p.name} value={p.name}>
                        {p.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.providerGroup && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.providerGroup as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Label label="Provider Unit" />
              <Controller
                name="providerUnit"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    fullWidth
                    size="small"
                    defaultValue=""
                    error={Boolean(errors.providerUnit)}
                    disabled={
                      !providers.length || !Boolean(getValues("providerGroup"))
                    }
                    {...field}
                  >
                    {providers
                      ?.find(
                        (i: ProviderType) =>
                          i?.name === getValues("providerGroup")
                      )
                      ?.units?.map((u) => (
                        <MenuItem key={u} value={u}>
                          {u}
                        </MenuItem>
                      ))}
                  </Select>
                )}
              />
              {errors.providerUnit && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.providerUnit as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Label label="Address" />
              <Controller
                name="address"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    multiline
                    minRows={1}
                    size="small"
                    error={Boolean(errors.address)}
                    {...field}
                  />
                )}
              />
              {errors.address && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.address as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Label label="State" />
              <Controller
                name="state"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    fullWidth
                    size="small"
                    defaultValue=""
                    error={Boolean(errors.state)}
                    {...field}
                  >
                    {states.map((s) => (
                      <MenuItem key={s} value={s}>
                        {s}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.state && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.state as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Label label="City" />
              <Controller
                name="city"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    fullWidth
                    size="small"
                    defaultValue=""
                    error={Boolean(errors.city)}
                    {...field}
                  >
                    {providers?.map((p: ProviderType) =>
                      p?.units?.map((u: string) => (
                        <MenuItem key={u} value={u}>
                          {u}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                )}
              />
              {errors.city && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.city as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Label label="Zip Code" />
              <Controller
                name="zipcode"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    error={Boolean(errors.zipcode)}
                    sx={{ maxWidth: { sm: 350 } }}
                    {...field}
                  />
                )}
              />
              {errors.zipcode && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.zipcode as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Label label="Office Phone" />
              <Controller
                name="officePhone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    error={Boolean(errors.officePhone)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+1</InputAdornment>
                      ),
                    }}
                    {...field}
                  />
                )}
              />
              {errors.officePhone && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.officePhone as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Label label="Mobile" />
              <Controller
                name="mobile"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    error={Boolean(errors.mobile)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+1</InputAdornment>
                      ),
                    }}
                    {...field}
                  />
                )}
              />
              {errors.mobile && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.mobile as FieldError).message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Label label="Email ID" />
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    size="small"
                    type="email"
                    error={Boolean(errors.email)}
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
                  {(errors.email as FieldError).message}
                </Typography>
              )}
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default DetailsForm;
