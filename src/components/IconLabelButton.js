import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "30vh"
  },
}));

export default function IconLabelButton(props) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={() => props.onClick()}
      className={classes.button}
      startIcon={<SaveIcon />}
    >
      {props.title}
    </Button>
  );
}
