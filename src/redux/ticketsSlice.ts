import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Iticket } from '../types/types';
import { showPreloader, hidePreloader } from './preloaderSlice';

import api from '../utils/mainApi';

interface IinitialState {
  tickets: Iticket[];
}

const initialState: IinitialState = {
  tickets: [],
};

export const getTickets = createAsyncThunk('/tickets', async (arg, thunkAPI) => {
  thunkAPI.dispatch(showPreloader());

  let res: Iticket[] = [];
  let errorCount: number = 0;
  const { searchId } = await api.getSearchId().catch((err) => console.log(err));
  while (errorCount < 7) {
    try {
      const { tickets, stop } = await api.getPackTickets(searchId).catch((err) => console.log(err));
      res = res.concat(tickets);
      if (stop) {
        break;
      }
    } catch {
      errorCount++;
    }
  }
  thunkAPI.dispatch(hidePreloader());
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
