import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";
import apiSlice from "./apiSlice";

const rootReducer = combineReducers({
    general: generalSlice,
    api: apiSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;