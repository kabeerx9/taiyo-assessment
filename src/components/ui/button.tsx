import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	children,
	className = '',
	...props
}) => {
	const baseClasses =
		'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

	const variantClasses: Record<ButtonVariant, string> = {
		primary:
			'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
		secondary:
			'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 focus:ring-indigo-400',
		outline:
			'bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
		danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
	};

	const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	);
};

export default Button;
