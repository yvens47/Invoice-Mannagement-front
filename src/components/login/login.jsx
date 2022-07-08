import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, signOutUser } from '../../store/Auth/authSlice';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
// import { io } from "socket.io-client";
// const socket = io('https://Invoice-Mannagement.jeanpierre34.repl.co');

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const dispatch = useDispatch();
	const status = useSelector(state => state.auth.loading);

	useEffect(() => {
		document.title = 'Login'

	})

	const handleChange = ({ currentTarget }) => {
		const { name, value } = currentTarget;
	};

	const submit = async e => {
		e.preventDefault();




		// post request
		try {
			dispatch(fetchUser({ email, password }));
		} catch (error) {
			console.log(error);
			// toast.error(error.response.data.message)
		}
	};

	if (loggedIn) return <Navigate to="/dashboard" />;

	return (
		<div className="wrapper login">
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-4">
						{/*
						<div className="d-flex justify-content-center align-items-center">
							<PersonOutlineIcon style={{ fontSize: '10rem' }} />
						</div> */}
						<h1 className="display-5 text-center">Login</h1>
						<Box
							style={{ background: 'white' }}
							onSubmit={submit}
							component="form"
							className="border p-3 "
							c
						>
							<div className="mb-2">
								<TextField
									fullWidth
									onChange={e => setEmail(e.target.value)}
									id="outlined-basic"
									label="Email"
									variant="outlined"
								/>
							</div>

							<div className="mb-2">
								<TextField
									fullWidth
									onChange={e => setPassword(e.target.value)}
									id="outlined-basic"
									label="Password"
									variant="outlined"
									type="password"
								/>
							</div>
							<div className="mb-3 d-flex justify-content-between ">
								<div>
									<label>
										<input type='checkbox' checked name='remember' /> vendor
									</label>
								</div>
								<div>
									<Link
										className="btn btn-link p-0 text-decoration-none text-primary"
										to="/forgot-password"
									>
										Forgot password
									</Link>
								</div>

							</div>
							<div className='d-flex'>
								<Button
									size="large"
									type="submit"
									variant="contained"
									color="primary"
								>
									{status === 'pending' && (
										<Box sx={{ display: 'flex' }}>
											<CircularProgress />
										</Box>
									)}
									Login
								</Button>
							</div>
						</Box>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
