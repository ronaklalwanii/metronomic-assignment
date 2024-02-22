import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { FormValues } from "../types/lab";

export const fetchTimezones = createAsyncThunk(
  "lab/fetchTimezones",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/timezones");

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const fetchLabs = createAsyncThunk(
  "lab/fetchLabs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/labs");

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const fetchProviders = createAsyncThunk(
  "lab/fetchProviders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/providers");

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const postLab = createAsyncThunk(
  "lab/postLab",
  async (data: FormValues, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/add-lab", {
        params: data,
      });

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  labs: [],
  loading: false,
  providers: [],
  timezones: [],
  labsLoading: false,
  selectedTimezone: null,
  timezoneLoading: false,
};

const labSlice = createSlice({
  name: "lab",
  initialState,
  reducers: {
    setSelectedTimezone: (state, action) => {
      state.selectedTimezone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLabs.pending, (state) => {
        state.labsLoading = true;
      })
      .addCase(fetchLabs.fulfilled, (state, action) => {
        state.labs = action.payload;
        state.labsLoading = false;
      })
      .addCase(fetchProviders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProviders.fulfilled, (state, action) => {
        state.providers = action.payload;
        state.loading = false;
      })
      .addCase(fetchTimezones.pending, (state) => {
        state.timezoneLoading = true;
      })
      .addCase(fetchTimezones.fulfilled, (state, action) => {
        state.timezones = action.payload;
        state.timezoneLoading = false;
      })
      .addCase(postLab.pending, (state) => {
        state.labsLoading = true;
      })
      .addCase(postLab.fulfilled, (state) => {
        state.labsLoading = false;
      });
  },
});

export const { setSelectedTimezone } = labSlice.actions;

export default labSlice.reducer;
