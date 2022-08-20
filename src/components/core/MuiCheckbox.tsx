import { Bookmark, BookmarkAdd, BookmarkBorder } from "@mui/icons-material";
import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";

export default function MuiCheckbox() {
    const [acceptTnC, setAcceptTnC] = useState<boolean>(false);
    const [skills, setSkills] = useState<string[]>([]);
    console.log("skills", skills);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
    };
    const handleSkillChange = (event: ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills,event.target.value])
        }else{
            setSkills(skills.filter((skill)=>skill !== event.target.value))
        }
    };
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept terms and conditions"
                    control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
                />
            </Box>
            <Box>
                <Checkbox
                    checked={acceptTnC}
                    onChange={handleChange}
                    icon={<BookmarkBorder />}
                    checkedIcon={<Bookmark />}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            control={
                                <Checkbox
                                    value={"html"}
                                    checked={skills.includes("html")}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="CSS"
                            control={
                                <Checkbox
                                    value={"css"}
                                    checked={skills.includes("css")}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="JAVASCRIPT"
                            control={
                                <Checkbox
                                    value={"javascript"}
                                    checked={skills.includes("javascript")}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                    </FormGroup>
                    <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    );
}
