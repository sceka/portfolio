import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageSlice";

export const store = configureStore({
	reducer: languageReducer
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
