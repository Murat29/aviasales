import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterTicketsSlice from './filterTicketsSlice';
import ticketsSlice from './ticketsSlice';

export const rootReducer = combineReducers({
  filterTickets: filterTicketsSlice,
  tickets: ticketsSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
