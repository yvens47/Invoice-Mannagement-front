import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { forgotPassword } from '../../store/Auth/authSlice';

function ForgotPassword(props) {
  const[email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("send")

   
    // make get requiest to server here
    dispatch(forgotPassword(email));
    
  }
  const handleChange =({currentTarget})=>{
    const {value} = currentTarget;
    setEmail(value)
    
    
  }
  return (
    <div className="wrapper login">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 p-3 " style={{background:"white"}}>

            <h1 className='display-5 '>Forgot Password</h1>
            <Box component='form' className='d-flex' onSubmit={handleSubmit}>
              <div> <input  
                      onChange={handleChange}
                      className='form-control-lg rounded-0' placeholder='email' /></div>
              <div> <button style={{ borderRadius:"0"}}  className='btn btn-lg btn-primary'>Go</button></div>
              
             
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ForgotPassword;