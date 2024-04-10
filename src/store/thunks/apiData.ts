import api from "../../services/api";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

type APIENdPoint = {
  endpoint: string;
  params?: any;
  data?: any;
};
const apiGet = createAsyncThunk(
  "getData",
  async ({ endpoint, params }: APIENdPoint) => {
    try {
      const res = await api.get(endpoint, params);
      return res;
    } catch (error: any) {
      return isRejectedWithValue(error.response);
    }
  }
);
const apiCreate = createAsyncThunk(
  "createData",
  async ({ endpoint, data }: APIENdPoint) => {
    try {
      const res = await api.post(endpoint, data);
      return res;
    } catch (error: any) {
      return isRejectedWithValue(error.response);
    }
  }
);
const apiUpdate = createAsyncThunk(
  "updateData",
  async ({ endpoint, data }: APIENdPoint) => {
    try {
      const res = await api.update(endpoint, data);
      return res;
    } catch (error: any) {
      return isRejectedWithValue(error.response);
    }
  }
);
const apiDelete = createAsyncThunk(
  "deleteData",
  async ({ endpoint }: APIENdPoint) => {
    try {
      const res = await api.remove(endpoint);
      return res;
    } catch (error: any) {
      return isRejectedWithValue(error.response);
    }
  }
);

export { apiDelete, apiCreate, apiGet, apiUpdate };
