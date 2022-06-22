import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';

function Documents({ documents, deleteDoc, preview, handleRequestPayment }) {
    return (

        <>
            {documents &&
                documents.map(document => (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignContent: 'space-between',
                            flexWrap: ' nowrap',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end'
                        }}

                        key={document._id}
                        className=""
                    >
                        <div>{document.invoice_number}</div>
                        <div>{document.invoice_amount}</div>
                        <div>
                            {document.paid}
                            {!document.paid ? (
                                <Button
                                    disabled={document.payment_request}
                                    onClick={() => handleRequestPayment(document)}
                                    startIcon={<AttachMoneyIcon />}
                                    variant="contained"
                                    color="info"
                                >
                                    {' '}
                                    Request Payment
                                </Button>
                            ) : (
                                <Button
                                    disabled={true}
                                    startIcon={<AttachMoneyIcon />}
                                    variant="outlined"
                                    color="info"
                                >
                                    Paid{' '}
                                </Button>
                            )}
                        </div>
                        <div className='d-flex'>
                            <IconButton onClick={() => preview(document)}>
                                <PreviewIcon />
                            </IconButton>
                            <IconButton onClick={() => deleteDoc(document)}>
                                <DeleteIcon />
                            </IconButton>

                        </div>
                    </div>
                ))}
        </>


    )
}
export default Documents;