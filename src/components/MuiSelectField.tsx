import { Box, MenuItem, Stack, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

export default function MuiSelectField() {
    const [country, setCountry] = useState<string>('');
    const [countries, setCountries] = useState<string[]>([]);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    };
    const handleMultipleSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log('multi select', value);
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    return (
        <Box maxWidth="20em">
            <Stack spacing={3}>
                <TextField
                    label="Select country"
                    select
                    value={country}
                    onChange={handleChange}
                    fullWidth
                >
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="BN">Bangladesh</MenuItem>
                    <MenuItem value="VN">Vietnam</MenuItem>
                </TextField>
                {/* Multi select */}
                <TextField
                    label="Select country"
                    select
                    value={countries}
                    onChange={handleMultipleSelect}
                    fullWidth
                    SelectProps={{
                        multiple: true
                    }}
                    size="small"
                >
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="BN">Bangladesh</MenuItem>
                    <MenuItem value="VN">Vietnam</MenuItem>
                </TextField>
            </Stack>

        </Box>
    );
}
