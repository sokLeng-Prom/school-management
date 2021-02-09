import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MediaControlCard from "../components/MediaControlCard";

import attendanceLogo from "../static/img/attendanceLogo.svg";

// import FullScreenDialogue from "../components/FullScreenDialogue";

import MediaControlCardWithDialogue from "../components/MediaControlCardWithDialogue";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordion: {
    margin: "3rem",
    boxShadow: "none",
  },
  detail: {
    display: "flex",
    justifyContent: "space-between",
    // width: "80%",
    cursor: "pointer",
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const cardMedia = [attendanceLogo, attendanceLogo, attendanceLogo];
  // const handleChange = () => {
  //   setExpanded(!expanded);
  // };

  // const [data, setData] = useState(props.course.data);

  // useEffect(() => {
  //   // let a = [...data["assignments"]];
  //   // console.log(data["attendance"]);
  //   // console.log(props.course.data["quiz"]);
  //   // let b = [...data["quiz"]];
  //   // let c = [...data["assignments"]];

  //   // console.log(a);
  // }, []);

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordion}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            {props.course.courseCode} - {props.course.courseName}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Touch NgounChhay
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
          {/* <MediaControlCard></MediaControlCard> */}
          {Object.keys(props.course.data).map((title, index) => (
            <MediaControlCardWithDialogue
              title={title.toUpperCase()}
              // data={props.course.data[title]}
              data={props.course.data[title]}
              image={cardMedia[index]}
            >
              {/* {console.log(data[title])} */}
            </MediaControlCardWithDialogue>
          ))}
          {/* <Typography>PHD</Typography> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
