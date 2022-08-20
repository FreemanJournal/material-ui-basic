import {
    Box,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";

export default function MuiRadioButton() {
    const [radioValue, setRadioValue] = useState<string>('');
    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setRadioValue(event.target.value)

    }
    return (
        <Box>
            <FormControl error>
                <FormLabel id="job-experience-group-label">
                    Years of experience
                </FormLabel>
                <RadioGroup
                    name="job-experience-group"
                    aria-labelledby="job-experience-group-label"
                    value={radioValue}
                    onChange={handleChange}
                    row
                    
                >
                    <FormControlLabel control={<Radio size="small"/>} label="0-2" value={'0-2'} />
                    <FormControlLabel control={<Radio size="small"/>} label="3-5" value={'3-5'} />
                    <FormControlLabel control={<Radio size="small"/>} label="6-10" value={'6-10'} />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    );
}
