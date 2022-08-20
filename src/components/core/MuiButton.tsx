import {
    FormatBold,
    FormatBoldOutlined,
    FormatItalic,
    FormatUnderlined,
} from "@mui/icons-material";
import { Button, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { MouseEvent, useState } from "react";

export default function MuiButton() {
    const [textFormat, setTextFormat] = useState<string | null>(null);
    // const [textFormat, setTextFormat] = useState<string[]>([]);
    console.log("textFormat", textFormat);
    const handleTextFormatChange = (
        event: MouseEvent<HTMLElement>,
        updatedFormats: string | null
    ) => {
        setTextFormat(updatedFormats);
    };
    return (
        <Stack spacing={3} direction="row">
            <Button variant="contained" color="info">
                Tap me hard
            </Button>
            <Button variant="outlined" size="small">
                Tap me hard
            </Button>
            <ToggleButtonGroup
                aria-label="text formatting"
                value={textFormat}
                onChange={handleTextFormatChange}
                exclusive //without exclusive it will return an array
            >
                <ToggleButton value="bold" aria-label="bold" defaultChecked>
                    <FormatBold />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                    <FormatItalic />
                </ToggleButton>
                <ToggleButton value="underline" aria-label="underline">
                    <FormatUnderlined />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
}
