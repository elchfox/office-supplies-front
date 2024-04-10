import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../../services/api";
import { TCategory, TCompany } from "../../types/typeModules";
import { TResponse } from "../generalSlice";
import { IOption } from "../../utils/layoutTable";

const generalData = createAsyncThunk("general", async () => {
  try {
    const categories: TCategory[] = await api.get("category");
    const companies: TCompany[] = await api.get("company");
    const category = categories.map((item) => ({
      text: item.name,
      value: item.id || 0,
    }));
    const company = companies.map((item) => ({
      text: item.name,
      value: item.id || 0,
    }));

    return {
      data: {
        categories,
      },
      selectList: {
        category,
        company,
      },
    };
  } catch (error: any) {
    return isRejectedWithValue(error.response);
  }
});

export { generalData };
