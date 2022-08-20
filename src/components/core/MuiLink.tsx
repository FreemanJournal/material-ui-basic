import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

export default function MuiLink() {
    return (
        <Stack spacing={2} direction="row" m={4}>
            <Link href='/' underline='none'>Go to home</Link>
            <Link href='/' color="secondary" underline='hover'>Go to School</Link>
            <Typography variant='h6'>
                <Link href='/' underline='none'>Go to home</Link>
            </Typography>

        </Stack>
    )
}
