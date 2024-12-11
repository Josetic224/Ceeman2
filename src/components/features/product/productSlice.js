import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const viewProducts = createAsyncThunk(
  "products/viewProducts",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    if (!state.auth.user) {
      return rejectWithValue("You need to log in first.");
    }

    try {
      const response = await fetch(
        "https://ceeman-back.onrender.com/api/products/view",
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        // return rejectWithValue(data);
        return data;
      }
    } catch (error) {
      return rejectWithValue("An error occurred");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewProducts.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      .addCase(viewProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        // state.error = null;
      })
      .addCase(viewProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
