import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { generalData } from "./thunks/generalData";
 export type TResponse = {
  data: Record<string, any>;
  selectList: Record<string, IOptions[]>;
};
type IOptions = {
  text: string;
  value: string | number;
};
type generalState = {
  data: Record<string, any>;
  selectList: Record<string, IOptions[]>;
  loading: boolean;
  error: unknown;
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: generalState = {
  data: {},
  selectList: {},
  error: null,
  status: "idle",
  loading: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setGlobalData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generalData.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(generalData.fulfilled, (state, action:PayloadAction<any>) => {
        state.data = action.payload.data;
        state.selectList = action.payload.selectList;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(generalData.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { setGlobalData } = generalSlice.actions;

export default generalSlice.reducer;
