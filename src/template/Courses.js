import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useEffect } from 'react'

import SearchBox from '../components/SearchBox'
import DataTable from '../components/DataTable'
import DataTableDemo from '../components/DataTableDemo'

export default function Courses() {
    const useStyles = makeStyles((theme) => ({
        drawer: {
            width: 260,
            height: "100%",
            backgroundColor: 'black',
        },
        container: {
            display: "flex",
            flex: "1 1 auto",
        },
        content: {
            width: "100%",
            // backgroundColor: 'yellow'
        },
        toolbar: theme.mixins.toolbar
    }));

    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.drawer}></div>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <SearchBox />
                {/* <DataTable/> */}
                <DataTableDemo></DataTableDemo>
            </div>
        </div>
    )
}
