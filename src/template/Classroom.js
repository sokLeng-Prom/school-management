import ControlledAccordion from "../components/ControlledAccordion";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    // borderSpacing: "separ"
    // height: "100vh",
    // paddingTop: "10rem",
  },
}));

export default function Classroom() {
  const classes = useStyles();
  const mockClassroom = [
    {
      courseCode: "ACC 101",
      courseName: "Principles of Accounting",
      credit: 3,
      faculty: "Faculty of Engineering",
      description:
        "This foundation course is designed to introduce students to the fundamentals of preparing and recording financial documentation from originating documents and processing ledger transactions up to the trial balance stage. The course mainly covers the knowledge of fundamental accounting concepts for different types of business entities, including the purpose of accounting, the users of accounting information and an introduction to recording transactional accounting data in the double entry bookkeeping system. The course specifically concentrates in depth on recording, processing, and reporting business transactions and events, including the specific accounting for basic financial statement items, which are prerequisites for preparation of final accounts. Overall, the course aims to help students to develop knowledge and understanding of the main types of business transactions and documentation and how these are recorded in an accounting system up to the trial balance stage. ",
    },
    {
      courseCode: "ACC 201",
      courseName: "Principles of Accounting I",
      credit: 3,
      faculty: "Faculty of Engineering",
      description:
        "Intended for students with no previous exposure to financial accounting, this course provides students the knowledge and skills necessary to read, understand, and analyze financial statements. In particular, this course covers: how to record and maintain accounting records (i.e., bookkeeping and accrual accounting), how to prepare and interpret a firm's primary financial statements (i.e., the balance sheet, the income statement, and the statement of cash flows). Overall, the course adopts a decision-making perspective on accounting, emphasizing the relationships between accounting data and the underlying economic events that generated them.",
    },
    {
      courseCode: "ACC 203",
      courseName: "Principles of Accounting - ACCA F3",
      credit: 3,
      faculty: "Faculty of Engineering",
      description: "Discontinued",
    },
    {
      courseCode: "ACC 301",
      courseName: "Financial Accounting",
      credit: 3,
      faculty: "Faculty of Engineering",
      description:
        "Financial Accounting introduces the double-entry accounting system and extends the understanding of the basic principles of financial accounting. Students who successfully complete this course should be able to identify, understand and apply basic financial accounting principles in the preparation of accounting reports.",
    },
    {
      courseCode: "ACC 310",
      courseName: "Managerial Accounting",
      credit: 3,
      faculty: "Faculty of Engineering",
      description:
        "This course provides an introduction to the fundamentals of management accounting. Topics include cost accounting terminology, job costing, process costing, activity-based costing, activity-based management, cost-volume-profit analysis, budgeting, standard costing, variance analysis, responsibility accounting, variable costing, transfer pricing and decision making.",
    },
  ];

  // const renderContent = () => {
  //   mockClassroom.map((course) => (
  //     <ControlledAccordion course={course}></ControlledAccordion>
  //   ));
  // };
  return (
    <div className={classes.root}>
      {/* <ControlledAccordion></ControlledAccordion> */}
      {mockClassroom.map((course) => (
        <ControlledAccordion course={course}></ControlledAccordion>
      ))}
    </div>
  );
}
