import { useCallback, useEffect, useState } from 'react';
import React from 'react';

export const Counter = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Alex');

	const updateCount = useCallback(() => {
		console.log('before : ', count);
		setCount((prevCount) => prevCount + 1);
	}, [count]);

	useEffect(() => {
		console.log('conter did mount');
	}, []);

	useEffect(() => {
		console.log('conter did mount + did update');
	});

	useEffect(() => {
		console.log('after: ', count);
	});

	useEffect(() => {
		console.log('conter did mount OR name changed');
	}, [name]);

	useEffect(() => {
		console.log('conter did mount OR name changed OR conter changed');
	}, [name, count]);

	useEffect(() => {
		return () => {
			console.log('conter will unmount');
		};
	}, []);

	return (
		<div>
			<h3>{count}</h3>
			<h3>{name}</h3>
			<button
				onClick={() => {
					console.log('before: ', count);
					setCount((prevCount) => prevCount + 1);
					console.log('after: ', count);
				}}
			>
				Click
			</button>
		</div>
	);
};
