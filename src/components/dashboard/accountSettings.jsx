import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, ToggleButton } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { requestPayment } from '../../store/Document/invoiceSlice';
import { changePassword } from '../../store/Auth/authSlice';
import InputRadio  from "../../components/radio"



function AccountSettings(props) {
  const user = useSelector(state => state.auth.user);
  const [email, setEmail] = useState(user.email);
  const [newpassword, setNewPassword] = useState('');
  const [oldpassword, setOldPassword] = useState('');
  const [value, setValue] = useState('1');
  const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);

  const update = () => {
    alert("update user data");


  }
  const updatePassword = (e) => {
    e.preventDefault();

    dispatch(changePassword({ id: user._id, newPassword: newpassword, currentPassword: oldpassword, token: localStorage.getItem('token') }));

  }
  const handleChange =({currentTarget})=>{
    console.log(currentTarget.value);
    setValue(currentTarget.value)
    
    
  }

  return (
    <>
      <div className="col-md-8">
        <div style={{ background: 'white' }} className='border d-flex justify-content-center align-items-center p-3 flex-column mb-2'>
          <div style={{ width: '50%' }} className='image-profile position-relative  d-flex justify-content-center align-items-center p-3 flex-column mb-2'>
            <img className='rounded-circle p-3 border' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' width='100%' alt='user profile pic' />
            <IconButton onClick={() => alert("Edit Pic")} size='large' style={{ bottom: '-5px', left: '45%' }} className='position-absolute' color='primary'><CameraAltIcon fontSize='large' /></IconButton>
          </div>


          <p className='lead'>{user.first_name + " " + user.last_name} (Admin)</p>


        </div>
        <div className=" py-3 px-5 d-flex justify-content-start">

          <h1 className='lead  '>Your Account Settings</h1>

        </div>
        <div className="documents border p-2 d-flex justify-content-start mt-3">

          <div className='form_user_settings p-5'>
            <TextField variant='standard' value={user.email} />
            <Button onClick={update} variant='contained' className='mx-2'>Update</Button>

          </div>

        </div>
        <div className="documents border p-2 d-flex justify-content-start mt-3">

          <div className='form_user_settings p-5'>
            <p className='change-password'>
              <h1 className='fw-bold lead'>Sed ut perspiciatis </h1>
              <p className='lead'>Sed ut perspiciatis unde omnis iste natus error </p>
              <div className='form-password-change d-flex flex-column'>
                <div className='mb-2'>
                  <TextField fullWidth label='Current Password' onChange={(e) => setOldPassword(e.currentTarget.value)} />
                </div>
                <div className='mb-2'>
                  <TextField type='password' fullWidth label='New Password' onChange={(e) => setNewPassword(e.currentTarget.value)} />
                </div>
                <Button onClick={updatePassword} variant='contained' className=''>Change</Button>


              </div>


            </p>


          </div>

        </div>
      </div>

      {/*compayn details */}
      <div className='col-md-4'>
        <div style={{ background: "white" }} className='company-details border p-3 d-flex flex-column'>
          <img src='https://media.glassdoor.com/lst/4e/4b/5f/5a/cargas-building.jpg' width='100%' />
          <h1 className='display-5'>Cargas</h1>
          <p className='lead address'> 400 S Main St, <span>Lancaster, PA</span></p>
        </div>
        <div style={{ background: "white" }} className='company-details border mt-3 p-3 d-flex flex-column'>

          <h1 className='display-5'>Users</h1>

          <div className="list-group mx-0 w-auto">
           <InputRadio labelTitle='Jens Pierre' value='1' index='1'   />
          <InputRadio labelTitle='Jens greg' value='2'  index='2'     />
          
          </div>
        </div>

      </div>

    </>
  );
}

export default AccountSettings;
