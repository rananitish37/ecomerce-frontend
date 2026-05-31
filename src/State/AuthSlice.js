import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";

export const sendLoginSignupOtp = createAsyncThunk(
  "/sellers/sendLoginSignupOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/auth/sent/login-signup-otp",
        { email }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const Signing = createAsyncThunk(
  "/auth/signing",
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/auth/signing",
        loginRequest
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    error: null,
    otpSent: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(sendLoginSignupOtp.pending, (state) => {
        state.loading = true;
      })

      .addCase(sendLoginSignupOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
      })

      .addCase(sendLoginSignupOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(Signing.pending, (state) => {
        state.loading = true;
      })

      .addCase(Signing.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(Signing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;