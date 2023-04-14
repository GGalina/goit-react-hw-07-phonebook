import { createAsyncThunk } from '@reduxjs/toolkit';
import {addContactApi, getContactApi, removeContactApi } from 'Services/mockApi';

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const contact = await addContactApi(newContact);
            return contact.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const contact = await getContactApi();
            return contact.data;
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const contact = await removeContactApi(contactId);
            return contact.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);