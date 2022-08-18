import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function MuiRating() {
    const [value, setValue] = useState<number | null>(null);
    console.log({ value });
    const handleChange = (_event: ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    };
    //select same value again wil result in null
    return (
        <Stack>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5}
                size="large"
                icon={<Favorite />}
                emptyIcon={<FavoriteBorder />}
                // readOnly
                // highlightSelectedOnly -> suitable for emoji icons
            />
        </Stack>
    );
}
