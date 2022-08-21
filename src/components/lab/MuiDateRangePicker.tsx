import { Box } from '@mui/material'
import React, { useState } from 'react'
import {DateRange,DateRangePicker} from '@mui/x-date-pickers-pro'

export default function MuiDateRangePicker() {
    const [DateRangePicker, setDateRangePicker] = useState<DateRange<Date>>([null,null]);
    // It is now pro feature
  return (
    <Box width={'500px'}>
        {/* <DateRangePicker startText="check-in" endText="check-out" /> */}

    </Box>
  )
}
