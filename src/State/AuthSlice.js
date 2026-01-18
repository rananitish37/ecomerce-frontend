import { createAsyncThunk } from "@reduxjs/toolkit";
import {api} from "../config/Api";

export const sendLoginSignupOtp = createAsyncThunk("/sellers/sendLoginSignupOtp",
    async({email}, {rejectWithValue}) =>{
        try {
            const response = await api.post("/auth/sent/login-signup-otp",{email})
            console.log("login otp response ",response)
            return response.data;
        } catch (error) {
            console.log("error - - -",error)
        }
    }
)

export const Signing = createAsyncThunk("/auth/signing",
    async(loginRequest, {rejectWithValue}) =>{
        try {
            const response = await api.post("/auth/signing",loginRequest)
            console.log("login otp response ",response.data)
            return response.data;
        } catch (error) {
            console.log("error - - -",error)
        }
    }
)