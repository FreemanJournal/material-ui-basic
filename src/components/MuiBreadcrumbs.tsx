import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

export default function MuiBreadcrumbs() {
    return (
        <Box m={2}>
            <Breadcrumbs
                aria-label="breadcrumb"
                separator={<NavigateNext />}
                maxItems={2}
                itemsAfterCollapse={2}
            >
                <Link href="/" underline="hover">
                    Home
                </Link>
                <Link href="/" underline="hover">
                    Catalog
                </Link>
                <Link href="/" underline="hover">
                    Accessories
                </Link>
                <Typography color="text.primary">Shoes</Typography>
            </Breadcrumbs>
        </Box>
    );
}
