import { Box, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputAdornment, Paper, Stack, Switch, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

export default function MuiSwitch() {
    const [checked, setChecked] = useState<boolean>(false);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setChecked(event.target.checked) };
    return (
        <Box>
            <FormControlLabel
                label="Dark mode"
                control={<Switch checked={checked} onChange={handleChange} color={'success'} />}
            />
            <Box width={'20em'} mx="auto" textAlign={'left'} boxShadow="revert">
                <Paper>
                    <Typography padding='1em' variant="subtitle1"  >Shipping Configuration</Typography>
                    <Divider />
                    <Box padding={'1em'} gap={2} display="flex" flexDirection="column">
                        <Stack spacing={5} direction={"row"} width="100%" justifyContent="space-between" border="1em">
                            <FormLabel id="free-shipping-label">
                                <Typography variant="body2"> Free shipping</Typography>
                            </FormLabel>
                            <Switch
                                aria-labelledby="free-shipping-label"
                                size="small"
                                checked={checked}
                                onChange={handleChange}
                            />
                        </Stack>
                        <Stack spacing={5} direction={"row"} width="100%" justifyContent="space-between" border="1em">
                            <FormLabel id="flat-rate-label">
                                <Typography variant="body2"> Flat rate</Typography>
                            </FormLabel>
                            <Switch
                                aria-labelledby="flat-rate-label"
                                size="small"

                                checked={!checked}
                                onChange={() => setChecked(s => !s)}
                            />
                        </Stack>
                        <TextField
                            label="Shipping Cost"
                            size="small"
                            type={"number"}
                            helperText
                            disabled={checked}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                        <Stack spacing={5} direction={"row"} width="100%" justifyContent="space-between" border="1em">
                            <FormLabel id="product-quantity-multiply-label">
                                <Typography variant="body2"> Is product quantity multiply ?</Typography>
                            </FormLabel>
                            <Switch
                                aria-labelledby="product-quantity-multiply-label"
                                size="small"

                            // checked={skills.includes("html")}
                            // onChange={handleSkillChange}
                            />
                        </Stack>
                    </Box>

                </Paper>

            </Box>
        </Box>

    );
}
