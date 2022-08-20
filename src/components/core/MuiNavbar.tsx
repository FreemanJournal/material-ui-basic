import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material";
import {
    AppBar,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import { MouseEvent, useState } from "react";

export default function MuiNavbar() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCLose = () => {
        setAnchorEl(null)
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    POKEMON
                </Typography>
                <Stack spacing={2} direction="row">
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button
                        color="inherit"
                        id="resources-button"
                        onClick={handleMenu}
                        aria-controls={open ? "resources-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        endIcon={<KeyboardArrowDown />}
                    >
                        Resources
                    </Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
                <Menu
                    id="resources-menu"
                    anchorEl={anchorEl}
                    open={open}
                    MenuListProps={{ "aria-labelledby": "resources-button" }}
                    onClose={handleCLose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem onClick={handleCLose}>Blog</MenuItem>
                    <MenuItem onClick={handleCLose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
