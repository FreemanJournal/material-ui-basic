import { PanoramaFishEye, RemoveRedEye, Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MuiTextField() {
    const [showPass, setShowPass] = useState<boolean>(false);
    const [passValue, setPassValue] = useState<string>();
    return (
        <Stack spacing={2} width="20em" marginX="auto">
            <Stack spacing={2}>
                <TextField label="Email" type="email" size="small" required />
                <TextField
                    label="Password"
                    type="password"
                    size="small"
                    value={passValue}
                    onChange={(e) => setPassValue(e.target.value)}
                    error={!passValue}
                    //Not showing error on render is the job for form library (React form,formik etc...)
                    required
                    helperText={!passValue ? 'Required' : "Do not share your password with anyone."}
                    
                />

            </Stack>
            <Stack spacing={2}>
                <TextField
                    label="Amount"
                    size="small"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />

                <TextField
                    label="Password"
                    type={showPass ? "text" : "password"}
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={() => setShowPass(s => !s)}>
                                    {showPass ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
        </Stack>
    );
}
