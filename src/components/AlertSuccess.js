import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

// .MuiAlertTitle-root
const theme = createMuiTheme({
  overrides: {
    MuiAlertTitle: {
      root: {
        width: "fit-content",
      },
    },
  },
});

export default function AlertSuccess(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Alert
        style={{ display: props.successMsg ? "flex" : "none" }}
        severity="success"
      >
        <AlertTitle>Success</AlertTitle>
        {props.successMsg}
      </Alert>
    </MuiThemeProvider>
  );
}
