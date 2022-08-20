import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
interface TableData {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    ip_address: string
}
export default function MuiTable() {
    const [data, setData] = useState<TableData[]>([]);
    useEffect(() => {
        fetch('/data/MOCK_DATA.json')
            .then(result => result.json())
            .then(data => setData(data))
    }, [])

    return (
        <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data?.map(row => (
                            <TableRow key={row.id} sx={{ '&:last-child td,&:last-child th': { border: 0 } }}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                            </TableRow>

                        ))
                    }
                </TableBody>
            </Table>


        </TableContainer>
    )
}
