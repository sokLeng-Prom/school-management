import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

import tickBox from "../static/img/tickBox.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  white: {
    backgroundColor: "white",
  },
}));

export default function FolderList(props) {
  const classes = useStyles();

  const conditionalRendering__Avatar = () => {
    if (props.type === "ATTENDANCE") {
      return <Avatar src={tickBox}></Avatar>;
    } else {
      // for quiz and assignments
      return <Avatar className={classes.orange}>10</Avatar>;
    }
  };

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>{conditionalRendering__Avatar()}</ListItemAvatar>
        <ListItemText primary={props.title} secondary={props.date} />
      </ListItem>
    </List>
  );
}
