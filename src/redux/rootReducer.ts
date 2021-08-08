import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterTicketsSlice from './filterTicketsSlice';
import preloaderSlice from './preloaderSlice';
import ticketsSlice from './ticketsSlice';

export const rootReducer = combineReducers({
  filterTickets: filterTicketsSlice,
  tickets: ticketsSlice,
  preloader: preloaderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof rootReducer>;
