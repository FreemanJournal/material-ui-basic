import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import React, { forwardRef, SyntheticEvent, useState } from "react";

const CustomSnackbarAlert = forwardRef<HTMLDivElement,AlertProps>(
    function SnackbarAlert(props,ref){
        return <Alert elevation={5} ref={ref} {...props}/>
    }
)
export default function MuiSnackbar() {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        console.log({reason})
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
            >
                <CustomSnackbarAlert onClose={handleClose} severity='success' action={<Button color="inherit" size="small" onClick={handleClose}>Undo</Button>}>
                    Form submitted successfully
                </CustomSnackbarAlert>
            </Snackbar>
            <Snackbar
                message="Form submitted successfully!"
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'right'
                    
                }}
            />
        </>
    );
}
