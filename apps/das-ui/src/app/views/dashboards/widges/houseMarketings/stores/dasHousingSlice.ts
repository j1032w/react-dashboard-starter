import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  data: [],
  loading: false,
  error: null,
}

const name = 'dasHosing';


export const dasHosingSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchDasHousingData(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDasHousingDataSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDasHousingDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const selectDasHousingMarket = (state: any) => state.name;

export const {fetchDasHousingData, fetchDasHousingDataSuccess, fetchDasHousingDataFailure} =
  dasHosingSlice.actions;

export const dasHosingReducer = dasHosingSlice.reducer;
