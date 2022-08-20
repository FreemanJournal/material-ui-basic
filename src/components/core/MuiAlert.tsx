import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Divider, Stack } from "@mui/material";
import React from "react";

export default function MuiAlert() {
    return (
        <Stack spacing={3}>
            <Alert
                severity="error"
                onClose={() => alert("Close Alert")}
                action={<Button size="small">Undo</Button>}
            >
                <AlertTitle>Error</AlertTitle>
                This is a error alert.
            </Alert>

            <Alert severity="success" icon={<Check fontSize="inherit" />}>
                <AlertTitle>Success</AlertTitle>
                This is a success alert.
            </Alert>
            <Divider />
        </Stack>
    );
}
