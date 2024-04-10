import { createSlice } from "@reduxjs/toolkit";
import { apiCreate, apiDelete, apiGet, apiUpdate } from "./thunks/apiData";

type apiState = {
  data: any[];
  loading: boolean;
  error: unknown;
  status: "idle" | "loading" | "succeeded" | "failed";
  openModal?: boolean;
};

const initialState: apiState = {
  data: [],
  loading: true,
  status: "idle",
  error: null,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setDataApi: (state, action) => {
      state.data = action.payload;
    },
    setStatusApi: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiGet.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(apiGet.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(apiGet.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error;
      });
    // CREATE
    builder
      .addCase(apiCreate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(apiCreate.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.status = "succeeded";
      })

      .addCase(apiCreate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
    // UPDATE
    builder
      .addCase(apiUpdate.fulfilled, (state, action) => {
        const cloneData: any[] = JSON.parse(JSON.stringify(state.data));
        const indexOf = cloneData.findIndex(
          (item) => item.id === action.payload.id
        );
        if (indexOf >= 0) {
          cloneData[indexOf] = {
            ...cloneData[indexOf],
            ...action.payload,
          };
          state.data = cloneData;
        }
        state.status = "succeeded";
      })
      .addCase(apiUpdate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(apiUpdate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
    // DELETE
    builder
      .addCase(apiDelete.pending, (state) => {
        state.status = "loading";
      })
      .addCase(apiDelete.fulfilled, (state, action) => {
        const indexOf = state.data.findIndex(
          (item) => item.id === action.payload
        );
        if (indexOf >= 0) {
          state.data.splice(indexOf, 1);
        }
        state.status = "succeeded";
      })
      .addCase(apiDelete.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export const { setDataApi, setStatusApi } = apiSlice.actions;

export default apiSlice.reducer;
