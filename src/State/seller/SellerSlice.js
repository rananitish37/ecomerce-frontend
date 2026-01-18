import { createAsyncThunk } from "@reduxjs/toolkit";
import {api} from "../../config/Api";

export const fetchSellerProfile = createAsyncThunk("/sellers/fetchSellerProfile",
    async(jwt, {rejectWithValue}) =>{
        try {
            const response = await api.get("/sellers/profile",{
                Headers: {
                    Authorization: `Bearer ${jwt}`
                },
            })
            console.log("fetch seller Profile ",response)
        } catch (error) {
            console.log("error - - -",error)
        }
    }
)