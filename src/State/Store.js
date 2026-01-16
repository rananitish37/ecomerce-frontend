import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  // Add your reducers here later
  // products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // RTK includes thunk by default, but explicit concat works too
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
