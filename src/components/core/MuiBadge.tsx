import { Mail } from '@mui/icons-material'
import { Badge, Stack } from '@mui/material'
import React from 'react'

export default function MuiBadge() {
    return (
        <Stack spacing={2} direction={'row'} p={5}>
            <Badge badgeContent={5} color="primary">
                <Mail />
            </Badge>
            <Badge badgeContent={0} color="primary" showZero>
                <Mail />
            </Badge>
            <Badge badgeContent={1000} color="primary" showZero max={999}>
                <Mail />
            </Badge>
            <Badge variant='dot' color="primary">
                <Mail />
            </Badge>
            <Badge variant='dot' color="primary" invisible={true}>
                <Mail />
            </Badge>
        </Stack>
    )
}
