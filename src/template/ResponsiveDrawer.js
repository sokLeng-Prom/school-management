import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import EventIcon from "@material-ui/icons/Event";
import Courses from "./Courses";
import Classroom from "./Classroom";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ScoreSheet from "./ScoreSheet";
import ClassIcon from "@material-ui/icons/Class";
import { Redirect, useHistory } from "react-router-dom";
import ClassSchedule from "../template/ClassSchedule";
import CreateHomework from "./CreateHomework";
import CreateNotice from "./CreateNotice";
import PeopleIcon from "@material-ui/icons/People";
import AttendanceSheet from "./AttendanceSheet";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

import AdminDashBoard from "./AdminDashBoard";
import AboutUs from "./AboutUs";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    display: "flex",
    height: "100vh",
    flexFlow: "column",
    // flexWrap: "wrap",
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = useHistory();
  const logOut = () => {
    if (localStorage.getItem("id")) localStorage.removeItem("id");
    if (sessionStorage.getItem("id")) sessionStorage.removeItem("id");

    history.push("/sign-in");
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Courses />;
      case 1:
        return <Classroom />;
      case 2:
        return <ScoreSheet />;
      case 3:
        return <ClassSchedule />;
      case 4:
        return <CreateHomework />;
      case 5:
        return <CreateNotice />;
      case 6:
        return <AttendanceSheet />;
      case 7:
        return <AdminDashBoard />;
      case 8:
        return <AboutUs />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  const renderIcon = (index) => {
    switch (index) {
      case 0:
        return <ClassIcon />;
      case 1:
        return <PeopleIcon />;
      case 2:
        return <EqualizerIcon />;
      case 3:
        return <EventIcon />;
      case 4:
        return <HomeWorkIcon />;
      case 5:
        return <NotificationsActiveIcon />;
      case 6:
        return <AssignmentTurnedInIcon />;
    }
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}></div>
      <Divider />
      <List>
        {[
          "Courses",
          "Classroom",
          "Create Score Sheet",
          "Class Schedule",
          "Create Assignments",
          "Create Notice",
          "Attendance",
          "Admin Dashboard",
          "About Us",
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            <ListItemIcon>{renderIcon(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Logout"].map((text, index) => (
          <ListItem button key={text} onClick={() => logOut()}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {/* <Courses /> */}
        {renderContent()}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
