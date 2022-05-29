import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Creatable, { useCreatable } from 'react-select/creatable';

import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  registerUser } from '../../store/Auth/authSlice';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Select from 'react-select'
// import { io } from "socket.io-client";
// const socket = io('https://Invoice-Mannagement.jeanpierre34.repl.co');

const companies = [
 
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstname, setFirstName] = useState(false);
  const [lastname, setLastName] = useState(false);
  const [company, setCompany] =useState('')

  const dispatch = useDispatch();
  const status = useSelector(state => state.auth.loading);

  useEffect(() => {
    document.title = 'Become a member'

  })

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
  };
  const handleOnCreateOption = (e)=>{
    setCompany(e)
    companies.push(e);
    
  }

  const submit = async e => {
    e.preventDefault();




    // post request
    try {
      dispatch(registerUser({ email, password,first_name: firstname, last_name:lastname }));
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

            <h1 className="display-5 text-center">Sign up </h1>
            <Box
              style={{ background: 'white' }}
              onSubmit={submit}
              component="form"
              className="border p-3 "
              c
            >
              <div className="mb-2 d-flex ">
                <TextField
                  className='me-2'
                  fullWidth
                  onChange={e => setFirstName(e.target.value)}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  onChange={e => setLastName(e.target.value)}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </div>
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
                  onChange={e =>console.log(e)}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </div>
              <div className="mb-3 d-flex justify-content-between ">


              </div>
              <div className='mb-3 d-flex'>
                  <Creatable 
                    onChange={(e)=>setCompany(e.value)}
                    placeholder='Pick or enter company'
                    
                   
                    label="Pick a company"
                    onCreateOption={handleOnCreateOption} style={{border:'none'}}  options={companies} />
              
              </div>
              <div className='d-flex'>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >

                  Register
									</Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
