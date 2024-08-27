import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Contact {
	id: number;
	firstName: string;
	lastName: string;
	details: string;
	status: 'active' | 'inactive';
}

export interface ContactState {
	contacts: Contact[];
}

const initialState: ContactState = {
	contacts: [],
};

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		addContact: (state, action: PayloadAction<Contact>) => {
			state.contacts.push(action.payload);
		},
		removeContact: (state, action: PayloadAction<number>) => {
			state.contacts = state.contacts.filter(
				(contact) => contact.id !== action.payload
			);
		},
		updateContact: (state, action: PayloadAction<Contact>) => {
			const index = state.contacts.findIndex(
				(contact) => contact.id === action.payload.id
			);
			if (index !== -1) {
				state.contacts[index] = action.payload;
			}
		},
	},
});

export const { addContact, removeContact, updateContact } =
	contactSlice.actions;

export default contactSlice.reducer;
