import { useState } from 'react';

export const Forma = ({ onSubmit }) => {
	const [value, setvalue] = useState('');

	const handleChange = (e) => {
		setvalue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input value={value} onChange={handleChange} type="text" />
			<input type="submit" />
		</form>
	);
};
