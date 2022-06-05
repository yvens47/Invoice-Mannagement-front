import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import DialogBox from './dialog';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Invoicing from './uploadInvoice';
import PreviewIcon from '@mui/icons-material/Preview';
import IconButton from '@mui/material/IconButton';
import DocumentPreview from './documentPreview';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

//import { io } from 'socket.io-client';
// const socket = io('https://Invoice-Mannagement.jeanpierre34.repl.co');
import { useSelector, useDispatch } from 'react-redux';
import { requestPayment, deleteDocument, getDocuments } from '../../store/Document/invoiceSlice';




function DocumentHome(props) {
	const [view, setView] = useState('Add');
	const [open, setOpen] = useState(false);
	// const [documents, setDocuments] = useState([]);
	const [src, setSrc] = useState('');
	const user = useSelector(state => state.auth.user);
	const documents = useSelector(state => state.invoices.invoices);
	const dispatch = useDispatch();

	useEffect(() => {
		const endpoint =
			`https://Invoice-Mannagement.jeanpierre34.repl.co/invoices/${user._id}`;

		dispatch(getDocuments(user._id));

		// socket.on('uploaded', data => {
		// 	console.log(data);
		// });
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const submitInvoice = e => {
		e.preventDefault();
		alert('hello send');
	};
	const preview = (d) => {
		//https://invoice-mannagement.jeanpierre34.repl.co/uploads/file-1652023487912-30013395.pdf
		const location = d.invoice_image;



		setView('View');
		setOpen(true);
		setSrc(`https://invoice-mannagement.jeanpierre34.repl.co/${location}`);
	};
	const handleRequestPayment = (data) => {

		dispatch(requestPayment(data));
	}
	const deleteDoc = (document) => {
		dispatch(deleteDocument(document));
		dispatch(getDocuments(user._id));


	}

	return (
		<>
			<div className="col-md-10">


				<div className="lead d-flex justify-content-between mb-2">
					Dcouments({documents.length})
					<span className="d-flex ">
						<p className="me-3"> </p>
						<Button

							variant="outlined"
							onClick={() => {
								setView('Add');
								setOpen(true);
							}}
						>
							<UploadFileIcon />
						</Button>

						<Button>
							<DownloadIcon />
						</Button>
						<Button>
							<MenuIcon />
						</Button>
					</span>
				</div>
				<div className="documents border p-4 d-flex flex-column">
					<div className="document border-bottom p-2  d-flex justify-content-between">
						<div>Invoice #</div>
						<div>Amount</div>
						<div>Status</div>
						<div>Actions</div>
					</div>


					{documents &&
						documents.map(document => (
							<div
								key={document._id}
								className="document border-bottom p-2  d-flex justify-content-between"
							>
								<div>{document.invoice_number}</div>
								<div>{document.invoice_amount}</div>
								<div>
									{document.paid}
									{!document.paid ? (
										<Button
											disabled={document.payment_request}
											onClick={() => handleRequestPayment(document)}
											startIcon={<AttachMoneyIcon />}
											variant="contained"
											color="info"
										>
											{' '}
											Request Payment
										</Button>
									) : (
										<Button
											disabled={true}
											startIcon={<AttachMoneyIcon />}
											variant="outlined"
											color="info"
										>
											Paid{' '}
										</Button>
									)}
								</div>
								<div className='d-flex'>
									<IconButton onClick={() => preview(document)}>
										<PreviewIcon />
									</IconButton>
									<IconButton onClick={() => deleteDoc(document)}>
										<DeleteIcon />
									</IconButton>

								</div>
							</div>
						))}
				</div>
				{/*  pagination*/}


			</div>

			<DialogBox
				content={view === 'Add' ? <Invoicing user={user} /> : <DocumentPreview src={src} />}
				open={open}
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
				submit={submitInvoice}
			/>
		</>
	);
}

export default DocumentHome;
