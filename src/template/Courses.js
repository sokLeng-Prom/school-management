import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

import SearchBox from "../components/SearchBox";
import EnhancedTable from "../components/EnhancedTable";
import Selector from "../components/selector";

import { BASE_URL, removeSpace } from "../static/const";
import axios from "axios";

export default function Courses() {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  const [searchBy, setSearchBy] = useState(["courseCode"]);

  const searchByHandler = (changes) => {
    setSearchBy(changes);
  };

  const fetch = async () => {
    const resp = await axios.get(`${BASE_URL}/courses`);
    setRows(resp.data);
    setFilteredRows(resp.data);
  };
  useEffect(() => fetch(), []);

  const fSearch = (query, queryType) => {
    if (query.length === 0) {
      setFilteredRows(rows);
    } else {
      const filteredArr = rows.filter((row) =>
        removeSpace(row[queryType].toLowerCase()).includes(
          removeSpace(query.toLowerCase())
        )
      );
      setFilteredRows(filteredArr);
    }
  };

  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 260,
      height: "100%",
      backgroundColor: "black",
    },
    container: {
      display: "flex",
      flex: "1 1 auto",
    },
    content: {
      width: "100%",
      // backgroundColor: 'yellow'
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
    },
    table:{
      backgroundColor: "#47A3F5"
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <div className={classes.drawer}></div> */}
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <div className={classes.toolbar}>
          <SearchBox searchBy={searchBy} fSearch={fSearch} />
          <Selector
            searchBy={searchBy}
            searchByHandler={searchByHandler}
          ></Selector>
        </div>
        <EnhancedTable className={classes.table} rows={filteredRows}></EnhancedTable>
      </div>
    </div>
  );
}
