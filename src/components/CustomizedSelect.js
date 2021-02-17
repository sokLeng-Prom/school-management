// import React from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import NativeSelect from "@material-ui/core/NativeSelect";
// import InputBase from "@material-ui/core/InputBase";

// const BootstrapInput = withStyles((theme) => ({
//   root: {
//     "label + &": {
//       marginTop: theme.spacing(3),
//     },
//   },
//   input: {
//     borderRadius: 4,
//     position: "relative",
//     backgroundColor: theme.palette.background.paper,
//     border: "1px solid #ced4da",
//     fontSize: 16,
//     padding: "10px 26px 10px 12px",
//     transition: theme.transitions.create(["border-color", "box-shadow"]),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//     "&:focus": {
//       borderRadius: 4,
//       borderColor: "#80bdff",
//       boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
//     },
//   },
// }))(InputBase);

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

// export default function CustomizedSelect(props) {
//   const classes = useStyles();
//   // const [age, setAge] = React.useState("");
//   // const handleChange = (event) => {
//   //   setAge(event.target.value);
//   // };
//   return (
//     <div>
//       <FormControl className={classes.margin}>
//         <InputLabel htmlFor="demo-customized-select-native">Class</InputLabel>
//         <NativeSelect
//           id="demo-customized-select-native"
//           value={props.option}
//           inputProps={{
//             name: "age",
//             id: "age-native-simple",
//           }}
//           onChange={props.optionHandler}
//           input={<BootstrapInput />}
//         >
//           <option aria-label="None" value=""></option>

//           {props.options.map((c, index) => (
//             <option key={index} value={c}>
//               {c}
//             </option>
//           ))}
//         </NativeSelect>
//       </FormControl>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CustomizedSelect(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="age-native-label-placeholder">
        Age
      </InputLabel>
      <NativeSelect
        value={props.option}
        onChange={props.optionHandler}
        inputProps={{
          name: "age",
          id: "age-native-label-placeholder",
        }}
      >
        <option value="">None</option>
        {/* <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option> */}
        {props.options.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
