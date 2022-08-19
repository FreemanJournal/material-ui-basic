import { CatchingPokemon } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import React from 'react'

export default function MuiNavbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start">
                    <CatchingPokemon />
                </IconButton>
            </Toolbar>

        </AppBar>
    )
}
