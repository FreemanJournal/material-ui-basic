import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

export default function MuiDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                onClick={() => setIsDrawerOpen(true)}
            >
                <Menu />
            </IconButton>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width="15em" textAlign={"center"} role={"presentation"}>
                    <Typography variant="h6" component={"div"}>
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
}
