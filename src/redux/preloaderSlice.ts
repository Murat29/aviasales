import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
  isShow: boolean;
}

const initialState: IinitialState = {
  isShow: true,
};

const preloaderSlice = createSlice({
  name: 'preloaderSlice',
  initialState: initialState,
  reducers: {
    showPreloader(state) {
      state.isShow = true;
    },
    hidePreloader(state) {
      state.isShow = false;
    },
  },
});
export default preloaderSlice.reducer;
export const { showPreloader, hidePreloader } = preloaderSlice.actions;
