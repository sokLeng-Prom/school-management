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

export default function AlertError(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Alert
        style={{ display: props.errorMsg ? "flex" : "none" }}
        severity="error"
      >
        <AlertTitle>Error</AlertTitle>
        {props.errorMsg} — <strong>Please try again!</strong>
      </Alert>
    </MuiThemeProvider>
  );
}
