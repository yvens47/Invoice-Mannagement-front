
import React, {useState } from "react";
import Button from "@mui/material/Button"

function InputRadio(props) {
  const[hideBtn,setHideBtn] = useState(false);
  const [value, setValue] = useState(0);
  const handleChangle = ({currentTarget})=>{
   
    console.log(currentTarget.value);
    if(currentTarget.checked){
      console.log("index,",props.index ," value", props.value)
      setHideBtn(true)
    }
   
    
  }
  
  
  return (
    <label className="list-group-item d-flex gap-2">
      <input
        value={''}
        data-id={props.id}
        onChange={handleChangle}
        className="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios1"  />
      <span>
        {props.labelTitle}
        <small className="d-block text-muted">Ttitle of the user of the company</small>
        { props.value === props.index  &&  <Button variant='outlined'>Make admin</Button> }
       
      </span>
    </label>
    
  )
}
export default InputRadio