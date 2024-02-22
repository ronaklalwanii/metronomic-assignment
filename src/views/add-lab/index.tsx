import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";

import { RootStateType } from "../../store";
import {
  postLab,
  fetchProviders,
  fetchTimezones,
  setSelectedTimezone,
} from "../../store/lab";

import DetailsForm from "./DetailsForm";
import TimezoneCard from "./TimezoneCard";

import type { FormValues } from "../../types/lab";

const formSchema = yup.object().shape({
  city: yup.string().required(),
  state: yup.string().required(),
  address: yup.string().required(),
  timezone: yup.string().required(),
  providerUnit: yup.string().required(),
  providerGroup: yup.string().required(),
  email: yup.string().email().required(),
  labName: yup.string().min(1).required(),
  zipcode: yup.string().min(6).max(6).required(),
  mobile: yup.string().min(10).max(10).required(),
  officePhone: yup.string().min(10).max(10).required(),
});

const defaultValues = {
  city: "",
  state: "",
  address: "",
  timezone: "",
  providerUnit: "",
  providerGroup: "",
  email: "",
  labName: "",
  zipcode: "",
  mobile: "",
  officePhone: "",
};

const AddLab = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const {
    watch,
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(formSchema),
  });

  const dispatch = useDispatch();
  const { providers, loading, timezoneLoading, timezones, selectedTimezone } =
    useSelector((state: RootStateType) => state.lab);

  useEffect(() => {
    dispatch(fetchProviders());
    dispatch(fetchTimezones());
  }, [dispatch]);

  useEffect(() => {
    watch("providerGroup");
    watch("timezone");
  }, [watch]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(setSelectedTimezone(data.timezone));

    setOpen(true);
  };

  const handleAddLab = () => {
    dispatch(postLab(getValues()));
    navigate("/labs");
  };

  return (
    <Container maxWidth="md">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <DetailsForm
          errors={errors}
          control={control}
          loading={loading}
          getValues={getValues}
          providers={providers}
        />

        <TimezoneCard
          errors={errors}
          control={control}
          timezones={timezones}
          getValues={getValues}
          timezoneLoading={timezoneLoading}
          selectedTimezone={selectedTimezone}
        />

        <Divider sx={{ my: 4 }} />
        <Button type="submit" variant="contained" color="success">
          Register Lab
        </Button>
      </form>
      <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
        <DialogTitle variant="h5">Lab Details</DialogTitle>
        <DialogContent>
          <ul>
            {Object.keys(getValues()).map((k) => (
              <Box
                key={k}
                component="li"
                sx={{
                  mt: 0.1,
                  gap: 1,
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Typography sx={{ minWidth: 150 }}>{k}:</Typography>
                <Typography fontWeight={700}>
                  {(getValues() as any)[k]}
                </Typography>
              </Box>
            ))}
          </ul>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 2 }}>
            <Button color="success" variant="contained" onClick={handleAddLab}>
              Add Lab
            </Button>
            <Button color="error" variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default AddLab;
