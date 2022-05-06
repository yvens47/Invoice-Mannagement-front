import React from 'react';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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

function AccountBalance(props) {
	return (
		<>
			<div className="col-md-8">
				<div className="documents border p-2">
          <img src='https://images.squarespace-cdn.com/content/v1/55b6a6dce4b089e11621d3ed/1585087896250-R3GZ6OFWYQRZUJRCJU3D/produce_monthly.png' width='100%'/>
        </div>
			</div>
			<div className="col-md-4">
				<div className="d-flex flex-column account-balance p-3">
          <p className='lead fw-bold text-success' style={{fontSize:'2em'}}>$567.98</p>
					<h1 className="display-4">Account Balance</h1>
          <Button variant='contained'>Cash Out</Button>
          
				</div>
			</div>
		</>
	);
}

export default AccountBalance;
