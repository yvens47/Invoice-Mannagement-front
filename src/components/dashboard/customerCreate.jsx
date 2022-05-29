
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import states from "../../utils/states_hash.json";



import MenuItem from '@mui/material/MenuItem';

function CustomerCreate (props){
  const [state, setState] = React.useState('EUR'); 

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleAdd = (e)=>{
    e.preventDefault();
    // add company details
    alert("alert company added ");
    
    
  }

  return(
    <div className='border p-3' style={{width:'500px'}}>

      <div className='d-flex flex-column '>
        <InfoIcon />
         <h1 className='display-5'>Enter Details</h1>
        <Box className='' component='form' style={{width:'100%'}}>
          <div className='mb-1'>
             <TextField  fullWidth variant='outlined' label='Business Name' placeHolder='name here' />
          </div>
          <div className='mb-1'>
             <TextField fullWidth type='email' variant='outlined' label='Email' placeHolder='email here' />
          </div>
          <div className='mb-1 d-flex-column'>
            <div className='mb-2 d-flex-column'>
              <TextField fullWidth variant='outlined' label='Street' placeHolder='name here' />
            </div>
            <div className='mb-1 d-flex'>
               <TextField className='me-1 flex-shrink-1'  variant='outlined' label='City' placeHolder='name here' />
     
               <TextField
          id="outlined-select-currency"
          select
              className='me-1 flex-grow-1'
          
                 
          label="State"
          value={state}
          onChange={handleChange}
         
        >
          {states && Object.keys(states).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
              <TextField style={{width:"120px"}}   className='me-1 flex-shrink-1 ' variant='outlined' label='Zip Code' placeHolder='name here' />
            </div>
            
          </div>
          <div><Button size='large' variant='outlined' type='submit' onClick ={handleAdd}>Add</Button></div>
         
        </Box>
      
      </div>
     

      
    
    
    </div>
  )
}
export default CustomerCreate