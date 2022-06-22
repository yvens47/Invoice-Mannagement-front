
import React from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux'
import { startTransition } from "react";
function DialogBox(props) {


  return (
    <div>

      <Dialog


        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogTitle id="alert-dialog-title" className='d-flex justify-content-end'>
          {props.title}
          <IconButton onClick={props.handleClose}><CloseIcon /></IconButton>

        </DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            {props.content}
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </div>

  )
}

export default DialogBox;