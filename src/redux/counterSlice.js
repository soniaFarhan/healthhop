import { createSlice } from '@reduxjs/toolkit';
import {  useNavigate } from "react-router-dom";
// import colors, { layoutColors } from '../config/colors';

const initialState = {
  token: localStorage.getItem('token') || null,
  userType: localStorage.getItem('userType') || null,
  isLoggedIn: !!localStorage.getItem('token'),
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  
    login: (state, {payload}) => {
      localStorage.setItem('token',payload.token)
      localStorage.setItem('userType',payload.userType)
      state.token = payload.token;
      state.userType = payload.userType;
      state.isLoggedIn=true

    },
    logout: (state) => {
        state.token = null;
        state.userType =null;
        state.isLoggedIn=false
        localStorage.removeItem('token')
      localStorage.removeItem('userType')
      },
     
  }
});

// Action creators are generated for each case reducer function
export const {
login,
logout,
} = counterSlice.actions;

export default counterSlice.reducer;
