export const selectContacts = state => state.phonebook.contacts.items;
export const selectFilteredContacts = state => state.phonebook.filter;
export const selectIsLoading = state => state.phonebook.contacts.isLoading;