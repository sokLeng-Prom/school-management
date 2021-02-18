import React from "react";
import { useState } from "react";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
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
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AdminDashBoard from "./AdminDashBoard";
import AboutUs from "./AboutUs";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info";
import SignUp from "./SignUp";
import axios from "axios";
import { ArrayIsEmpty, BASE_URL, UUID_API_URL } from "../static/const";
import AssignCourse from "./AssignCourse";
import { Create } from "@material-ui/icons";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#e6e7e7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
    fontSize: "1rem",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      background: "#7e8e91",
    },
    backgroundColor: "red",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  whiteBackground: {
    background: "white",
    height: "100vh",
    width: "85vw",
    margin: "1vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  // grayBackground: {
  //   background: "#ebecf0",
  //   margin: "1rem",
  //   height: "90%",
  //   width: "80%"

  // },
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
    backgroundColor: "#5a707e",
    color: "white",
    fontSize: "1rem",
  },
  rowDrawer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    height: "100vh",
    flexFlow: "column",
    // flexWrap: "wrap",
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [role, setRole] = useState(localStorage.getItem("role"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // retrive uuid from open source api
  const getUUID = async () => {
    const res = await axios.get(UUID_API_URL);
    return res.data;
  };

  // to be done
  const fSignUp = async (response) => {
    // uuid req
    const uuid = await getUUID();

    //post data to db.json
    const param = {
      id: uuid,
      username: response.username,
      password: response.password,
      personal_info: {
        name: response.personal_info.name,
        age: response.personal_info.age,
        national_id_num: response.personal_info.national_id_num,
        email: response.personal_info.email,
      },
      role: response.role,
      data: {
        class: {},
      },
    };
    // query if username exist or not
    const resp = await axios.get(
      `${BASE_URL}/users?username=${response.username}`
    );

    // console.log(resp.data);
    if (ArrayIsEmpty(resp.data)) await axios.post(`${BASE_URL}/users`, param);
    else return { status: false, msg: "Username Already Exist" };

    return {
      status: true,
      msg: "Account Created",
    };

    // if (resp.data) await axios.post(`${BASE_URL}/users`, param);
    // else return ;
    // else
    // return
  };

  const history = useHistory();
  const logOut = () => {
    if (localStorage.getItem("id")) localStorage.removeItem("id");
    if (sessionStorage.getItem("id")) sessionStorage.removeItem("id");

    history.push("/sign-in");
  };

  const renderDrawerMenu = () => {
    if (role === "teacher") {
      return [
        "Courses",
        "Create Score Sheet",
        "Class Schedule",
        "Create Assignments",
        "Create Notice",
        "Attendance",
        "About Us",
      ];
    } else if (role === "student") {
      return ["Courses", "Classroom", "Class Schedule", "About Us"];
    } else if (role === "admin") {
      return [
        "Admin Dashboard",
        "Courses",
        "Register New User",
        "Assign Course",
        "About Us",
      ];
    }
  };

  const renderTeacher = () => {
    switch (activeTab) {
      case 0:
        return <Courses />;
      case 1:
        return <ScoreSheet />;
      case 2:
        return <ClassSchedule />;
      case 3:
        return <CreateHomework />;
      case 4:
        return <CreateNotice />;
      case 5:
        return <AttendanceSheet />;
      case 6:
        return <AboutUs />;
    }
  };

  const renderStudent = () => {
    switch (activeTab) {
      case 0:
        return <Courses />;
      case 1:
        return <Classroom />;
      case 2:
        return <ClassSchedule />;
      case 3:
        return <AboutUs />;
    }
  };

  const renderAdmin = () => {
    switch (activeTab) {
      case 0:
        return <AdminDashBoard />;
      case 1:
        return <Courses />;
      case 2:
        return <SignUp onSubmit={fSignUp} />;
      case 3:
        return <AssignCourse />;
      case 4:
        return <AboutUs />;
    }
  };

  // const renderStudent = () => {
  //   switch (activeTab) ()
  // }

  const renderContent = () => {
    if (role === "teacher") {
      return renderTeacher();
    } else if (role === "student") {
      return renderStudent();
    } else if (role === "admin") {
      return renderAdmin();
    }
    // switch (activeTab) {
    //   case 0:
    //     return <Courses />;
    //   case 1:
    //     return <Classroom />;
    //   case 2:
    //     return <ScoreSheet />;
    //   case 3:
    //     return <ClassSchedule />;
    //   case 4:
    //     return <CreateHomework />;
    //   case 5:
    //     return <CreateNotice />;
    //   case 6:
    //     return <AttendanceSheet />;
    //   case 7:
    //     return <AdminDashBoard />;
    //   case 8:
    //     return <AboutUs />;
    //   case 9:
    //     return <SignUp onSubmit={fSignUp} />;
    //   case 10:
    //     return <AssignCourse />;
    //   default:
    //     return <div>Page Not Found</div>;
    // }
  };

  const renderIcon = (index) => {
    switch (index) {
      case 0:
        return <ClassIcon className={classes.icon} />;
      case 1:
        return <PeopleIcon className={classes.icon} />;
      case 2:
        return <EqualizerIcon className={classes.icon} />;
      case 3:
        return <EventIcon className={classes.icon} />;
      case 4:
        return <HomeWorkIcon className={classes.icon} />;
      case 5:
        return <NotificationsActiveIcon className={classes.icon} />;
      case 6:
        return <AssignmentTurnedInIcon className={classes.icon} />;
      case 7:
        return <DashboardIcon className={classes.icon} />;
      case 8:
        return <InfoIcon className={classes.icon} />;
      case 9:
        return <AccessibilityNewIcon className={classes.icon} />;
      case 10:
        return <AssignmentLateIcon className={classes.icon} />;
    }
  };

  // [
  //         "Courses",
  //         "Classroom",
  //         "Create Score Sheet",
  //         "Class Schedule",
  //         "Create Assignments",
  //         "Create Notice",
  //         "Attendance",
  //         "Admin Dashboard",
  //         "About Us",
  //         "Register New User",
  //         "Assign Course",
  //       ]

  const drawer = (
    <div>
      <div className={classes.toolbar}></div>
      <Divider />
      <List>
        {renderDrawerMenu().map((text, index) => (
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
        {["Logout"].map((text, index) => (
          <ListItem button key={text} onClick={() => logOut()}>
            <ListItemIcon>
              <ExitToAppIcon className={classes.icon} />
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
      <div className={classes.rowDrawer}>
        <div>
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
        </div>
        {/* <div className={classes.whiteBackground}> */}
        {/* <CssBaseline /> */}

        <main className={classes.content}>
          {/* <Courses /> */}
          {renderContent()}
        </main>
        {/* </div> */}
      </div>

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
