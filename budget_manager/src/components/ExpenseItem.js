import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3'>₹ {props.cost}</span>
				<AiFillDelete size='1em' color='#E62E2D' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;