import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
	addContact,
	Contact,
	removeContact,
	updateContact,
} from '../store/slices/contact-slice';
import Button from '../components/ui/button';
import ContactCard from './contacts/contact-card';
import ContactForm from './contacts/contact-form';

const ContactPage = () => {
	const dispatch = useAppDispatch();
	const contacts = useAppSelector((state) => state.contact.contacts);
	const [showAddForm, setShowAddForm] = useState(false);
	const [editingContact, setEditingContact] = useState<Contact | null>(null);

	const handleAddContact = (newContact: Contact) => {
		dispatch(addContact({ ...newContact, id: contacts.length + 1 }));
		setShowAddForm(false);
	};

	const handleUpdateContact = (updatedContact: Contact) => {
		dispatch(updateContact(updatedContact));
		setEditingContact(null);
	};

	const handleDeleteContact = (id: number) => {
		dispatch(removeContact(id));
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Contact Management</h1>
			<div className="mb-8">
				<Button onClick={() => setShowAddForm(!showAddForm)}>
					{showAddForm ? 'Cancel' : 'Add New Contact'}
				</Button>
			</div>
			{showAddForm && (
				<div className="mb-8 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold mb-4">Add New Contact</h2>
					<ContactForm
						onSubmit={handleAddContact}
						onCancel={() => setShowAddForm(false)}
					/>
				</div>
			)}
			{editingContact && (
				<div className="mb-8 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold mb-4">Edit Contact</h2>
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
		</div>
	);
};

export default ContactPage;
