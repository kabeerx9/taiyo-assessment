import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
	addContact,
	ContactType,
	removeContact,
	updateContact,
} from '../store/slices/contact-slice';
import ContactCard from './contacts/contact-card';
import ContactForm from './contacts/contact-form';

const ContactPage = () => {
	const dispatch = useAppDispatch();
	const contacts = useAppSelector((state) => state.contact.contacts);

	const [showAddForm, setShowAddForm] = useState(false);
	const [editingContact, setEditingContact] = useState<ContactType | null>(
		null
	);

	const handleAddContact = (newContact: ContactType) => {
		dispatch(addContact({ ...newContact, id: contacts.length + 1 }));
		setShowAddForm(false);
	};

	const handleUpdateContact = (updatedContact: ContactType) => {
		dispatch(updateContact(updatedContact));
		setEditingContact(null);
	};

	const handleDeleteContact = (id: number) => {
		dispatch(removeContact(id));
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8 ">
				<button
					className="p-2 bg-black text-white text-2xl font-semibold rounded-lg"
					onClick={() => setShowAddForm(!showAddForm)}>
					{showAddForm ? 'Cancel' : 'Create Contact'}
				</button>
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
			{contacts.length === 0 && (
				<div className="flex gap-2 items-center border-2 border-black rounded-lg ">
					<div className="bg-black text-white p-4 rounded-full w-10 h-10 flex items-center justify-center">
						✕
					</div>
					<div className="flex-grow text-2xl p-4 lg:text-4xl ">
						No contacts found. Please add a contact.
					</div>
				</div>
			)}
		</div>
	);
};

export default ContactPage;
