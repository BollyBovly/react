import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
import { useEffect, useRef, useState } from 'react';

export const FormMui = ({ onSubmit }) => {
	const [value, setvalue] = useState('');
	const focusRef = useRef();
	const handleChange = (e) => {
		setvalue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
		setvalue('');
	};

	useEffect(() => {
		focusRef.current?.focus();
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				inputRef={focusRef}
				value={value}
				onChange={handleChange}
			></TextField>
			<Button>Send</Button>
		</form>
	);
};
