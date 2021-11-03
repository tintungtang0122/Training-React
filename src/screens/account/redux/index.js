import { createSlice } from '@reduxjs/toolkit';
const accountSlice = createSlice({
  name: 'account',
  initialState: {
    token: '',
    isProcessing: false
  },
  reducers: {
    resetType: (state) => {
      state.type = '';
    },
    signIn: (state, action) => {
      state.type = action.payload.type;
      state.isProcessing = true;
    },
    signInSuccess: (state, action) => {
      state.token = action.payload.data.token;
      state.type = 'SIGN_IN_SUCCESS';
      state.isProcessing = false;
    },
    signInFailed: (state) => {
      state.type = 'SIGN_IN_FAIL';
      state.isProcessing = false;
    },
    logOut: (state) => {
      state.type = 'LOOUT_SUCCESS';
      state.token = '';
    }
  }
});

const { actions, reducer } = accountSlice;

export const {
  signIn,
  signInSuccess,
  signInFailed,
  logOut,
  favorite,
  resetType
} = actions;

export default reducer;
