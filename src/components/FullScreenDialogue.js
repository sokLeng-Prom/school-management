import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import EnhancedTable from "../components/EnhancedTable";

import FolderList from "../components/FolderList";
import { Folder } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  //   const [open, setOpen] = React.useState(props.open);
  //   const handleClose = () => {
  //     setOpen(false);
  //     console.log(open);
  //   };

  useEffect(() => console.log(props.data), []);

  const conditionalRendering__FolderList = (item, index) => {
    if (props.title === "ATTENDANCE") {
      return (
        <FolderList
          title={`Week ${index + 1}`}
          type={props.title}
          status={item.status}
          date={item.date}
        ></FolderList>
      );
    } else if (props.title === "ASSIGNMENT") {
      return (
        <FolderList
          type={props.title}
          title={`Assignment ${item.index}`}
          score={item.score}
        ></FolderList>
      );
    } else if (props.title === "QUIZ") {
      return (
        <FolderList
          type={props.title}
          title={`Quiz ${item.index}`}
          score={item.score}
        ></FolderList>
      );
    } else if (props.title === "NOTICE") {
      // return "Hello";
      return (
        <FolderList
          title={`${item.description}`}
          // score={item.score}
        ></FolderList>
      );
    }
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.handleClick}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClick}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.title}
              {props.name}
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={props.handleClick}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        {/* <EnhancedTable rows={props.data.attendance}></EnhancedTable> */}
        {/* <List> */}
        {props.data.map((item, index) =>
          conditionalRendering__FolderList(item, index)
        )}
        {/* <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem> */}
        {/* </List> */}
      </Dialog>
    </div>
  );
}
