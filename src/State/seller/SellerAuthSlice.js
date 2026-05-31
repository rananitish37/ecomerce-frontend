import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";


export const sellerLogin = createAsyncThunk("/sellerAuth/sellerLogin",
    async (loginRequest, {rejectWithValue}) =>{
        try {
            const response = await api.get("/sellers/login",loginRequest);
            console.log("login opt",response.data);
        } catch (error) {
            console.log("Error--", error);
        }
    }
)