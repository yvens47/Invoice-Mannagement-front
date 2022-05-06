
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function CustomerCreate (props){

  return(
    <div className='border p-3' style={{width:'450px'}}>

      <div className='d-flex flex-column '>
        <InfoIcon />
         <h1 className='display-5'>Enter Details</h1>
        <Box className='' component='form' style={{width:'100%'}}>
          <div className='mb-1'>
             <TextField  fullWidth variant='outlined' label='Full Name' placeHolder='name here' />
          </div>
          <div className='mb-1'>
             <TextField fullWidth type='email' variant='outlined' label='Email' placeHolder='name here' />
          </div>
          <div className='mb-1'>
             <TextField fullWidth variant='outlined' label='Business' placeHolder='name here' />
          </div>
         
        </Box>
      
      </div>
     

      
    
    
    </div>
  )
}
export default CustomerCreate