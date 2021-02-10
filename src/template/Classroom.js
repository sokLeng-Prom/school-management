import ControlledAccordion from "../components/ControlledAccordion";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { BASE_URL } from "../static/const";
import axios from "axios";

// import ControlledAccordion from "../components/ControlledAccordion_Test";

const useStyles = makeStyles((theme) => ({
  root: {
    // borderSpacing: "separ"
    // height: "100vh",
    // paddingTop: "10rem",
  },
}));

export default function Classroom() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const [expanded, setExpanded] = useState(false);

  const fetch = async () => {
    const resp = await axios.get(
      `${BASE_URL}/users?id=${localStorage.getItem("id")}`
    );
    setData(Object.values(resp.data[0].data.class));
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    fetch();
  }, []);

  // const setAccordionExpand = (index) => {
  //   if (expand === index) return true;
  //   else return false;
  // };

  // const renderContent = () => {
  //   mockClassroom.map((course) => (
  //     <ControlledAccordion course={course}></ControlledAccordion>
  //   ));
  // };
  return (
    <div className={classes.root}>
      {/* <ControlledAccordion></ControlledAccordion> */}
      {data.map((course, index) => (
        <ControlledAccordion
          expanded={expanded}
          handleChange={handleChange}
          index={index}
          course={course}
        ></ControlledAccordion>
      ))}
      {/* <ControlledAccordion></ControlledAccordion> */}
    </div>
  );
}
