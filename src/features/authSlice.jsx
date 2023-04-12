import { createSlice } from "@reduxjs/toolkit";
//!token güvenlik mekanizmalı apilerde kullanılan şifre /key.Api bize bu tokenı veriyor ve biz bu token ile get post delete işlemlerini yapıyoruz.
const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user;
     
      state.token = payload.key;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user;
      state.token = payload.key;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
//?reducer statelerin nasıl değişeceğini belirliyor.Değişim dispatchler aracılığı ile yapılıyor.
export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
