import React,{useState} from 'react';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import DialogBox from './dialog';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Invoicing from './uploadInvoice'
const documents = [
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

function DocumentHome(props) {
  const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

  const submitInvoice = (e) =>{
    e.preventDefault();
    alert("hello send");
    
  }
  
	return (
    <>
		<div className="col-md-10">
			<p className="lead d-flex justify-content-between">
				Dcouments
				<span className="d-flex ">
					<p className='me-3'> 2 Unpaid</p>
           <Button variant="outlined" onClick={handleClickOpen}>
						<UploadFileIcon  />
					</Button>
          
					<Button>
						<DownloadIcon />
					</Button>
					<Button>
						<MenuIcon />
					</Button>
				</span>
			</p>
			<div className="documents border p-2">
				{documents &&
					documents.map(document => (
						<div
							key={document._id}
							className="document border-bottom p-2  d-flex justify-content-between"
						>
							<div>{document.invoice}</div>
							<div>{document.amount}</div>
							<div>
								{' '}
								{document.status === 'unpaid' ? (
									<Button
										onClick={() => alert('request sent')}
										startIcon={<AttachMoneyIcon />}
										variant="contained"
										color="info"
									>
										{' '}
										Request Payment
									</Button>
								) : (
									<Button
										startIcon={<AttachMoneyIcon />}
										variant="outlined"
										color="info"
									>
										{' '}
										Paid{' '}
									</Button>
								)}
							</div>
						</div>
					))}
			</div>
      
		</div>
      <DialogBox
        content={
       <Invoicing/>
        
      }
        
				open={open}
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
        submit ={submitInvoice}
			/>
       
       
      </>
	);
}

export default DocumentHome;
