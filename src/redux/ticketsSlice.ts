import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Iticket } from '../types/types';
import api from '../utils/mainApi';

interface IinitialState {
  tickets: Iticket[];
  isShowPreloader: boolean;
}

const initialState: IinitialState = {
  tickets: [],
  isShowPreloader: true,
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
  return res;
});

const ticketsSlice = createSlice({
  name: 'filterTickets',
  initialState: initialState,
  reducers: {
    showPreloader(state) {
      state.isShowPreloader = true;
    },
    hidePreloader(state) {
      state.isShowPreloader = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.tickets = action.payload;
      state.isShowPreloader = false;
    });
  },
});

export default ticketsSlice.reducer;
export const { showPreloader, hidePreloader } = ticketsSlice.actions;
