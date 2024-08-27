import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import Button from '../components/ui/button';
import {
	addContact,
	removeContact,
	updateContact,
} from '../store/slices/contact-slice';

type Props = {};

const Contact = (props: Props) => {
	const dispatch = useAppDispatch();
	const contacts = useAppSelector((state) => state.contact.contacts);

	return (
		<div className="w-full h-full flex flex-col">
			<p className="text-2xl">Contacts are : {contacts.length}</p>
			<Button
				onClick={() => {
					dispatch(
						addContact({
							id: contacts.length + 1,
							firstName: 'Kabeer' + Math.random(),
							lastName: 'Khan' + Math.random(),
							status: Math.random() > 0.5 ? 'active' : 'inactive',
						})
					);
				}}>
				Add contact
			</Button>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{contacts.map((contact) => (
					<div
						key={contact.id}
						className="flex text-xl p-5 font-semibold flex-col gap-5 border-2 border-black items-center justify-between">
						<div>
							{contact.firstName} {contact.lastName}
						</div>
						<div>{contact.status}</div>
						<Button
							onClick={() => {
								dispatch(removeContact(contact.id));
							}}
							variant="danger">
							Delete
						</Button>
						<Button
							variant="secondary"
							onClick={() => {
								dispatch(
									updateContact({
										id: contact.id,
										firstName: 'Killi' + Math.random(),
										lastName: 'Suri' + Math.random(),
										status: Math.random() > 0.5 ? 'active' : 'inactive',
									})
								);
							}}>
							Edit
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Contact;
