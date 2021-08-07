import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import testData from '../utils/testData.json';

import api from '../utils/mainApi';

interface IinitialState {
  tickets: any;
}

const initialState: IinitialState = {
  tickets: testData,
};

export const getTickets = createAsyncThunk('dsf', async () => {
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
  reducers: {
    // getFilteredTickets(state, action): any {
    //   const { radioValue, checkedСheckboxes } = action.payload;
    //   if (state.tickets.length === 0) {
    //     return state.tickets;
    //   } else {
    //     return state.tickets.filter(
    //       (ticket: any) =>
    //         checkedСheckboxes.includes(String(ticket.segments[0].stops.length)) &&
    //         checkedСheckboxes.includes(String(ticket.segments[1].stops.length))
    //     );
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.tickets = action.payload;
    });
  },
});

export default ticketsSlice.reducer;
// export const { getFilteredTickets } = ticketsSlice.actions;
