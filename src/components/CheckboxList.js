import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
    // maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Paper style={{ maxHeight: 400, overflow: "auto" }}>
      <List className={classes.root}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              {/* <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction> */}
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
