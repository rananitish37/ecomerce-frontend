import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
  // Add your reducers here later
  // products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
