import { PaletteColor, PaletteColorOptions } from "@mui/material"
import { CSSProperties } from "react"

// module augmentation in typescript
declare module '@mui/material/styles' {
    // add a new color theme
    interface Theme {
        status: {
            danger: string
        }
    }
    interface ThemeOptions {
        status: {
            danger: CSSProperties['color']
        }
    }
    // change default color

    interface Palette {
        neutral?: PaletteColor
    }
    interface PaletteOptions {
        neutral?: PaletteColorOptions
    }

    interface SimplePaletteColorOptions{
        darker?:string
    }
    interface PaletteColor{
        darker?:string
    }
}