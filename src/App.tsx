import { LocalizationProvider } from "@mui/x-date-pickers";
// date-fns
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MuiDatePicker from "./components/lab/MuiDatePicker";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="" style={{ margin: "5em" }}>
        {/* <MuiLoadingButton /> */}
        <MuiDatePicker />
      </div>
    </LocalizationProvider>
  );
}

export default App;
