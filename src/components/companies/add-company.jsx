import React, { useState} from 'react'
import TextField from '@mui/material/TextField';
import { MenuItem, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Select from 'react-select'
const comp = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function AddCompany(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  
  const [companies, setCompanies]= useState(comp);

  const handleChange = ({currentTarget})=>{
    const {value} = {currentTarget};
    //get request to db;
    
  }
 
  return (
    <div className="wrapper login">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 p-3 " style={{ background: "white" }}>
            
            <div className='d-flex flex-row'>
             
              <Select style={{border:'none'}} className='form-control' options={companies} />
              <Button variant='contained'>Pick</Button>
            </div>
            <div className='search-company-result'>
              {/* display company list here */}
              
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
export default AddCompany;