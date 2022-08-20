import { CopyAll, Edit, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

export default function MuiSpeedDial() {
    return (
        <SpeedDial
            ariaLabel="Navigation speed dial"
            sx={{ position: "absolute", bottom: 16, right: 0 }}
            icon={<SpeedDialIcon openIcon={<Edit/>}/>}
        >
            <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" />
            <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
            <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
        </SpeedDial>
    );
}
