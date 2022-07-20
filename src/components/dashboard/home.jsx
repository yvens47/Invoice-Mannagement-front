import React, { useEffect, useState } from 'react';
// import {Outlet} from "react-router-dom"
import Button from '@mui/material/Button';
import DialogBox from './dialog';
import CustomerCreate from './customerCreate'
import { companyDetail, addCompany } from '../../store/company/companySlice';
import { useDispatch, useSelector } from 'react-redux';


function DashboardHome(props) {
	const dispatch = useDispatch();
	const detail = useSelector((state) => state.company.detail)
	const [company, setCompany] = useState({})
	const [open, setOpen] = useState(false);
	useEffect(() => {
		console.log("get my company details")
		dispatch(companyDetail("628145bb5c2389162006ad8c"))

	}, {})


	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const add = e => {

		e.preventDefault();
		dispatch(addCompany(company))


		console.log(company);

	}
	const handleChange = (e) => {
		var state = '';
		const companyDetailCopy = { ...company }
		if (e.currentTarget === null) {
			state = e.target.value;
			companyDetailCopy.address.state = state
			console.log(companyDetailCopy)

		} else {
			const { value, name } = e.target;
			console.log(e.currentTarget)
			// make copy of company details object

			companyDetailCopy[name] = value;

		}
		setCompany(companyDetailCopy);



	}
	return (
		<div className="col-md-10 main-content">
			<h1 className="payment display-3">Set Up payments</h1>
			<p className="lead">

				Etiam varius maximus vulputate. In at arcu diam. Nulla id mauris et eros
				dictum convallis id eu urna. Praesent sed convallis libero
			</p>

			<hr />
			<div className=" card-wrapper d-flex flex-row">
				{
					detail && detail.registered ? <div>

					</div> :
						<div className="card me-3" style={{ width: '250px' }}>
							<div className="card-body">
								<h5 className="card-title">Register you company</h5>
								<p className="card-text">
									Some quick example text to build on the card title and m.
								</p>
								<Button variant="outlined" onClick={handleClickOpen}>
									Add Company Details
								</Button>

							</div>
						</div>
				}


				{
					detail && detail.account === null ? (
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
						</div>) : (
						<div className='card p-2' style={{ width: '250px' }}>
							<h1 className='display-5'>Account Info</h1>


						</div>
					)
				}
			</div>
			<DialogBox
				content={
					<CustomerCreate addCompany={add} change={handleChange} />

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
