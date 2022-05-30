
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import states from "../../utils/states_hash.json";
import Select from '@mui/material/Select';



import MenuItem from '@mui/material/MenuItem';

function CustomerCreate(props) {
  const [state, setState] = React.useState('EUR');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // add company details
    alert("alert company added ");


  }

  return (
    <div className='border p-3' style={{ width: '500px' }}>

      <div className='d-flex flex-column '>
        <InfoIcon />
        <h1 className='display-5'>EMy Company Details</h1>
        <Box className='' component='form' style={{ width: '100%' }}>
          <div className='mb-1'>
            <TextField  name='name'onChange={props.change} fullWidth variant='outlined' label='Business Name' placeHolder='name here' />
          </div>
          <div className='mb-1'>
            <TextField name='email' onChange={props.change} fullWidth type='email' variant='outlined' label='Email' placeHolder='email here' />
          </div>
          <div className='mb-1 d-flex-column'>
            <div className='mb-2 d-flex-column'>
              <TextField name='' onChange={props.change} fullWidth variant='outlined' label='Street' placeHolder='name here' />
            </div>
            <div className='mb-1 d-flex'>
              <TextField  name='city'onChange={props.change} className='me-1 flex-shrink-1' variant='outlined' label='City' placeHolder='name here' />

             
                <Select name='state' label="State" onChange={props.change} className='me-1 flex-grow-1'>
                {states && Object.keys(states).map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}

                </Select>
               
             
              <TextField name='zip' onChange={props.change} style={{ width: "120px" }} className='me-1 flex-shrink-1 ' variant='outlined' label='Zip Code' placeHolder='name here' />
            </div>

          </div>
          <div><Button size='large' variant='outlined' type='submit' onClick={props.addCompany}>Add</Button></div>

        </Box>

      </div>





    </div>
  )
}
export default CustomerCreate