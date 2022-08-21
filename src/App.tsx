import { colors, createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
// date-fns
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MuiResponsiveness from "./components/core/MuiResponsiveness";
import MuiTabs from "./components/lab/MuiTabs";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral:{
      main:colors.grey[500],
      darker:colors.grey[700]
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="" style={{ margin: "5em" }}>
          <MuiResponsiveness />
          {/* <MuiMasonry />
        <MuiTimeLine /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDatePicker /> */}
          <MuiTabs />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
