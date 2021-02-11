// import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { BASE_URL } from "../static/const";

import { useEffect, useState } from "react";
import axios from "axios";

// import { appointments } from "../static/month-appointments";

export default function ClassSchedule() {
  const [data, setData] = useState();
  const currentDate = new Date();

  const fetch = async () => {
    const resp = await axios.get(
      `${BASE_URL}/schedule/${localStorage.getItem("id")}`
    );
    setData(resp.data.calendar);
  };

  useEffect(() => fetch(), []);

  const updateData = async (data) => {
    console.log(data);
    const resp = await axios.put(
      `${BASE_URL}/schedule/${localStorage.getItem("id")}`,
      {
        calendar: data,
      }
    );
    console.log("Update Success");
    const newResp = await axios.get(
      `${BASE_URL}/schedule/${localStorage.getItem("id")}`
    );
    console.log(newResp.data);
  };

  const commitChanges = async ({ added, changed, deleted }) => {
    let tempData = [];
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;
      setData([...data, { id: startingAddedId, ...added }]);
      tempData = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      setData(
        data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        )
      );
      tempData = data.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      );
    }
    if (deleted !== undefined) {
      setData(data.filter((appointment) => appointment.id !== deleted));
      tempData = data.filter((appointment) => appointment.id !== deleted);
    }
    updateData(tempData);
  };
  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState defaultCurrentDate={currentDate} />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
}

// export default class Demo extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: appointments,
//     };
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <Paper>
//         <Scheduler data={data}>
//           <ViewState defaultCurrentDate="2018-07-27" />
//           <MonthView />
//           <Toolbar />
//           <DateNavigator />
//           <TodayButton />
//           <Appointments />
//         </Scheduler>
//       </Paper>
//     );
//   }
// }
