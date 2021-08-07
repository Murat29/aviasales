import { createSlice } from '@reduxjs/toolkit';
import { typeCheckedСheckboxes, typeRadioValue } from '../types/types';

interface IinitialState {
  radio: typeRadioValue;
  checkboxes: typeCheckedСheckboxes;
}

const initialState: IinitialState = {
  radio: 'cheap',
  checkboxes: [],
};

const filterTicketsSlice = createSlice({
  name: 'filterTickets',
  initialState: initialState,
  reducers: {
    updataRadio(state, action) {
      state.radio = action.payload;
    },
    markСheckbox(state, action) {
      console.log(typeof action.payload);
      state.checkboxes.push(action.payload);
    },
    removeСheckbox(state, action) {
      const index = state.checkboxes.indexOf(action.payload);
      state.checkboxes.splice(index, 1);
    },
  },
});
export default filterTicketsSlice.reducer;
export const { updataRadio, markСheckbox, removeСheckbox } = filterTicketsSlice.actions;
