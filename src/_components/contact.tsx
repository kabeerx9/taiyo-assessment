import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
	addContact,
	ContactType,
	removeContact,
	updateContact,
} from '../store/slices/contact-slice';
import ContactCard from './contacts/contact-card';
import ContactForm from './contacts/contact-form';
import Button from '../components/ui/button';
import { UserPlus, X } from 'lucide-react';

const ContactPage = () => {
	const dispatch = useAppDispatch();
	const contacts = useAppSelector((state) => state.contact.contacts);
	const [showAddForm, setShowAddForm] = useState(false);
	const [editingContact, setEditingContact] = useState<ContactType | null>(
		null
	);

	const handleAddContact = (newContact: ContactType) => {
		dispatch(addContact({ ...newContact }));
		setShowAddForm(false);
	};

	const handleUpdateContact = (updatedContact: ContactType) => {
		dispatch(updateContact(updatedContact));
		setEditingContact(null);
	};

	const handleDeleteContact = (id: string) => {
		dispatch(removeContact(id));
	};

	return (
		<div className="container px-4 py-8 bg-indigo-50 h-full">
			<div className="mb-8 flex justify-between items-center">
				<h1 className="text-3xl font-bold text-indigo-900">
					Contact Management
				</h1>
				<Button variant="primary" onClick={() => setShowAddForm(!showAddForm)}>
					{showAddForm ? (
						<div className="flex justify-center items-center">
							<X className="mr-2 h-4 w-4" /> Cancel
						</div>
					) : (
						<div className="flex justify-center items-center">
							<UserPlus className="mr-2 h-4 w-4" /> Add Contact
						</div>
					)}
				</Button>
			</div>

			{showAddForm && (
				<div className="mb-8 bg-white p-6 rounded-lg shadow-lg border border-indigo-200">
					<h2 className="text-2xl font-semibold mb-4 text-indigo-800">
						Add New Contact
					</h2>
					<ContactForm
						onSubmit={handleAddContact}
						onCancel={() => setShowAddForm(false)}
					/>
				</div>
			)}

			{editingContact && (
				<div className="mb-8 bg-white p-6 rounded-lg shadow-lg border border-indigo-200">
					<h2 className="text-2xl font-semibold mb-4 text-indigo-800">
						Edit Contact
					</h2>
					<ContactForm
						initialValues={editingContact}
						onSubmit={handleUpdateContact}
						onCancel={() => setEditingContact(null)}
					/>
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{contacts.map((contact) => (
					<ContactCard
						key={contact.id}
						contact={contact}
						onDelete={handleDeleteContact}
						onEdit={setEditingContact}
					/>
				))}
			</div>

			{contacts.length === 0 && (
				<div className="flex gap-4 items-center bg-white border-2 border-indigo-200 rounded-lg p-6 shadow-md">
					<div className="bg-indigo-600 text-white p-4 rounded-full w-12 h-12 flex items-center justify-center">
						<X className="h-6 w-6" />
					</div>
					<div className="flex-grow text-2xl lg:text-3xl text-indigo-900 font-semibold">
						No contacts found. Please add a contact.
					</div>
				</div>
			)}
		</div>
	);
};

export default ContactPage;
