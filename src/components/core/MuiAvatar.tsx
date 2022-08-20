import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

export default function MuiAvatar() {
    return (
        <Stack spacing={3} p={4}>
            <Stack direction={"row"} spacing={3}>
                <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
            </Stack>
            <Stack direction={"row"} spacing={3}>
                <AvatarGroup max={2}>
                    <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
                    <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
                    <Avatar
                        src="https://randomuser.me/api/portraits/women/79.jpg"
                        alt="Jane Doe"
                    />
                    <Avatar
                        src="https://randomuser.me/api/portraits/men/51.jpg"
                        alt="Kamal Khan"
                    />
                </AvatarGroup>
            </Stack>
            <Stack direction={"row"} spacing={3}>
                <Avatar variant="rounded" sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>
                    BW
                </Avatar>
                <Avatar variant="square" sx={{ bgcolor: "success.light", width: 48, height: 48 }}>
                    CK
                </Avatar>
            </Stack>
        </Stack>
    );
}
