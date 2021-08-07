import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import testData from '../utils/testData.json';
import { Iticket } from '../types/types';

import api from '../utils/mainApi';

interface IinitialState {
  tickets: any;
  // tickets: Iticket;
}

const initialState: IinitialState = {
  tickets: testData,
};

export const getTickets = createAsyncThunk('/tickets', async () => {
  let res: Array<object> = [];
  let errorCount: number = 0;
  const { searchId } = await api.getSearchId();
  while (errorCount < 5) {
    try {
      const { tickets, stop } = await api.getPackTickets(searchId);
      res = res.concat(tickets);
      if (stop) {
        break;
      }
    } catch {
      errorCount++;
    }
  }
  return res;
});

const ticketsSlice = createSlice({
  name: 'filterTickets',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.tickets = action.payload;
    });
  },
});

export default ticketsSlice.reducer;
