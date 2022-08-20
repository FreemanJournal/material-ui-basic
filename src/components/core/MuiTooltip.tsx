import { Delete } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

export default function MuiTooltip() {
    return (
        <Tooltip title="Delete" placement='right' enterDelay={500} leaveDelay={200}>
            <IconButton>
                <Delete />
            </IconButton>
        </Tooltip>
    )
}
