import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";

export default function MuiCard() {
    return (
        <Box width="20em">
            <Card>
                <CardMedia
                    component={"img"}
                    height="140"
                    image="https://source.unsplash.com/random"
                    // image="https://shorturl.at/atx18"
                />
                <CardContent>
                    <Typography variant="h5" component={"div"} gutterBottom>
                        React
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                        ducimus harum minus, et quisquam cum quidem, quibusdam corporis
                        architecto consectetur fugiat natus qui, eaque ratione cumque
                        temporibus dignissimos commodi optio?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
