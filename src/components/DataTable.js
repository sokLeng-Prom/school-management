import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTableCell: {
      // Name of the rule
      root: {
        // Some CSS
        borderBottom: "none",
      },
    },
  },
});

const useStyles = makeStyles({
  tableTop: {
    minWidth: 650,
    // borderCollapse: "separate",
    // borderSpacing: "1rem",
  },

  tableBottom: {
    borderCollapse: "separate",
    borderSpacing: "0 10rem",
    backgroundColor: "red",
    borderRadius: "1rem",
  },

  header: {
    backgroundColor: "#FAFAFA",
  },

  row: {
    backgroundColor: "white",
    borderRadius: "1rem",
    // borderTopLeftRadius: "100px",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table className={classes.tableTop} aria-label="simple table">
          <TableHead className={classes.header}>
            <TableRow>
              <TableCell>Course Code</TableCell>
              <TableCell align="right">Course Name</TableCell>
              <TableCell align="right">Course Schedule</TableCell>
              <TableCell align="right">Course Instructor</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <Table className={classes.tableBottom}>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className={classes.row}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
