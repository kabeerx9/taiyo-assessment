import React, { useState } from 'react';
import Button from '../../components/ui/button';
import { ContactType } from '../../store/slices/contact-slice';

interface ContactCardProps {
	contact: ContactType;
	onDelete: (id: string) => void;
	onEdit: (contact: ContactType) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
	contact,
	onDelete,
	onEdit,
}) => {
	const [showDetails, setShowDetails] = useState(false);

	console.log('Show details with conact id ', contact.id, 'is', showDetails);

	return (
		<div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-xl font-semibold">
					{contact.firstName} {contact.lastName}
				</h3>
				<span
					className={`px-2 py-1 text-sm rounded-full ${
						contact.status === 'active'
							? 'bg-green-200 text-green-800'
							: 'bg-red-200 text-red-800'
					}`}>
					{contact.status}
				</span>
			</div>
			<div
				className={`overflow-hidden transition-all overflow-y-auto duration-300 mb-5 ease-in-out ${
					showDetails ? 'max-h-40' : 'max-h-0'
				}`}>
				<p className="text-gray-600 mb-4">{contact.details}</p>
			</div>
			<div className="flex justify-between items-center">
				<Button
					onClick={() => setShowDetails(!showDetails)}
					variant="secondary">
					{showDetails ? 'Hide Details' : 'Show Details'}
				</Button>
				<div className="space-x-2">
					<Button onClick={() => onEdit(contact)} variant="secondary">
						Edit
					</Button>
					<Button onClick={() => onDelete(contact.id)} variant="danger">
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
