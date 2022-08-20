import { CircularProgress, Divider, LinearProgress, Stack } from '@mui/material'
import React from 'react'

export default function MuiProgress() {
  return (
    <Stack spacing={2}>
        <CircularProgress/>
        <CircularProgress color='error'/>
        <CircularProgress color='error' variant='determinate' value={60}/>
        <Divider/>
        <LinearProgress/>
        <LinearProgress color='error'/>
        <LinearProgress color='error' variant='determinate' value={60}/>

    </Stack>
  )
}
