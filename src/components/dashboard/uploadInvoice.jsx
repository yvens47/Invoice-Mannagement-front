import React, { useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
// import { io } from "socket.io-client";
// const socket = io('https://Invoice-Mannagement.jeanpierre34.repl.co');
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify'
import { uploadDocuments } from '../../store/Document/invoiceSlice';
import { useSelector, useDispatch } from 'react-redux'

import { toggle } from "../../store/ui/modalSlice"


function Invoicing(props) {
	const [invoiceNumber, setInvoiceNumber] = useState('');
	const [amount, setAmount] = useState(0);
	const [file, setFile] = useState(null);
	const [isuPloading, setIsUploading] = useState(false)
	const [uploadPercent, setUploaddingPercent] = useState(0);
	// const [open, setOpen] = React.useState(false);
	const dispatch = useDispatch();
	const modalState = useSelector((state) => state.showModal);
	console.log(modalState);
	const uploadPercentage = useSelector((state) => state.invoices.uploadPercent)

	// Create a new invoice

	const handleSubmit = e => {


		e.preventDefault();
		console.log(e)



		if (!file || !amount || invoiceNumber === '') {

			// toast
			toast.error("Please provide a valid invoices");


		}
		else {
			// process form -- send data to server.
			// formData
			var formData = new FormData();
			formData.append('invoice_number', invoiceNumber);
			formData.append('invoice_amount', amount);
			formData.append('file', file);
			formData.append('token', localStorage.getItem('token'))
			formData.append('userid', props.user._id);
			formData.append('companyId', props.companyId)
			// setOpen(!open)
			// dispatch(uploadDocuments(formData));


			const endpoint = 'https://Invoice-Mannagement.jeanpierre34.repl.co/invoices';
			const config = {

				onUploadProgress: function (progressEvent) {
					// Do whatever you want with the native progress event
					const percentComplete = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
					setUploaddingPercent(percentComplete);


				},
				headers: {
					'authorization': `Bearer ${localStorage.getItem('token')}`
				},
			}

			dispatch(uploadDocuments(formData));


		}
		// axios.post(endpoint, formData, config)
		// 	.then(response => {
		// 		console.log(response)
		// 		dispatch(toggle())
		// 	})

		// 	.catch(error => console.log(error));


	};

	// set file state on change
	const handleChangeFile = e => {
		const curFiles = e.currentTarget.files;
		for (const file of curFiles) {
			// URL.createObjectURL(file)
			setFile(file);
		}
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};


	return (
		<div className="container">
			{uploadPercentage > 0 && uploadPercentage < 100 && (
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={open}
					onClick={handleClose}
				>
					<CircularProgress color="inherit" variant="determinate" value={uploadPercentage} />
				</Backdrop>)}

			<div className="row">
				{/* {isuPloading &&
					<Box sx={{ width: '100%' }}>
						<LinearProgress value={uploadPercent} />
					</Box>
				} */}
				<div className="col-md-8">
					<h1>Upload</h1>
					<p className="lead">
						Enter your invoice number, amount, and upload a pdf version of your invoice.
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
