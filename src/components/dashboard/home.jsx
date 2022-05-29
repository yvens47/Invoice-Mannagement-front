import React, { useState } from 'react';
// import {Outlet} from "react-router-dom"
import Button from '@mui/material/Button';
import DialogBox from './dialog';
import CustomerCreate from './customerCreate'


const company ={


  inovices:[],
  users:[],
  name:String,
  address:{},
  balance:String,
  email:String,
  about:String
  

  

}

function DashboardHome(props) {
 
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className="col-md-12 main-content">
			<h1 className="payment display-3">Set Up payments</h1>
			<p className="lead">
			
				Etiam varius maximus vulputate. In at arcu diam. Nulla id mauris et eros
				dictum convallis id eu urna. Praesent sed convallis libero
			</p>

			<hr />
			<div className=" card-wrapper d-flex flex-row">
				<div className="card me-3" style={{ width: '250px' }}>
					<div className="card-body">
						<h5 className="card-title">Set Your Company Details</h5>
						<p className="card-text">
							Some quick example text to build on the card title and m.
						</p>
            <Button variant="outlined" onClick={handleClickOpen}>
        Add Company Details
      </Button>
						
					</div>
				</div>

				<div className="card" style={{ width: '250px' }}>
          
					<div className="card-body">
						<h5 className="card-title">Connect Bank</h5>
						<p className="card-text">
							Please Connect your Bank to recieve payments
						</p>
						<Button className="mx-2" color="secondary" variant="outlined">
							Connect Bank
						</Button>
					</div>
				</div>
			</div>
			<DialogBox
        content={
        <CustomerCreate />
        
      }
				open={open}
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
			>
       
        </DialogBox>
		</div>
	);
}
export default DashboardHome;
