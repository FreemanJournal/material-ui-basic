import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

export default function MuiChip() {
    const [chips, setChips] = useState<string[]>(['Chip 1', 'Chip 2', 'Chip 3']);
    const handleDelete = (chipToDelete:string)=>{
        setChips(s => s.filter(chip => chip !== chipToDelete))
    }
    return (
        <Stack direction={"row"} spacing={1}>
            <Chip label="Cute Chip" color="primary" size="small" icon={<Face />} />
            <Chip variant="outlined" label="Cute Chip" color="primary" size="small" />
            <Chip
                variant="outlined"
                label="Cute Chip"
                color="primary"
                size="small"
                avatar={<Avatar>V</Avatar>}
            />
            <Chip label="Click" color="primary" onClick={() => alert("Clicked")} />
            <Chip
                label="Delete"
                color="error"
                onClick={() => alert("Clicked")}
                onDelete={() => alert("Delete handler called!")}
            />
            {
                chips.map((item,index)=>(
                    <Chip key={index} label={item} onDelete={()=>handleDelete(item)}/>
                ))
            }
        </Stack>
    );
}
