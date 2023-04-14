import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
};

const handlePanding = state => {
    state.contacts.isLoading = true;
};

const handleRejected = (state, {payload}) => {
    state.contacts.isLoading = false;
    state.contacts.error = payload;
};

const phonebookSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        filterContact: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [addContact.pending]: handlePanding,
        [fetchContacts.pending]: handlePanding,
        [deleteContact.pending]: handlePanding,

        [addContact.fulfilled](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.items.push(payload);
            state.contacts.error = null;
        },
        [fetchContacts.fulfilled](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.items = payload;
            state.contacts.error = null;
        },
        [deleteContact.fulfilled](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            const index = state.contacts.items.findIndex(
            contactItem => contactItem.id === payload.id
            );
            state.contacts.items.splice(index, 1);
        },

        [addContact.rejected]: handleRejected,
        [fetchContacts.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
    }
});

export const { filterContact } = phonebookSlice.actions;

export const phoneBookReducer = phonebookSlice.reducer;
