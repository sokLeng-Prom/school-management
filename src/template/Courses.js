import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

import SearchBox from "../components/SearchBox";
import DataTable from "../components/DataTable";
import DataTableDemo from "../components/DataTableDemo";
import Selector from "../components/selector";

import { BASE_URL, removeSpace } from "../static/const";
import axios from "axios";

export default function Courses() {
  const [rows, setRows] = useState([]);
  const [temp, setTemp] = useState([]);

  const [searchBy, setSearchBy] = useState(["courseCode"]);

  const searchByHandler = (changes) => {
    setSearchBy(changes);
  };

  const fetch = async () => {
    const resp = await axios.get(`${BASE_URL}/courses`);
    setRows(resp.data);
    setTemp(resp.data);
  };
  useEffect(() => fetch(), []);

  const fSearch = (query, queryType) => {
    if (query.length === 0) {
      setRows(temp);
    } else {
      const filteredArr = rows.filter((row) =>
        removeSpace(row[queryType].toLowerCase()).includes(
          removeSpace(query.toLowerCase())
        )
      );
      setRows(filteredArr);
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
  }));

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.drawer}></div>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <div className={classes.toolbar}>
          <SearchBox searchBy={searchBy} fSearch={fSearch} />
          <Selector
            searchBy={searchBy}
            searchByHandler={searchByHandler}
          ></Selector>
        </div>
        <DataTableDemo rows={rows}></DataTableDemo>
      </div>
    </div>
  );
}
