import React from 'react';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const transfers = [
	{
		_id: 12345,
		invoice: '12345',
		vendor: 'Zestel LLc',
		amount: '12.67',
		status: 'paid'
	},
	{
		_id: 1345,
		invoice: '1345',
		vendor: 'Zestel LLc',
		amount: '124.67',
		status: 'unpaid'
	}
];

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
	labels: ['Paid', 'Unpaid'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
};

function AccountBalance(props) {
	return (
		<>
			<div className="col-md-8">
				<div className="documents-pie border p-2 d-flex">
					<Pie

						data={data} />




				</div>
			</div>
			<div className="col-md-4">
				<div className="d-flex flex-column account-balance p-3">
					<p className='lead fw-bold text-success' style={{ fontSize: '2em' }}>$19</p>
					<h1 className="display-4">Account Balance</h1>
					<Button variant='contained'>Cash Out</Button>

				</div>
			</div>
		</>
	);
}

export default AccountBalance;
