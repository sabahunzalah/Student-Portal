import * as React from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

// Dummy attendance data
const dataset = [
  { month: "January", attendance: 15 },
  { month: "February", attendance: 18 },
  { month: "March", attendance: 25 },
  { month: "April", attendance: 14 },
  { month: "May", attendance: 23 },
  { month: "June", attendance: 20 },
  { month: "July", attendance: 5 },
  { month: "August", attendance: 17 },
  { month: "September", attendance: 14 },
  { month: "October", attendance: 8 },
  { month: "November", attendance: 10 },
  { month: "December", attendance: 15 },
];

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {
  return <Stack direction="column" justifyContent="space-between" sx={{ width: "100%" }}></Stack>;
}

const valueFormatter = (value) => `${value} days`;

const chartSetting = {
  series: [{ dataKey: "attendance", label: "Monthly Attendance", valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-8px)",
    },
  },
};

export default function AttendanceBarGraph() {
  const [tickPlacement, setTickPlacement] = React.useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState("middle");

  return (
    <div style={{ width: "100%"}}>
      <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month", tickPlacement, tickLabelPlacement }]}
        {...chartSetting}
      />
    </div>
  );
}
