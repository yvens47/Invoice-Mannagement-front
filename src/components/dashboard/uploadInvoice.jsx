import React, { useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

function Invoicing(props) {
	const [invoiceNumber, setInvoiceNumber] = useState('');
	const [amount, setAmount] = useState(0);
	const [file, setFile] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();
		console.log(file);

		if (!file || !amount || invoiceNumber === '') {
			console.log('');
			alert(' Complete all field');
		}
		// process form -- send data to server.
		// formData
		var formData = new FormData();
		formData.append('invoice', invoiceNumber);
		formData.append('amount', amount);
		formData.append('file', file);
		//     {
		//     "user": "6273eb8d30519715d71561a1",
		//     "invoice_number": "1",
		//     "invoice_amount": 345.89,
		//     "upload_date": "05/03/2022",
		//     "invoice_image": "fakepath",
		//     "paid": false

		// }

		const endpoint =
			'https://Invoice-Mannagement.jeanpierre34.repl.co/invoices';
    console.log(formData)

		axios
			.post(endpoint, formData, {
    //AxiosRequestConfig parameter
    withCredentials: true //correct
  })
			.then(response => console.log(response))
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
						is a blazing fast frontend build tool that includes features like
						Hot Module Reloading (HMR), optimized builds,{' '}
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
