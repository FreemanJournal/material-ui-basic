import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

export default function MuiLayout() {
    return (
        <Paper sx={{padding:5}}>
            <Stack
                sx={{ border: "1px solid", padding: "2em" }}
                spacing={2}
                direction="row"
                
                divider={<Divider orientation="vertical" flexItem />}
            >
                <Box
                    sx={{
                        backgroundColor: "primary.light",
                        color: "white",
                        height: "10em",
                        width: "10em",
                        padding: "5em",
                        "&:hover": {
                            backgroundColor: "primary.dark",
                        },
                    }}
                >
                    MuiBox
                </Box>
                <Box
                    display={"flex"}
                    height="10em"
                    width="10em"
                    bgcolor="primary.dark"
                    p={2}
                    color="common.white"
                >
                    Hay Mom
                </Box>
                <Box
                    display={"flex"}
                    height="10em"
                    width="10em"
                    bgcolor="primary.dark"
                    p={2}
                    color="common.white"
                >
                    Hay Mom
                </Box>
            </Stack>
            <Grid container my={4} spacing={1} rowSpacing={4}>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p={5}>Item 1</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p={5}>Item 2</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p={5}>Item 3</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p={5}>Item 4</Box>
                </Grid>

            </Grid>
        </Paper>
    );
}
