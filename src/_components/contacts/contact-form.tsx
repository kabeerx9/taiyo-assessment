import React, { useState } from 'react';
import Button from '../../components/ui/button';
import { ContactType } from '../../store/slices/contact-slice';

interface ContactFormProps {
	onSubmit: (contact: ContactType) => void;
	onCancel: () => void;
	initialValues?: ContactType;
}

const ContactForm: React.FC<ContactFormProps> = ({
	onSubmit,
	onCancel,
	initialValues,
}) => {
	const [formData, setFormData] = useState(
		initialValues || {
			firstName: '',
			lastName: '',
			details: '',
			status: 'active' as 'active' | 'inactive',
		}
	);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (initialValues) {
			const updatedContact = {
				...initialValues,
				...formData,
			};

			onSubmit(updatedContact);
		} else {
			onSubmit({
				...formData,
				id: Math.floor(Math.random() * 1000),
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label
					htmlFor="firstName"
					className="block text-sm font-medium text-gray-700">
					First Name
				</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					required
					className="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</div>
			<div>
				<label
					htmlFor="lastName"
					className="block text-sm font-medium text-gray-700">
					Last Name
				</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					required
					className="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</div>
			<div>
				<label
					htmlFor="details"
					className="block text-sm font-medium text-gray-700">
					Details
				</label>
				<textarea
					id="details"
					name="details"
					value={formData.details}
					onChange={handleChange}
					rows={3}
					className="mt-1 block w-full outline-double rounded-md border-gray-300 shadow-sm focus:border-indigo-800 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</div>
			<div>
				<label
					htmlFor="status"
					className="block text-sm font-medium text-gray-700">
					Status
				</label>
				<select
					id="status"
					name="status"
					value={formData.status}
					onChange={handleChange}
					className="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
					<option value="active">Active</option>
					<option value="inactive">Inactive</option>
				</select>
			</div>
			<div className="flex justify-end space-x-2">
				<Button type="button" onClick={onCancel} variant="secondary">
					Cancel
				</Button>
				<Button type="submit">Submit</Button>
			</div>
		</form>
	);
};

export default ContactForm;
