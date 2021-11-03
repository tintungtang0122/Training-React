import { combineReducers } from '@reduxjs/toolkit';
import accountReducer from '../screens/account/redux';
import productReducer from '../screens/home/redux';


const appReducer = combineReducers({
  account: accountReducer,
  product: productReducer
});

export default appReducer;
