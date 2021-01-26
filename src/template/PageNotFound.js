// import animationData from "../static/lottie/404page.json";
// import animationData from "../static/lottie/error-404-page.json";
// import animationData from "../static/lottie/5451-search-file.json";
import animationData from "../static/lottie/lf30_editor_3rjfn5m0.json";

import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    height: "100vh",
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function PageNotFound() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Lottie options={defaultOptions}></Lottie>
    </div>
  );
}
