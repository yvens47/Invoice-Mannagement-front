import React, { useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
// import { io } from "socket.io-client";
// const socket = io('https://Invoice-Mannagement.jeanpierre34.repl.co');

function Invoicing(props) {
	const [invoiceNumber, setInvoiceNumber] = useState('');
	const [amount, setAmount] = useState(0);
	const [file, setFile] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();
		

		if (!file || !amount || invoiceNumber === '') {
		
			alert(' Complete all field');
		}
		// process form -- send data to server.
		// formData
		var formData = new FormData();
		formData.append('invoice_number', invoiceNumber);
		formData.append('invoice_amount', amount);
		formData.append('file', file);
    formData.append('token', localStorage.getItem('token'))
	

		const endpoint =
			'https://Invoice-Mannagement.jeanpierre34.repl.co/invoices';
  

		axios({
      url:endpoint,
      method:'post',
      data:formData,
      headers:{
        'authorization':`Bearer ${localStorage.getItem('token')}`
      }
          
          
          })
			.then(response => {
        console.log(response)       
      })
      
			.catch(error => console.log(error));

		//
	};
	const handleChangeFile = e => {
		const curFiles = e.currentTarget.files;
		for (const file of curFiles) {
			// URL.createObjectURL(file)

			setFile(file);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<h1>Upload</h1>
					<p className="lead">
						is a blazing fast frontend build tool that 
					</p>

					<div className="d-flex flex-column">
						<form onSubmit={handleSubmit}>
							<div class="form-group">
								<div className="mb-2">
									<TextField
										variant="outlined"
										label="Invoice#"
										onChange={e => setInvoiceNumber(e.target.value)}
									/>
								</div>
								<div className="mb-2">
									<TextField
										variant="outlined"
										label="Amount"
										type="number"
										onChange={e => setAmount(e.target.value)}
									/>
								</div>
								<div className="invoice-file border p-3 bg-light">
									<label
										for="exampleFormControlFile1"
										className="upload-label d-flex flex-column"
									>
										<FileUploadIcon
											fontSize={'large'}
											style={{ fontSize: '2rem' }}
										/>
										<p className="fw-bold lead">Pick File</p>

										<input
											onChange={handleChangeFile}
											type="file"
											accept="application/pdf"
											class="form-control-file"
											id="exampleFormControlFile1"
										/>
									</label>
								</div>
								<div className="mt-2">
									<Button variant="outlined" type="submit">
										{' '}
										Upload Invoice
									</Button>
								</div>
							</div>
						</form>

						<div />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Invoicing;
