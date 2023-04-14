import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phonebookSlice';

export const store = configureStore({
    reducer: {
        phonebook: phoneBookReducer,
    },
});