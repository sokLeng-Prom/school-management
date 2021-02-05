import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  test: {
    backgroundColor: "orange",
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  // const handleChange = () => {
  //   setExpanded(!expanded);
  // };

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
            Sotheara Veng
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>PHD</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
