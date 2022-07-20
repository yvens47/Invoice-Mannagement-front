import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import DialogBox from './dialog';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Invoicing from './uploadInvoice';

import DocumentPreview from './documentPreview';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

//import { io } from 'socket.io-client';
// const socket = io('https://Invoice-Mannagement.jeanpierre34.repl.co');
import { useSelector, useDispatch } from 'react-redux';
import { requestPayment, deleteDocument, getDocuments } from '../../store/Document/invoiceSlice';
import Documents from './documents';
import { toggle } from "../../store/ui/modalSlice"



function DocumentHome(props) {
	const [view, setView] = useState('Add');
	const [open, setOpen] = useState(false);
	// const [documents, setDocuments] = useState([]);
	const [src, setSrc] = useState('');
	const user = useSelector(state => state.auth.user);
	const documents = useSelector(state => state.invoices.invoices);
	const dispatch = useDispatch();
	const modalState = useSelector((state) => state.modal.showModal);
	const companyId = useSelector((state) => state.company.detail._id);


	useEffect(() => {

		dispatch(getDocuments(companyId));
		console.log(documents)
		// socket.on('uploaded', data => {
		// 	console.log(data);
		// });
	}, []);

	const handleClickOpen = () => {
		dispatch(toggle())
	};

	const handleClose = () => {
		// setOpen(false);
		dispatch(toggle())
	};


	const preview = (d) => {
		//https://invoice-mannagement.jeanpierre34.repl.co/uploads/file-1652023487912-30013395.pdf
		const location = d.invoice_image;



		setView('View');
		dispatch(toggle())
		//setOpen(true);
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



				{documents.length == 0 ? (
					<div
						style={{ height: "70vh", }}
						className='d-flex justify-content-center align-items-center flex-column'>
						<h1>Upload</h1>

						<p className='lead text-center'>CLick the Upload your invoice Button below to start upload invoice to our portal </p>

						<Button size='large' variant='outlined' onClick={() => {
							setView('Add');

							dispatch(toggle())
						}}>
							Upload your invoice

						</Button>
					</div>
				) : (
					<>
						<div className="lead d-flex justify-content-between mb-2">
							Dcouments({documents.length})
							<span className="d-flex ">
								<p className="me-3"> </p>
								<Button

									variant="outlined"
									onClick={() => {
										setView('Add');
										//setOpen(true);
										dispatch(toggle())
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


							<Documents handleRequestPayment={handleRequestPayment} preview={preview} deleteDoc={deleteDoc} documents={documents} />
						</div>
						{/*  pagination*/}
					</>
				)}





			</div>

			<DialogBox
				content={view === 'Add' ? <Invoicing
					companyId={companyId}
					user={user} /> : <DocumentPreview src={src} />}
				open={modalState}
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}

			/>
		</>
	);
}

export default DocumentHome;
